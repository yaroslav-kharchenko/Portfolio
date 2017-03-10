// import Template from './categories_tmpl';
let template = require("./categories_tmpl.handlebars");

//Header
import headerView from '../../../components/header/header_view';
import headerController from '../../../components/header/header_controller';
import { data as headerData } from '../../../components/header/header_data';

/**
 * Categories tab view
 * Collects components and displays page content
 * @class CategoriesView
 * @extends View
 */
export default class View {

  constructor(){
    this.template = template;
  }

  /**
   * Render template content into parent selector;
   * @method
   * @memberof CategoriesView
   * @param {object} data - object with page data
   * @param {object} options - object with categories options
   * @param {HTMLElement} parent - selector where content might be inserted
   * context or an element.
   */
  render(data, options, parent){

    let parentElem = $('.categories-block')[0];

    parentElem.innerHTML += this.template({obj: data, options: options});

  }

}