import pubsub from '../../js/pubsub';
import PingService from './ping_service';

let singletone = null;

/**
 * DataService
 * Singletone class
 * It contains methods for store/get/set/update user data.
 * @class DataService
 */
export default class DataService {

  constructor(){

    if(!singletone){
      singletone = this;
      this.pingService = new PingService();
      this.webStorage = window.localStorage;
      this.mode = null;

      pubsub.subscribe( "auth/true", this.syncWithWebStorage.bind(this) );
      pubsub.subscribe( "click/savePomodoras", this.setPomodoras.bind(this) );
      pubsub.subscribe( "click/saveCategories", this.setCategories.bind(this) );
      pubsub.subscribe( "task/add", this.insertTask.bind(this) );
      pubsub.subscribe( "task/update", this.insertTask.bind(this) );
      pubsub.subscribe( "task/delete", this.deleteTask.bind(this) );
      pubsub.subscribe( "mode/Online", this.syncWithFirebase.bind(this));
      pubsub.subscribe( "timer/task-finished", this.insertTask.bind(this));

    }
    return singletone;

  }

  /**
   * Insert task into firebase/localStorage
   * @method
   * @memberof DataService
   * @param {object} taskConfig - object with task data
   */
  insertTask(e ,taskConfig) {
    let taskInfo = {};
    let userId = firebase.auth().currentUser.uid;
    taskInfo['users/' + userId + '/tasks/' + taskConfig.id] = taskConfig;
    firebase.database().ref().update(taskInfo);
    // this.syncWithWebStorage();
    this.toggleData('tasks/'+taskConfig.id, taskConfig);
  }

  /**
   * Delete task from firebase/localStorage
   * @method
   * @memberof DataService
   * @param {string} taskId - task id
   */
  deleteTask(e, taskId){
    this.toggleData('tasks/'+taskId);
  }

  /**
   * Set categories configuration into firebase/localStorage
   * @method
   * @memberof DataService
   * @param {object} options - object with categories configuration
   */
  setCategories(e, options){
    let userId = firebase.auth().currentUser.uid;
    let categories = [
      {
        id: 1,
        value: options.id1
      },
      {
        id: 2,
        value: options.id2
      },
      {
        id: 3,
        value: options.id3
      },
      {
        id: 4,
        value: options.id4
      },
      {
        id: 5,
        value: options.id5
      }
    ];
    firebase.database().ref('users/' + userId).update({
      categoriesData: categories
    });
    this.syncWithWebStorage();
    this.toggleData('categoriesData',categories);

  }

  /**
   * Set pomodoras graph configuration into firebase/localStorage
   * @method
   * @memberof DataService
   * @param {object} options - object with pomodoras graph configuration
   */
  setPomodoras(e, options){
    let userId = firebase.auth().currentUser.uid;
    let cycles = [
      {
        name: 'Work time',
        value: options.wtValue
      },
      {
        name: 'Work iteration',
        value: options.wiValue
      },
      {
        name: 'Short Break',
        value: options.sbValue
      },
      {
        name: 'Long Break',
        value: options.lbValue
      }
    ];
    firebase.database().ref('users/' + userId).update({
      cycleData: cycles
    });
    this.syncWithWebStorage();
    this.toggleData('cycleData', cycles);
  }

  /**
   * Get data from firebase/localStorage
   * and throw event with getted data
   * @method
   * @memberof DataService
   * @param {string} path - firebase/localStorage path to data
   * @param {string} event - event name
   */
  getData(path,event){
    let userId = firebase.auth().currentUser.uid;
    if (!this.webStorage.getItem(userId)){
      firebase.database().ref('users/' + userId + '/' + path).once('value').then(function(snapshot) {
        pubsub.publish(event, snapshot.val());
      });
    } else {
      let storage = JSON.parse(this.webStorage.getItem(userId));
      pubsub.publish(event, storage[path]);
    }
  }

  /**
   * Set data to localStorage
   * and synchronize it with firebase if it's possible
   * @method
   * @memberof DataService
   * @param {string} path - firebase/localStorage path to data
   * @param {object} data - data
   */
  toggleData(path, data){
    let userId = firebase.auth().currentUser.uid;
    let storage = JSON.parse(this.webStorage.getItem(userId));

    let pathArr = path.split('/');
    let counter = 0;

    function setRecursion(obj){
      if(counter != pathArr.length - 1){
        counter++;
        if (!obj[pathArr[counter - 1]]){
          obj[pathArr[counter - 1]] = {};
        }
        setRecursion(obj[pathArr[counter - 1]]);
      } else {
        if (!data){
          delete obj[pathArr[counter]];
        } else {
          return obj[pathArr[counter]] = data;
        }
      }
    }

    if (pathArr.length > 1){
      setRecursion(storage);
    } else {
      storage[path] = data;
    }

    this.webStorage.setItem(userId, JSON.stringify(storage));
    this.syncWithFirebase();
  }

  /**
   * Synchronize data with localStorage
   * @method
   * @memberof DataService
   */
  syncWithWebStorage(){
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).once('value').then((snapshot) => {
      this.webStorage.setItem(userId, JSON.stringify(snapshot.val()));
    });
  }

  /**
   * Synchronize data with firebase
   * @method
   * @memberof DataService
   */
  syncWithFirebase(){
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).update(JSON.parse(this.webStorage.getItem(userId)));
  }

}