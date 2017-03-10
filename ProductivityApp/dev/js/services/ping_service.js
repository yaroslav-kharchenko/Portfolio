import pubsub from '../../js/pubsub';

let singletone = null;

/**
 * It contains methods for checking network status.
 * @class PingService
 */
export default class PingService {
  constructor(){

    if(!singletone) {
      singletone = this;

      window.addEventListener('online', () => {
        this.notifyUser('App become Online mode!');
        pubsub.publish('mode/Online');
      });
      window.addEventListener('offline', () => {
        this.notifyUser('App become Offline mode!');
        pubsub.publish('mode/Offline');
      });
    }

    return singletone;
  }

  /**
   * Make user notification with provided message.
   * @method
   * @memberof PingService
   * @param {string} message - message text
   */
  notifyUser(message){
    if (!('Notification' in window)) {
      alert(message);
    } else if (Notification.permission === "granted") {
      new Notification(message);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          new Notification(message);
        }
      });
    }
  }

}