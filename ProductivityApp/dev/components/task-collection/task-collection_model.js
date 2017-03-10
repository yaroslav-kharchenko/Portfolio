import pubsub from '../../js/pubsub';

/**
 * TaskCollection component model
 * Consist of methods for TaskCollection data
 * @class TaskCollectionModel
 */
export default class Model {

  constructor(){
    this.collection = [];
    this.categories = [];
    this.subscribe = [
        pubsub.subscribe('collection/add', (e, data) => {
          this.addToCollection(data);
        })
    ];
  }

  /**
   * Add new task instance to collection
   * @method
   * @param {object} instance - task instance
   * @memberof TaskCollectionModel
   */
  addToCollection(instance){
    this.collection.push(instance);
  }

  /**
   * Returns collection data
   * @method
   * @returns {object} - collection data
   * @memberof TaskCollectionModel
   */
  getCollectionData(){
    return this.collection.map( (task) => {
      return task.model.getData();
    });
  }

  /**
   * Returns task data
   * @method
   * @param {string} id - task id
   * @returns {object} - task data
   * @memberof TaskCollectionModel
   */
  getTaskData(id){
    return this.getCollectionData().filter((task) => {
      return task.id === id;
    })[0];
  }

  /**
   * Updates task collection
   * @method
   * @memberof TaskCollectionModel
   * @param {object} data - task collection data
   */
  update(data){
    this.collection.forEach((task) => {
      task.model.data.id == data.id ? task.model.update(data) : null;
    });
  }

  /**
   * Remove task from collection
   * @method
   * @memberof TaskCollectionModel
   * @param {string} id - task id
   */
  removeTask(id){
    for (let i = 0; i < this.collection.length; i++){
      if (this.collection[i].model.data.id == id){
        this.collection[i].destroy();
        pubsub.publish('task/removed', this.collection[i].model.data.category);
        this.collection.splice(i, 1);
        break;
      }
    }
  }

}