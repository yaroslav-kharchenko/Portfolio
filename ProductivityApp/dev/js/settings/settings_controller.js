import pubsub from '../pubsub';
import DataService from '../services/data_service';
//Main Page Template
import View from './settings_view';

import PomodorasController from './pomodoras/pomodoras_controller';
import CategoriesController from './categories/categories_controller';

/**
 * Settings page controller
 * Collects components and trigger events
 * @class SettingsController
 * @extends Controller
 */
export default class Controller {

  constructor(){
    this.view = new View;
    this.dataService = new DataService;
    this.pomodoras = new PomodorasController();
    this.categories = new CategoriesController();

    this.init();

    //Забираем данные из Файербейса/Инициализация блоков
    this.subscribe = [
      pubsub.subscribe("getData/pomodoras", this.pomodoras.init.bind(this.pomodoras)),
      pubsub.subscribe("getData/categories", this.categories.init.bind(this.categories)),
      pubsub.subscribe("page/leave", function () {
        this.subscribe.forEach(function (subscribe) {
          pubsub.unsubscribe(subscribe);
        });
        this.pomodoras.destroy();
        this.categories.destroy();
      }.bind(this))
    ];

    this.dataService.getData('cycleData',"getData/pomodoras");
    this.dataService.getData('categoriesData',"getData/categories");

  }

  /**
   * Initialize page
   * @method
   * @memberof SettingsController
   */
  init(){
    this.view.render();
  }

}