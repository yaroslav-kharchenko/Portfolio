import pubsub from '../pubsub';
import View from './timer_view';
// import { data , config } from './timer_data';
import DataService from '../services/data_service';

/**
 * Timer page controller
 * Collects components and trigger events
 * @class TimerController
 * @extends Controller
 */
export default class Controller {

  constructor(id){
    this.view = new View;
    this.data = {};
    this.config;
    this.taskId = id;
    this.dataService = new DataService();

    this.subscribe = [
      pubsub.subscribe("getData/cycle", (e, data) => {
        this.data.cycle = data;
        pubsub.publish("timer/dataGetted");
      }),
      pubsub.subscribe("getData/task", (e, data) => {
        pubsub.publish("timer/dataGetted");
        this.data.task = data[this.taskId];
      }),
      pubsub.subscribe("timer/dataGetted", () => {
        if (this.data.cycle && this.data.task) {
          this.init();
        }
      }),
      pubsub.subscribe("page/leave", function () {
        this.subscribe.forEach(function (subscribe) {
          pubsub.unsubscribe(subscribe);
        });
        this.view.destroy();
      }.bind(this))
    ];

    this.dataService.getData('tasks',"getData/task");
    this.dataService.getData('cycleData',"getData/cycle");
  }

  /**
   * Initialize page
   * @method
   * @memberof TimerController
   */
  init(){
    this.view.render(this.data.task, this.data.cycle);
  }

}