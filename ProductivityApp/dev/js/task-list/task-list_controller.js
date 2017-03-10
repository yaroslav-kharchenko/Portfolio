import pubsub from '../pubsub';
import DataService from '../services/data_service';
//Modal
import modalControler from '../../components/modal/modal_controller';
//Main Page Template
import View from './task-list_view';
//Task Collection
import Collection from '../../components/task-collection/task-collection_controller';

/**
 * TaskList page controller
 * Collects components and trigger events
 * @class TaskListController
 * @extends Controller
 */
export default class Controller {

  constructor(){
    this.view = new View;
    this.dataService = new DataService;
    this.handlers;
    this.init();
    this.body = document.querySelector('body');
    this.collection = new Collection;

    this.subscribe = [
        //Рендеринг страницы при первом попадании на неё
      pubsub.subscribe("getData/tasks", (e, data) => {
        if (data === null) {
          this.view.showGuide('add');
        } else {
          let main = document.querySelector('main');
          this.collection.init(main);
        }
        for (let key in data) {
          this.collection.addTask(data[key])
        }
      }),
      pubsub.subscribe("getData/categories", (e, data) => {
        this.modal = new modalControler(data);
        this.collection.setCategories(data);
      }),
      pubsub.subscribe("task/edit", (e, data) => {
        this.modal.init('edit', data);
      }),
      pubsub.subscribe("removeTasks/confirm", () => {
        this.modal.init('remove');
      }),
      pubsub.subscribe("page/leave", function () {
        this.subscribe.forEach(function (subscribe) {
          pubsub.unsubscribe(subscribe);
        });
        window.removeEventListener('click', this.handlers);
        document.querySelector('body').classList.remove('active-page');
      }.bind(this))
    ];

    this.dataService.getData('categoriesData',"getData/categories");
    this.dataService.getData('tasks',"getData/tasks");

  }

  /**
   * Set handlers for user interactions with page
   * bind them on window
   * @method
   * @memberof TaskListController
   */
  setListeners(){

    let handlers = (e) => {
      //Открытие модального окна
      if (e.target.classList.contains('link-add-task')) {
        this.modal.init('add', {});
      }
      //Подтверждение добавления
      if (e.target.classList.contains('link-apply-add')) {
        if (this.collection.model.getCollectionData().length == 0) {
          let main = document.querySelector('main');
          // document.getElementsByClassName('first_task')[0].remove();
          this.collection.init(main);
        }
        let config = this.modal.getConfig();
        pubsub.publish("task/add", config);
        this.collection.addTask(config);
        this.modal.close();
      }
      //Редактирование таска
      if (e.target.classList.contains('link-edit-task')) {
        e.preventDefault();
        let taskId = $($(e.target)[0]).parent().parent()[0].dataset.id;
        pubsub.publish("task/getData", taskId);
      }
      //Подтверждение редактирования
      if (e.target.classList.contains('link-apply-edit')) {
        e.preventDefault();
        let config = this.modal.getConfig();
        pubsub.publish("task/update", config);
        this.modal.close();
      }
      //Удаление таска
      if (e.target.classList.contains('link-remove-task')) {
        e.preventDefault();
        this.collection.removeTask(this.modal.taskId);
        pubsub.publish("task/delete", this.modal.taskId);
        this.modal.close();
      }
      //Удаление тасков
      if (e.target.classList.contains('link-remove-tasks')) {
        e.preventDefault();
        pubsub.publish("removeTasks/clicked");
      }
      if (e.target.classList.contains('recycle')) {
        e.preventDefault();
        this.collection.view.selectTaskToRemoveToggle(e.target, 'select');
      }
      if (e.target.classList.contains('cancel-remove')) {
        e.preventDefault();
        this.collection.view.selectTaskToRemoveToggle(e.target, 'deselect');
      }
      if (e.target.classList.contains('select-all__tab')) {
        e.preventDefault();
        this.collection.view.selectAllToRemoveToggle(e.target, 'select');
      }
      if (e.target.classList.contains('deselect-all__tab')) {
        e.preventDefault();
        this.collection.view.selectAllToRemoveToggle(e.target, 'deselect');
      }
      //to Daily
      if (e.target.classList.contains('link-pick-up-task')) {
        e.preventDefault();
        let taskId = $($(e.target)[0]).parent().parent()[0].dataset.id;
        pubsub.publish("task/toDaily", taskId);
      }
      //go to timer
      if (e.target.classList.contains('task-priority__icon-timer')) {
        e.preventDefault();
        e.stopPropagation();
        let taskId = $($(e.target)[0]).parents('.task').data('id');
        pubsub.publish("route/timer", taskId);
      }
    };

    this.handlers = handlers;

    window.addEventListener('click', this.handlers);

  }

  /**
   * Initialize page
   * @method
   * @memberof TaskListController
   */
  init(){
    this.view.render(this.data);
    this.setListeners();
  }

}