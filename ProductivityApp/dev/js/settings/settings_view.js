import Template from './settings_tmpl';
let template = require("./settings_tmpl.handlebars");

//Header
import headerView from '../../components/header/header_view';
import headerController from '../../components/header/header_controller';
import { data as headerData } from '../../components/header/header_data';

/**
 * Settings page view
 * Collects components and displays page content
 * @class SettingsView
 * @extends View
 */
export default class View {

  constructor(){
    this.template = template;
  }

  /**
   * Render template content into parent selector;
   * @method
   * @memberof SettingsView
   * @param {object} data - object with page data
   * @param {object} options - object with page options
   * @param {HTMLElement} parent - selector where content might be inserted
   * context or an element.
   */
  render(data, options, parent){
    document.querySelector('body').innerHTML = '';

    let header = new headerController(headerView, headerData, {title: 'Settings', add: true, remove: false});
    header.init();

    let parentElem = parent || document.querySelector('body');

    parentElem.innerHTML += this.template(data);

    $('.settings-block').tabs();

  }

}