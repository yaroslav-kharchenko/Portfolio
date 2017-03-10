/**
 * CycleGraph component view
 * Consist of methods for cycle graph render
 * @class CycleGraphView
 */
export default class View {

  constructor(options){
    this.valueWT = parseInt(options.wtValue);
    this.valueSB = parseInt(options.sbValue);
    this.valueWI = parseInt(options.wiValue);
    this.valueLB = parseInt(options.lbValue);
    this.docFragment = document.createDocumentFragment();
  }

  /**
   * Set options for graph
   * @method
   * @memberof CycleGraphView
   * @param {object[]} options - object which consist of pomodoras graph parameters
   * @param {string} options[].wtValue - work time duration.
   * @param {string} options[].sbValue - short break duration.
   * @param {string} options[].wiValue - work iteration duration.
   * @param {string} options[].lbValue - long break duration.
   */
  setOptions(options) {
    this.valueWT = parseInt(options.wtValue);
    this.valueSB = parseInt(options.sbValue);
    this.valueWI = parseInt(options.wiValue);
    this.valueLB = parseInt(options.lbValue);
  }

  /**
   * Get amount of time
   * @method
   * @memberof CycleGraphView
   * @param {number} WT - work time duration.
   * @param {number} SB - short break duration.
   * @param {number} WI - work iteration duration.
   * @param {number} LB - long break duration.
   * @returns {number} - (workTime + shortBreak) * (workIteration * 2) - (shortBreak * 2) + longBreak
   */
  getAmountTime(WT,SB,WI,LB) {
    return (WT + SB) * (WI * 2) - (SB * 2) + LB;
  }

  /**
   * Get full cycle period
   * @method
   * @memberof CycleGraphView
   * @param {number} WT - work time duration.
   * @param {number} SB - short break duration.
   * @param {number} WI - work iteration duration.
   * @param {number} LB - long break duration.
   * @returns {number} - (workTime + shortBreak) - shortBreak + longBreak
   */
  getFullCycle(WT,SB,WI,LB) {
    return (WT + SB) * WI - SB + LB;
  }

  /**
   * Returns time value in right format
   * @param {number} num - current period value on time scale
   * @method
   * @memberof CycleGraphView
   * @return {string} - period value on time scale in right format
   */
  getTimeFormat(num) {
    let timeValue;
    let hours = ~~(num / 60);
    let minutes = (num % 60);
    if (hours && minutes > 0){
      timeValue = hours + 'h ' + minutes + 'm';
    } else if (hours && minutes === 0){
      timeValue = hours + 'h';
    } else {
      timeValue = minutes + 'm';
    }
    return timeValue;
  }

  /**
   * Generates timelines scale
   * @method
   * @memberof CycleGraphView
   */
  timelineGenerate(){
    let fullCycleTime = this.getAmountTime(this.valueWT, this.valueSB, this.valueWI, this.valueLB);

    let timelineUL = document.createElement('ul');
    timelineUL.classList.add('time-line');

    let timePointsCount = parseInt(fullCycleTime/30);

    for (let i = 1; i <= timePointsCount; i++){
      let li = document.createElement('li');
      li.classList.add('time-period');
      li.style.width = (30/fullCycleTime) * 100 + '%';
      let span = document.createElement('span');
      span.classList.add('time-period__value');
      span.innerHTML = this.getTimeFormat(30*i);
      li.appendChild(span);
      timelineUL.appendChild(li);
    }
    this.docFragment.appendChild(timelineUL);
  }

  /**
   * Generates graph
   * @method
   * @memberof CycleGraphView
   */
  graphGenerate(){
    let fullCycleTime = this.getAmountTime(this.valueWT, this.valueSB, this.valueWI, this.valueLB);

    let liCount = (this.valueWI * 4) - 2 + 1; //((Work Time + Short Break) * 2) * iterationsCount - 2*ShortBreak + 1*LongBreak
    let workTimeCycle = this.valueWI * 2 - 1;
    let graphUL = document.createElement('ul');
    graphUL.classList.add('cycle-graph');

    for(let i = 1; i <= liCount; i++){
      let li = document.createElement('li');
      if (i%2 != 0){
        li.classList.add('work-time-period');
        li.style.width = (this.valueWT/fullCycleTime) * 100 + '%';
      } else {
        if (i == workTimeCycle + 1){
          li.classList.add('long-break-period');
          let mark = document.createElement('span');
          mark.classList.add('full-cycle-label');
          mark.innerHTML = 'Full Cycle: ' + this.getTimeFormat(this.getFullCycle(this.valueWT, this.valueSB, this.valueWI, this.valueLB));
          li.appendChild(mark);
          li.style.width = (this.valueLB/fullCycleTime) * 100 + '%';
        } else {
          li.classList.add('short-break-period');
          li.style.width = (this.valueSB/fullCycleTime) * 100 + '%';
        }
      }
      graphUL.appendChild(li);
    }
    this.docFragment.appendChild(graphUL);
  }

  /**
   * Render graph into this container;
   * @method
   * @memberof CycleGraphView
   * @param {object} options - object with cycle graph options
   */
  render(options) {
    let graphContainer = document.getElementsByClassName('cycle-graph-container')[0];
    this.setOptions(options);
    graphContainer.innerHTML = '';
    this.graphGenerate();
    this.timelineGenerate();
    graphContainer.appendChild(this.docFragment);
  }

}