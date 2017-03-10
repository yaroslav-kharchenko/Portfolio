import Template from './task-item_tmpl';
import pubsub from '../../js/pubsub';
let template = require("./task-item_tmpl.handlebars");

/**
 * TaskItem component view
 * Consist of methods for TaskItem rendering
 * @class TaskItemView
 */
export default class View {

  constructor(){
    this.template = template;
    this.elem = null;

    // this.subscribe = [
    //   pubsub.subscribe("page/leave", function () {
    //     this.subscribe.forEach(function (subscribe) {
    //       pubsub.unsubscribe(subscribe);
    //     });
    //     window.removeEventListener('click', this.handlers);
    //   }.bind(this))
    // ];
  }

  /**
   * Set's params(classes) to task view
   * @param {HTMLElement} elem - task element
   * @param {object} obj - task parameters
   * @memberof TaskItemView
   */
  setProps(elem,obj){
    let selector = $(elem);
    selector.removeClass();
    selector.addClass('task category--' + obj.category + ' priority--' + obj.priority + ' clearfix');
    if (obj.done){
      selector.addClass('task--done');
    }
    selector.attr('data-is-done', obj.done);
    selector.attr('data-id', obj.id);
    selector.attr('data-filter-role', 'item');
    selector.attr('data-filter-value', obj.priority);
  }

  /**
   * Get dom structure from task template
   * @param {object} obj - task parameters
   * @memberof TaskItemView
   */
  getDom(obj){

    let elem = document.createElement('li');
    this.setProps(elem,obj);
    elem.innerHTML = this.template({obj: obj});

    return elem;
  }

  dateTranslate(data){
    let today = new Date().toString();
    let date = new Date(data.deadline).toString();

    if (today.slice(0,15) === date.slice(0,15) && data.daily){
      return false;
    }
    let dateArr = date.split(' ');
    let day = dateArr[2];
    let month = dateArr[1];
    return {
      day: day,
      month: month
    }
  }

  // setListeners(){
  //
  //   let handlers = (e) => {
  //     if (e.target.classList.contains('trash')) {
  //       e.preventDefault();
  //       console.log('bla-bla');
  //     }
  //   };
  //
  //   this.handlers = handlers;
  //
  //   window.addEventListener('click', this.handlers);
  //
  // }

  /**
   * Renders task template into parent category selector;
   * @method
   * @memberof TaskItemView
   * @param {object} data - task data
   * @param {HTMLElement} parent - selector where content might be inserted
   */
  render(data, parent){
    let config = data;
    config.date = this.dateTranslate(data);
    parent.appendChild( this.getDom(config));
    this.elem = parent.lastElementChild;
    $('.has-tooltip').tooltip();
  }

  /**
   * Updates task view
   * @method
   * @memberof TaskItemView
   * @param {object} data - task data
   */
  update(data){
    let taskElem = $('*[data-id=' + data.id + ']')[0];
    this.setProps(taskElem, data);
    taskElem.innerHTML = this.template({obj: data});
  }

}