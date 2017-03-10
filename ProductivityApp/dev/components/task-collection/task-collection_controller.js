import View from './task-collection_view';
import Model from './task-collection_model';
import pubsub from '../../js/pubsub';

/**
 * TaskCollection component controller
 * Consist of methods for header interactions
 * @class TaskCollectionController
 */
export default class Collection {

  constructor(){
    this.view = new View;
    this.model = new Model;
    this.handlers;

    this.subscribe = [
      pubsub.subscribe( "task/getData", (e, data) => {
        pubsub.publish("task/edit", this.model.getTaskData(data));
      }),
      pubsub.subscribe("task/update", (e, data) => {
        this.model.update(data);
      }),
      pubsub.subscribe("task/toDaily", (e, data) => {
        this.view.toDaily(this.model.getTaskData(data));
      }),
      pubsub.subscribe("removeTasks/apply", (e, data) => {
        data.forEach((id)=>{
          this.removeTask(id);
        });
      }),
      pubsub.subscribe("page/leave", function () {
        this.subscribe.forEach(function (subscribe) {
          pubsub.unsubscribe(subscribe);
        });
        window.removeEventListener('click', this.handlers);
      }.bind(this))
    ]

  }

  /**
   * Add new task into collection
   * @method
   * @memberof TaskCollectionController
   * @param {object[]} data - task data
   * @param {string} data[].id - task id
   * @param {string} data[].title - task title
   * @param {number} data[].category - task category id
   * @param {string} data[].deadline - task deadline
   * @param {number} data[].estimation - task estimation
   * @param {string} data[].priority - task priority
   * @param {boolean} data[].daily - is task daily
   * @param {boolean} data[].done - is task done
   */
  addTask(data){

    let collectionData = this.model.getCollectionData();

    let dailyList = $('.daily-list .task-list')[0];

    if(data.daily){
      this.view.addTask(data, dailyList);
    } else {

      let isGlobalNotEmpty;

      isGlobalNotEmpty = collectionData.some((task)=>{
        return task.daily !== false;
      });

      if (!isGlobalNotEmpty){
        this.view.addCategory(true, false, this.getCategory(data.category));
      } else {
        this.view.addCategory(false, this.isCategoryUsed(data.category),this.getCategory(data.category));
      }

      let categoryContainer = $('.category--' + data.category + ' .task-list')[0];
      this.view.addTask(data, categoryContainer);
    }

  }

  /**
   * Remove task from collection
   * @method
   * @memberof TaskCollectionController
   * @param {string} taskId - task id
   */
  removeTask(taskId){
    this.model.removeTask(taskId);
  }

  /**
   * Set's categories configuration into collection
   * @param {object[]} categories - array of categories configs
   * @memberof TaskCollectionController
   */
  setCategories(categories){
    this.model.categories = categories;
  }

  /**
   * Get category by id
   * @param {number} id - category id
   * @memberof TaskCollectionController
   */
  getCategory(id){
    return this.model.categories.filter((category) => {
      return category.id === +id;
    })[0];
  }

  /**
   * Returns true if category already used / false if not
   * @param id
   * @returns {boolean}
   * @memberof TaskCollectionController
   */
  isCategoryUsed(id){
    return this.model.getCollectionData().some(task => task.category == id && !task.daily)
  }

  setListeners(){
    let handlers = (e) => {
      if ($(e.target).data('filter-role') === 'filter') {
        e.stopPropagation();
        let category = $(e.target).data('filter-category');
        $(e.target).siblings().removeClass('tabs__link--active');
        $(e.target).addClass('tabs__link--active');
        let status = $('.status-tabs .tabs__link--active').data('filter-status');
        pubsub.publish('filter/changed', {category: category, status: status})
      }
    };

    this.handlers = handlers;
    window.addEventListener('click', this.handlers);
  }

  /**
   * Initialize component
   * @method
   * @memberof TaskCollectionController
   */
  init(parent){
    this.view.render(parent);
    this.setListeners();
  }

}