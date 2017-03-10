import pubsub from '../pubsub';
import View from './reports_view';
//Reports

import Reports from '../../components/highcharts/charts_script';

/**
 * Reports page controller
 * Collects components and trigger events
 * @class ReportsController
 * @extends Controller
 */
export default class Controller {

  constructor(){
    this.view = new View;
    this.init();
  }

  /**
   * Set class on active tab
   * @method
   * @memberof ReportsController
   */
  tabActivation(tab){
    $($(tab).siblings()).removeClass('tabs__link--active');
    $(tab).addClass('tabs__link--active');
  }

  /**
   * Set handlers for user interactions with page
   * bind them on window
   * @method
   * @memberof ReportsController
   */
  setListeners() {

    $('.filters__top .tabs__link').click((e) => {
      e.preventDefault();
      if ((e.target.textContent) == 'Day') {
        this.tabActivation(e.target);
        Reports.dayChart();
      } else if (e.target.textContent == 'Week') {
        this.tabActivation(e.target);
        Reports.weekChart();
      } else if (e.target.textContent == 'Month'){
        this.tabActivation(e.target);
        Reports.monthChart();
      }
    });

  }

  /**
   * Initialize page
   * @method
   * @memberof ReportsController
   */
  init(){
    this.view.render();
    Reports.dayChart();
    this.setListeners();
  }

}