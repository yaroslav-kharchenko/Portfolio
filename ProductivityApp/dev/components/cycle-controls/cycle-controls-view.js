import Template from './cycle-controls-tmpl';
let template = require("./cycle-controls_tmpl.handlebars");

/**
 * CycleControls component view
 * Displays component content
 * @class CycleControlsView
 */
export default class View {

  constructor(){
    this.template = template;
  }

  /**
   * Render template content into parent selector;
   * @method
   * @memberof CycleControlsView
   * @param {object} data - object with component data
   * @param {object} options - object with cycle options
   * @param {HTMLElement} parent - selector where content might be inserted
   */
  render(parent, data, options){
    let tmplStr = `
    <ul class="column-container controls-container">`;
    for(let i = 0; i < data.length; i++){
      tmplStr += this.template({obj: data[i],options: options[i]});
    }
    tmplStr += `</ul>`;
    parent.innerHTML = tmplStr;
  }

}