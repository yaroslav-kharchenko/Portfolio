import View from './task-item_view';
import Model from './task-item_model';
import pubsub from '../../js/pubsub';

/**
 * TaskItem component controller
 * Consist of methods for header interactions
 * @class TaskItemController
 * @param {object} data - object with header data
 * @param {HTMLElement} parent - parent element
 */
export default class Controller {

  constructor(data, parent){
    this.view = new View;
    this.model = new Model(data);
    this.view.render(this.model.getData(), parent);
    this.subscribe = [
      pubsub.subscribe( "task/" + this.model.data.id + "/updated", (e, data) => {
        this.view.update(data);
      }),
      pubsub.subscribe("page/leave", function () {
        this.subscribe.forEach(function (subscribe) {
          pubsub.unsubscribe(subscribe);
        });
      }.bind(this))
    ]
  }

  /**
   * Destroy task item
   * @method
   * @memberof TaskItemController
   */
  destroy(){
    $('[data-id=' + this.model.data.id + ']')[0].remove();
    // pubsub.publish('')
  }

}