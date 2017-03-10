import Controller from '../task-item/task-item_controller';
import pubsub from '../../js/pubsub';
// import Template from './task-collection_tmpl';
let template = require("./task-collection_tmpl.handlebars");
let globalListTemplate = require("./global-list_tmpl.handlebars");
let categoryTemplate = require("./category_tmpl.handlebars");

let taskController = Controller;

/**
 * TaskCollection component view
 * Consist of methods for TaskCollection rendering
 * @class TaskCollectionView
 */
export default class View {

  constructor(){
    this.taskItem = taskController;
    this.template = template;
    this.globalListTemplate = globalListTemplate;
    this.categoryTemplate = categoryTemplate;
    this.container = null;
    this.globalContainer = null;
    this.dailyContainer = null;
    this.tasksIdArray = [];

    this.subscribe = [
      pubsub.subscribe('task/removed', (e, data) => {
        this.checkAndRemove(data);
      }),
      pubsub.subscribe('filter/changed', (e, data) => {
        this.filterTasks(data.status, data.category);
      }),
      pubsub.subscribe("removeTasks/active", () => {
        this.toggleRemoveMode('active');
      }),
      pubsub.subscribe("modal/removeButton:clicked", () => {
        pubsub.publish('removeTasks/apply', this.getCurrentTasksToRemove());
      }),
      pubsub.subscribe("modal/cancelButton:clicked", () => {
        this.toggleRemoveMode('cancel');
      }),
      pubsub.subscribe("page/leave", function () {
        this.subscribe.forEach(function (subscribe) {
          pubsub.unsubscribe(subscribe);
        });
      }.bind(this))
    ]
  }

  addTask(data, parent){
    let newTask = new this.taskItem(data, parent);
    pubsub.publish('collection/add', newTask);
  }

  /**
   * Render new category
   * @param {boolean} isFirst - is this category first in global list
   * @param {boolean} isUsed - is this category already rendered
   * @param {string} category - category name
   * @memberof TaskCollectionView
   */
  addCategory(isFirst, isUsed, category){
    if (isFirst){
      this.container.innerHTML += this.globalListTemplate();
      $('.global-list').accordion();
      this.globalContainer = this.container.getElementsByClassName('global-list__list')[0];
    }
    if (!isUsed){
      document.getElementsByClassName('global-list__list')[0].innerHTML += this.categoryTemplate({category:category});
    }
  }

  /**
   * Check is category empty and remove this if it's true
   * @param {string} category - category name
   * @memberof TaskCollectionView
   */
  checkAndRemove(category){
    let categoryList = $('.global-list .category--' + category)[0];
    $(categoryList).children('.task-list').children().length == 0 ? categoryList.remove() : null;
  }

  correctCategories(elemList){
    for(let i = 0; i < elemList.length; i++){
      if($(elemList[i]).parent().children(':visible').length === 0){
        $(elemList[i]).parents('.global-list__item').hide();
      } else {
        $(elemList[i]).parents('.global-list__item').show();
      }
    }
  }

  filterTasks(status, category){

    let mode;
    let filter;
    let tasksToShow;
    let tasksToHide;

    $('.global-list__item').show();

    if (category){
      mode = '.global-list__item ';
      filter = category;
      tasksToHide = $(mode + '*[data-filter-role="item"]');
    } else {
      mode = '';
      filter = $('.priority-tabs .tabs__link--active').data('filter-category');
      if (status === 'todo'){
        tasksToHide = $('.task-groups__item:not(.daily-list) ' + mode + '*[data-filter-role="item"]');
      } else {
        tasksToHide = $(mode + '*[data-filter-role="item"]');
      }
    }

    if(status == 'todo'){
      tasksToShow = $(mode + '*[data-filter-value=' + filter + ']:not(.task--done)');
    } else {
      tasksToShow = $(mode + '*[data-filter-value=' + filter + '].task--done');
    }
    if (filter === 'all' && status == 'todo'){
      tasksToHide = $(mode + '*[data-filter-role="item"]:not(.task--done)');
      tasksToShow = $(mode + '*[data-filter-role="item"].task--done');
      tasksToShow.hide();
      tasksToHide.show();
      this.correctCategories(tasksToShow);
      return;
    } else if(filter === 'all' && status == 'done'){
      tasksToHide = $(mode + '*[data-filter-role="item"].task--done');
      $(mode + '*[data-filter-role="item"]:not(.task--done)').hide();
      tasksToHide.show();
      this.correctCategories($(mode + '*[data-filter-role="item"]:not(.task--done)'));
      return;
    }

    tasksToHide.hide();
    tasksToShow.show();

    this.correctCategories(tasksToHide);

  }

  toDaily(data){
    let config = data;
    config.daily = true;
    config.deadline = new Date().toString().slice(0, 15);
    let task = $('*[data-id=' + config.id + ']');
    let taskCategoryElem = task.parents('.global-list__item');
    task.remove();
    new this.taskItem(config, $('.daily-list .task-list')[0]);
    if(task.parent('.task-list').find('.task').length === 0){
      taskCategoryElem.remove();
    }
    pubsub.publish("task/update", config);
  }

  selectAllToRemoveToggle(target, action){
    let $target = $(target);

    if(action === 'select'){
      if ($target.parents('.daily-list').length){
        $('.daily-list .task:visible .trash').addClass('in-recycle');
      } else if($target.parents('.global-list').length){
        $('.global-list .task:visible .trash').addClass('in-recycle');
      }
    } else if(action === 'deselect') {
      if ($target.parents('.daily-list').length) {
        $('.daily-list .task:visible .trash').removeClass('in-recycle');
      } else if ($target.parents('.global-list').length) {
        $('.global-list .task:visible .trash').removeClass('in-recycle');
      }
    }

    pubsub.publish("removeCounter/set", this.getCurrentRemoveCount());

  }

  getCurrentRemoveCount(){
    return $('.in-recycle').length;
  }

  getCurrentTasksToRemove(){
    let tasks = $('.in-recycle').parent('.task');
    for(let i = 0; i < tasks.length; i++){
      this.tasksIdArray.push(tasks[i].dataset.id);
    }
    return this.tasksIdArray;
  }

  selectTaskToRemoveToggle(target, action) {
    let $target = $(target);
    if (action === 'select') {
      $target.parent().addClass('in-recycle');
    } else if (action === 'deselect') {
      $target.parent().removeClass('in-recycle');
    }

    pubsub.publish("removeCounter/set", this.getCurrentRemoveCount());
  }

  toggleRemoveMode(mode){
    if(mode === 'active'){
      $('.task-groups-list').addClass('remove--active');
    }
    if(mode === 'cancel'){
      $('.task-groups-list').removeClass('remove--active');
      $('.in-recycle').removeClass('in-recycle');
      this.tasksIdArray = [];
    }
  }

  /**
   * Render collection template into parent selector;
   * @method
   * @memberof TaskCollectionView
   * @param {HTMLElement} parent - selector where content might be inserted
   */
  render(parent){
    let parentElem = parent || document.querySelector('main');
    parentElem.innerHTML += this.template();
    this.container = document.getElementsByClassName('global-list')[0];
    $('.has-tooltip').tooltip();
    setTimeout(()=>{this.filterTasks('todo', 'all');}, 0);
  }

}