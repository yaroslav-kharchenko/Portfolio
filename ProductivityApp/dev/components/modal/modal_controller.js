import View from './modal_view';
import DataService from '../../js/services/data_service';
import pubsub from '../../js/pubsub';

let Config = [
  {
    "id": 1,
    "value": "JS"
  },
  {
    "id": 2,
    "value": "CSS"
  },
  {
    "id": 3,
    "value": "HTML"
  },
  {
    "id": 4,
    "value": "SQL"
  },
  {
    "id": 5,
    "value": "Photoshop"
  }
];

/**
 * Modal component controller
 * Consist of methods for header interactions
 * @class ModalController
 * @param {config} options - object with modal config
 */
export default class Controller {

  constructor(config){
    this.view = new View;
    this.config = config;
    this.dataService = new DataService;
    this.body = document.querySelector('body');
    this.handlers;
    this.taskId = null;
    this.modal;
  }

  /**
   * Close modal window
   * @method
   * @memberof ModalController
   */
  close(){
    this.modal.removeEventListener('click',this.handlers);
    $('body').dialog('destroy');
    this.taskId = null;
  }


  /**
   * Returns task config from modal
   * @method
   * @memberof ModalController
   * @returns {object[]} - task config
   * @returns {string} object[].id - task id
   * @returns {string} object[].title - task title
   * @returns {number} object[].category - task category id
   * @returns {string} object[].deadline - task deadline
   * @returns {number} object[].estimation - task estimation
   * @returns {string} object[].priority - task priority
   * @returns {boolean} object[].daily - is task daily
   * @returns {boolean} object[].done - is task done
   */
  getConfig(){
    let title = $('#task-title')[0].value;
    let desc = $('#task-description')[0].value;
    let deadline = $('#task-deadline')[0].value;
    let category = $('.category-input:radio:checked')[0].id.match(/[0-9]$/g)[0];
    let estimation = $('.estimation-input:radio:checked')[0].id.match(/[0-9]$/g)[0];
    let priority = $('.priority-input:radio:checked')[0].id.match(/--.*/g)[0].slice(2);
    return {
      id: this.taskId || firebase.database().ref().child('tasks').push().key,
      title: title,
      desc: desc,
      category: category,
      deadline: deadline,
      estimation: estimation,
      priority: priority,
      daily: false,
      done: false
    }
  }

  /**
   * Set handlers for user interactions with component
   * bind them on window
   * @method
   * @memberof ModalController
   */
  setListeners(){
    $(this.modal).submit(function() {
      return false;
    });

    let handlers = (e) => {
      if(e.target.classList.contains('link-cancel-edit')){
        this.close();
      }
      if(e.target.classList.contains('cancel-button')){
        this.close();
        pubsub.publish("modal/cancelButton:clicked");
      }
      if(e.target.classList.contains('remove-button')){
        this.close();
        pubsub.publish("modal/removeButton:clicked");
      }
    };

    this.handlers = handlers;

    this.modal.addEventListener('click', this.handlers);
  }

  /**
   * Initialize component
   * @method
   * @memberof ModalController
   */
  init(type, options){
    options ? this.taskId = options.id : null;
    this.view.render(type, options, this.config);
    this.modal = document.getElementsByClassName('modal-window')[0];
    this.setListeners();
  }

}