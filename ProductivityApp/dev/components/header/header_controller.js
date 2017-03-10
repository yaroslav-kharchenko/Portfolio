/**
 * Header component controller
 * Consist of methods for header interactions
 * @class HeaderController
 * @param {object} View - header view
 * @param {object} data - object with header data
 * @param {object} options - object with header options
 */
export default class Controller {

  constructor(view, data, options){
    this.view = new view;
    this.data = data;
    this.options = options;
  }

  /**
   * Initialize component
   * @method
   * @memberof HeaderController
   */
  init(){
    this.view.render(this.data, this.options);
  }

}


