// import Template from '../../components/login-form/login-form_tmpl';
let template = require("../../components/login-form/login-form_tmpl.handlebars");

/**
 * Login page view
 * Collects components and displays page content
 * @class LoginView
 * @extends View
 */
export default class View {

  constructor(){
    this.template = template;
  }

  /**
   * Render template content into parent selector;
   * @method
   * @memberof LoginView
   * @param {object} data - object with page options
   * @param {HTMLElement} parent - selector where content might be inserted
   * context or an element.
   */
  render(data, parent){
    document.querySelector('body').innerHTML = '';
    let parentElem = parent || document.querySelector('body');
    parentElem.classList.add('login-page');
    parentElem.innerHTML = this.template(data);
  }

  throwErrorMsg(msg){

  }

}