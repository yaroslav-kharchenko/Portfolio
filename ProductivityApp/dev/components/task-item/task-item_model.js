import pubsub from '../../js/pubsub';

/**
 * TaskItem component model
 * Consist of methods for TaskCollection data
 * @class TaskItemModel
 */
export default class Model {

  constructor(data){
    this.data = data;
  }

  /**
   * Returns task data
   * @method
   * @returns {object} - task data
   * @memberof TaskItemModel
   */
  getData(){
    return this.data;
  }

  /**
   * Updates task item
   * @method
   * @memberof TaskItemModel
   * @param {object} data - task data
   */
  update(data){
    for(let key in this.data){
      this.data[key] !== data[key] ? this.data[key] = data[key] : null
    }
    pubsub.publish('task/' + data.id + '/updated', this.data);
  }

}