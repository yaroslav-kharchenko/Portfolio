import pubsub from '../../pubsub';
//Main Page Template
import View from './categories_view';
import { data, options as defaultOpt } from './categories_data';

/**
 * Categories tab controller
 * Collects components and trigger events
 * @class CategoriesController
 * @extends Controller
 */
export default class Controller {

  constructor(){
    this.view = new View();
    this.data = data;
    this.handlers;
  }

  /**
   * Get categories options from page
   * @method
   * @memberof CategoriesController
   * @returns {Object[]} - object which consist of list of categories
   * @returns {string} object[].id1 - id 5 - categories values.
   */
  getOptions(){
    return {
      id1: document.getElementById('category-1').value,
      id2: document.getElementById('category-2').value,
      id3: document.getElementById('category-3').value,
      id4: document.getElementById('category-4').value,
      id5: document.getElementById('category-5').value
    }
  }

  back(){

  }

  /**
   * Publish event that means that user click Save button.
   * @method
   * @memberof CategoriesController
   */
  save(){
    pubsub.publish("click/saveCategories", this.getOptions());
  }

  /**
   * Set handlers for user interactions with page
   * bind them on window
   * @method
   * @memberof CategoriesController
   */
  setListeners(){

    let handlers = (e) => {
      if(e.target.classList.contains('save-button--categories')){
        e.preventDefault();
        this.save();
        location.hash += '#tasklist';
      }
      if(e.target.classList.contains('back-button--categories')){
        e.preventDefault();
      }
    };

    this.handlers = handlers;
    window.addEventListener('click', this.handlers);

  }

  /**
   * Destroy all event handlers on the page
   * @method
   * @memberof CategoriesController
   */
  destroy(){
    window.removeEventListener('click',this.handlers);
  }

  /**
   * Initialize page
   * @method
   * @memberof CategoriesController
   * @param {object} options - object with page options
   */
  init(e, options){
    if (options){
      this.view.render(this.data, options);
      this.setListeners();
    } else {
      this.view.render(this.data, defaultOpt);
      this.setListeners();
    }
  }

}