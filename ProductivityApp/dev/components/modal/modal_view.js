import Template from './modal_tmpl';

/**
 * Modal component view
 * Consist of methods for header interactions
 * @class ModalView
 */
export default class View {

  constructor(){
    this.template = new Template;
  }

  /**
   * Render template content into parent selector;
   * @method
   * @memberof ModalView
   * @param {string} type - type of modal window
   * @param {object} options - object with component options
   * @param {object} config - component configuration
   */
  render(type, options, config){
    let body = document.querySelector('body');
    $(this.template.getDom(type, options, config)).appendTo(body);
  }

}