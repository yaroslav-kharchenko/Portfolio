// import Template from './pomodoras_tmpl';
let template = require("./pomodoras_tmpl.handlebars");

//Cycle Graph
import graphView from '../../../components/cycle-graph/cycle-graph-view';
import graphController from '../../../components/cycle-graph/cycle-graph-controller';
import controlsView from './../../../components/cycle-controls/cycle-controls-view';
import controlsController from './../../../components/cycle-controls/cycle-controls-controller';
import { data as controlsData, options } from './../../../components/cycle-controls/cycle-controls-data';

/**
 * Pomodoras tab view
 * Collects components and displays page content
 * @class PomodorasView
 * @extends View
 */
export default class View {

  constructor(){
    this.template = template;
  }

  /**
   * Render template content into parent selector;
   * @method
   * @memberof PomodorasView
   * @param {object} data - object with page data
   * @param {object} controlsDB - object with graph controls data
   * @param {HTMLElement} parent - selector where content might be inserted
   */
  render(data, controlsDB, parent){

    // let parentElem = parent || document.querySelector('body');
    let parentElem = $('.pomodoras-block')[0];

    parentElem.innerHTML += this.template(data);

    let container = document.getElementsByClassName('options-section')[0];

    if (controlsDB){
      let cycleControls = new controlsController(controlsView, controlsData, container, controlsDB);
    } else {
      let cycleControls = new controlsController(controlsView, controlsData, container, options);
    }

    let graph = new graphController(graphView,{
      workTimeInput: 'work-time__value',
      shortBreakInput: 'short-break__value',
      workIterationInput: 'work-iteration__value',
      longBreakInput: 'long-break__value',
      controls: 'controls-container'
    });
    graph.init();
  }

}