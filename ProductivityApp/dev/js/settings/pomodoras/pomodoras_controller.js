import pubsub from '../../pubsub';
//Main Page Template
import View from './pomodoras_view';
import { data } from './pomodoras_data';

/**
 * Pomodoras tab controller
 * Collects components and trigger events
 * @class PomodorasController
 * @extends Controller
 */
export default class Controller {

  constructor(){
    this.view = new View;
    this.data = data;
    this.handlers;
  }

  /**
   * Get pomodoras graph options from page
   * @method
   * @memberof PomodorasController
   * @returns {Object[]} - object which consist of pomodoras graph parameters
   * @returns {string} object[].wtValue - work time duration.
   * @returns {string} object[].sbValue - short break duration.
   * @returns {string} object[].wiValue - work iteration duration.
   * @returns {string} object[].lbValue - long break duration.
   */
  getOptions(){
    const workTimeInput = document.getElementsByClassName('work-time__value')[0];
    const shortBreakInput = document.getElementsByClassName('short-break__value')[0];
    const workIterationInput = document.getElementsByClassName('work-iteration__value')[0];
    const longBreakInput = document.getElementsByClassName('long-break__value')[0];

    return {
      wtValue: workTimeInput.value,
      sbValue: shortBreakInput.value,
      wiValue: workIterationInput.value,
      lbValue: longBreakInput.value
    }
  }

  back(){

  }

  /**
   * Publish event that means that user click Save button.
   * @method
   * @memberof PomodorasController
   */
  save(){
    pubsub.publish("click/savePomodoras", this.getOptions());
  }

  /**
   * Set handlers for user interactions with page
   * bind them on window
   * @method
   * @memberof PomodorasController
   */
  setListeners(){

    let handlers = (e) => {
      if(e.target.classList.contains('save-button--pomodoras')){
        e.preventDefault();
        this.save();
        location.hash += '#tasklist';
      }
    };

    this.handlers = handlers;
    window.addEventListener('click', handlers);

  }

  /**
   * Destroy all event handlers on the page
   * @method
   * @memberof PomodorasController
   */
  destroy(){
    window.removeEventListener('click',this.handlers);
  }

  /**
   * Initialize page
   * @method
   * @memberof SettingsController
   * @param {object} options - object with page options
   */
  init(e, options){
    if (options){
      this.view.render(this.data, options);
      this.setListeners();
    } else {
      this.view.render(this.data);
      this.setListeners();
    }
  }

}