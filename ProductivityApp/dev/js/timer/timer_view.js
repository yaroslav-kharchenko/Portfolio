// import Template from './timer_tmpl';
let template = require("./timer_tmpl.handlebars");
import pubsub from '../pubsub';

//Header
import headerView from '../../components/header/header_view';
import headerController from '../../components/header/header_controller';
import { data as headerData } from '../../components/header/header_data';

/**
 * Timer page view
 * Collects components and displays page content
 * @class TimerView
 * @extends View
 */
export default class View {

  constructor(){
    this.template = template;
    this.handlers;
    this.data;
    this.config;
    //elems
    this.timerBlock;
    this.mask;
    this.spinner;
    this.filler;
    this.$timerGuide;
    this.$counter;
    this.pomodoras;

    this.startButtons;
    this.processButtons;
    this.breakButtons;

    this.userId = firebase.auth().currentUser.uid;
    this.interval;
    this.num = 0;

    this.breakHandler = this.breakFinishListener.bind(this);
    this.progressHandler = this.progressFinishListener.bind(this);
  }

  resetAnimation(){
    this.filler.style = '';
    this.spinner.style = '';
    this.mask.style = '';
  }

  setListeners(){
    let handlers = (e) => {
      if (e.target.classList.contains('start-pomodora-button')) {
        clearInterval(this.interval);
        this.$timerGuide.hide();
        this.$processBlock.show();
        this.start();
      }
      if (e.target.classList.contains('fail-pomodora-button')) {
        this.filler.removeEventListener("animationend", this.breakHandler);
        this.filler.removeEventListener("animationend", this.progressHandler);
        clearInterval(this.interval);
        this.resetAnimation();
        this.statusIconFail();
        this.checkStatus();
        if (this.checkStatus()) {
          this.initBrake();
        } else {
          return;
        }
      }
      if (e.target.classList.contains('finish-pomodora-button')) {
        this.filler.removeEventListener("animationend", this.breakHandler);
        this.filler.removeEventListener("animationend", this.progressHandler);
        clearInterval(this.interval);
        this.resetAnimation();
        this.statusIconFill();
        if (this.checkStatus()) {
          this.initBrake();
        } else {
          return;
        }
      }
    };

    this.handlers = handlers;

    this.timerBlock.on('click', this.handlers);
  }

  destroy(){
    this.timerBlock.off('click', this.handlers);
  }

  checkStatus() {
    let numIcons = this.pomodoras.length;

    if (numIcons === this.num) {
      clearInterval(this.interval);
      this.resetAnimation();
      this.$timerGuide.show();
      this.$processBlock.hide();
      this.$counter.html('');
      this.$timerGuide.html('You Completed Task');
      this.processButtons.hide();
      this.data.done = true;
      pubsub.publish('timer/task-finished', this.data);
      setTimeout(()=>{
        window.location.hash = '#tasklist';
      }, 3000);
      return false;
    } else {
      return true;
    }
  }

  breakFinishListener(){
    this.resetAnimation();
    clearInterval(this.interval);
    this.$timerGuide.html('Break is over');
    this.processButtons.hide();
    this.startButtons.show();
  }

  progressFinishListener(){
    this.resetAnimation();
    clearInterval(this.interval);
    this.$counter.html('');
    this.$timerGuide.show();
    this.$processBlock.hide();
    this.$timerGuide.html('Choose');
  }

  startCount(time) {
    let counter = time;
    this.filler.style.animation = 'opa' + ' ' + time + 's' + ' ' + 'steps(1, end) reverse';
    this.spinner.style.animation = 'rota' + ' ' + time + 's' + ' ' + 'linear';
    this.mask.style.animation = 'opa' + ' ' + time + 's' + ' ' + 'steps(1, end)';

    this.interval = setInterval(()=>{
      counter--;
      this.$counter.html(counter);
    }, 1000);
  }

  startTimer(time, mode){
    this.startCount(time);
    if (mode === 'progress') {
      // this.filler.removeEventListener("animationend", this.breakHandler);
      this.filler.addEventListener("animationend", this.progressHandler);
    } else if (mode === 'brake') {
      // this.filler.removeEventListener("animationend", this.progressHandler);
      this.filler.addEventListener("animationend", this.breakHandler);
    }
  }

  start() {
    this.startButtons.hide();
    this.processButtons.show();
    this.startTimer(parseInt(this.config[0].value), 'progress');
    this.$counter.html(parseInt(this.config[0].value));
  }

  initBrake() {
    this.startTimer(parseInt(this.config[2].value), 'brake');
    this.$counter.html(parseInt(this.config[2].value));
    this.$processBlock.show();
    this.processButtons.hide();
    this.startButtons.show();
  }

  statusIconFail() {
    this.num++;
    for (let i = 0; i < this.pomodoras.length; i++) {
      if (this.pomodoras[i].classList.length === 1) {
        this.pomodoras[i].classList.add('tomato-failed');
        break;
      }
    }
  }

  statusIconFill() {
    this.num++;
    for (let i = 0; i < this.pomodoras.length; i++) {
      if (this.pomodoras[i].classList.length === 1) {
        this.pomodoras[i].classList.add('tomato-fill');
        break;
      }
    }
  }

  /**
   * Render template content into parent selector;
   * @method
   * @memberof TimerView
   * @param {object} data - object with page data
   * @param {object} config - object with timer configuration
   */
  render(data, config){
    this.data = data;
    this.config = config;

    document.querySelector('body').innerHTML = '';

    let header = new headerController(headerView, headerData, {title: ' ', add: false, remove: false});
    header.init();

    let parentElem = document.querySelector('body');
    parentElem.innerHTML += this.template({obj: data, config: config});

    this.timerBlock = $('.timer-main');
    this.mask = this.timerBlock.find('.mask')[0];
    this.spinner = this.timerBlock.find('.spinner')[0];
    this.filler = this.timerBlock.find('.filler')[0];
    this.$timerGuide = $(this.timerBlock.find('.timer-guide'));
    this.$processBlock = $(this.timerBlock.find('.process-text'));
    this.$counter = $(this.timerBlock.find('.counter')[0]);
    this.pomodoras = this.timerBlock.find('.pomadoras-item');

    this.startButtons = $(this.timerBlock.find('.start-buttons-block'));
    this.processButtons = $(this.timerBlock.find('.process-buttons-block'));
    this.breakButtons = $(this.timerBlock.find('.break-buttons-block'));

    this.setListeners();
  }
}