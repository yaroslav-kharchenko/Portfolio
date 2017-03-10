// import Template from './task-list_tmpl';
let template = require("./task-list_tmpl.handlebars");
//Header
import headerView from '../../components/header/header_view';
import headerController from '../../components/header/header_controller';
import { data as headerData } from '../../components/header/header_data';

/**
 * TaskList page view
 * Collects components and displays page content
 * @class TaskListView
 * @extends View
 */
export default class View {

  constructor(){
    this.template = template;
  }

  /**
   * Show guide for user to help him with page interactions;
   * @method
   * @memberof TaskListView
   * @param {string} str - option which describe guide name
   */
  showGuide(str){
    const container = document.getElementsByClassName('guide')[0];
    const message = document.createElement('div');
    if (str == 'add'){
      message.classList.add('first_task');
      message.innerHTML = `
          <span class="icomoon">&#xe901;</span>
          <h2 class="guide-message">Add your first task</h2>`;
    }

    container.appendChild(message);
  }

  /**
   * Render template content into parent selector;
   * @method
   * @memberof TaskListView
   * @param {object} data - object with page data
   * @param {HTMLElement} parent - selector where content might be inserted
   */
  render(data, parent){
    document.querySelector('body').innerHTML = '';

    let header = new headerController(headerView, headerData, {title: 'Daily Task List', tasklist: true, add: true, remove: true});
    header.init();

    let parentElem = parent || document.querySelector('body');

    parentElem.innerHTML += this.template();
    document.querySelector('body').classList.add('active-page');
    $('.has-tooltip').tooltip();
  }

}