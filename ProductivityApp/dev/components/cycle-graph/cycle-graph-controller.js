/**
 * CycleGraph component controller
 * Consist of methods for cycle graph interactions
 * @class CycleGraphController
 * @param {object} View - cycle graph view
 * @param {object} options - object with all controls elements
 * @param {string} options[].workTimeInput - work time input element.
 * @param {string} options[].shortBreakInput - short break input element.
 * @param {string} options[].workIterationInput - work iteration input element.
 * @param {string} options[].longBreakInput - long break input element.
 * @param {string} options[].controls - controls container.
 */
export default class Controller {

  constructor(View,options){
    this.workTimeInput = document.getElementsByClassName(options.workTimeInput)[0];
    this.shortBreakInput = document.getElementsByClassName(options.shortBreakInput)[0];
    this.workIterationInput = document.getElementsByClassName(options.workIterationInput)[0];
    this.longBreakInput = document.getElementsByClassName(options.longBreakInput)[0];
    this.controlsContainer = document.getElementsByClassName(options.controls)[0];
    this.view = new View(this.getOptions());
  }

  /**
   * Increase input's value
   * @method
   * @memberof CycleGraphController
   * @param {HTMLElement} input - input element
   */
  inputValueIncrease(input){
    var currentValue = parseInt(input.value);
    if (input == this.workTimeInput){
      if (currentValue >= 40){ return } //Max value
      input.value = currentValue + 5 + ' min';
    }
    if (input == this.longBreakInput){
      if (currentValue >= 60){ return } //Max value
      input.value = currentValue + 5  + ' min';
    }
    if (input == this.shortBreakInput){
      if (currentValue >= 15){ return } //Max value
      input.value = currentValue + 1 + ' min';
    }
    if (input == this.workIterationInput){
      if (currentValue >= 5){ return } //Max value
      input.value = currentValue + 1;
    }
  }

  /**
   * Decrease input's value
   * @method
   * @memberof CycleGraphController
   * @param {HTMLElement} input - input element
   */
  inputValueDecrease(input){
    var currentValue = parseInt(input.value);
    if (input == this.workTimeInput){
      if (currentValue <= 15){ return } //Min value
      input.value = currentValue - 5  + ' min';
    }
    if (input == this.longBreakInput){
      if (currentValue <= 30){ return } //Min value
      input.value = currentValue - 5  + ' min';
    }
    if (input == this.shortBreakInput){
      if (currentValue <= 1){ return } //Min value
      input.value = currentValue - 1 + ' min';
    }
    if (input == this.workIterationInput){
      if (currentValue <= 1){ return } //Min value
      input.value = currentValue - 1;
    }
  }

  /**
   * Handler for controls click which decrease/increase input value
   * @method
   * @memberof CycleGraphController
   */
  changeInputValue(e){
    e.preventDefault();
    var target = e.target;
    var parent = target.parentNode;
    var input = parent.getElementsByClassName('timer-value')[0];
    if (target.nodeName == 'BUTTON'){
      if (target.classList.contains('value-increase')){
        this.inputValueIncrease(input);
      }
      if (target.classList.contains('value-decrease')){
        this.inputValueDecrease(input);
      }
    }
    this.view.render(this.getOptions());
  }

  /**
   * Get options of graph
   * @method
   * @memberof CycleGraphController
   * @returns {Object[]} - object which consist of pomodoras graph parameters
   * @returns {string} object[].wtValue - work time duration.
   * @returns {string} object[].sbValue - short break duration.
   * @returns {string} object[].wiValue - work iteration duration.
   * @returns {string} object[].lbValue - long break duration.
   */
  getOptions(){
    return {
      wtValue: this.workTimeInput.value,
      sbValue: this.shortBreakInput.value,
      wiValue: this.workIterationInput.value,
      lbValue: this.longBreakInput.value
    }
  }

  /**
   * Initialize component
   * @method
   * @memberof CycleGraphController
   */
  init(){
    this.controlsContainer.addEventListener('click', this.changeInputValue.bind(this));
    this.view.render(this.getOptions());
  }

}