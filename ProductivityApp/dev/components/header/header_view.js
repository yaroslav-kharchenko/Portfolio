// import Template from './header_tmpl';
let template = require("./header_tmpl.handlebars");
import pubsub from '../../js/pubsub';

/**
 * Header component view
 * Consist of methods for header rendering
 * @class HeaderView
 */
export default class View{

  constructor(){
    this.template = template;
    this.body = document.querySelector('body');
    this.handlers;
    this.removeMode = false;
    this.subscribe = [
      pubsub.subscribe("removeCounter/set",(e,data)=>{
        this.setRemoveCounterValue(data);
      }),
      pubsub.subscribe("removeTasks/clicked", () => {
        this.removeModeToggle();
      }),
      pubsub.subscribe("modal/cancelButton:clicked", () => {
        $('.remove-counter').html('0');
        $('.remove-counter').hide();
      }),
      pubsub.subscribe("removeTasks/apply", () => {
        $('.remove-counter').html('0');
        $('.remove-counter').hide();
      }),
      pubsub.subscribe("page/leave", function () {
        this.subscribe.forEach(function (subscribe) {
          pubsub.unsubscribe(subscribe);
        });
        window.removeEventListener('click',this.handlers);
        window.removeEventListener('scroll',this.headerFixate);
      }.bind(this))
    ];
  }

  /**
   * Fixes header to top if scrollTop > 152
   * @method
   * @memberof HeaderController
   */
  headerFixate() {
    let offset = $(window).scrollTop();
    if (offset > 152) {
      this.body.classList.remove('page-header--static');
      this.body.classList.add('page-header--fixed');
    } else if (offset < 152) {
      this.body.classList.add('page-header--static');
      this.body.classList.remove('page-header--fixed');
    }
  }

  /**
   * Set handlers for user interactions with component
   * bind them on window
   * @method
   * @memberof HeaderController
   */
  setListeners(){

    let handlers = (e) => {
      if (e.target.classList.contains('link-exit')){
        pubsub.publish('click/SignOut');
      }
    };

    this.handlers = handlers;
    window.addEventListener('click', handlers);
    window.addEventListener('scroll', this.headerFixate.bind(this));

  }

  removeModeToggle(){
    if (!this.removeMode){
      this.removeMode = true;
      pubsub.publish("removeTasks/active");
      $('.remove-counter').show();
    } else {
      this.removeMode = false;
      if(+$('.remove-counter').html() > 0){
        pubsub.publish("removeTasks/confirm");
      } else {
        pubsub.publish("modal/cancelButton:clicked");
      }
    }
  }

  setRemoveCounterValue(value){
    $('.remove-counter').html(value);
  }

  /**
   * Render template content into parent selector;
   * @method
   * @memberof CycleControlsView
   * @param {object} data - object with component data
   * @param {object} options - object with component options
   * @param {HTMLElement} parent - selector where content might be inserted
   */
  render(data, options){
    this.body.innerHTML = this.template({obj: data, options: options});
    this.body.classList.add('page-header--static');
    this.setListeners();
  }

}