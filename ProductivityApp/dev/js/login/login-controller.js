import pubsub from '../../js/pubsub';
import View from './login-view';
import { data } from './login-data';

/**
 * Login page controller
 * Collects components and trigger events
 * @class LoginController
 * @extends Controller
 */
export default class Controller {

  constructor(){
    this.view = new View();
    this.data = data;
    if (document.querySelector('main')){
      document.querySelector('main').remove();
    }

    this.view.render(this.data);
    let loginButton = document.getElementsByClassName('login-button')[0];
    loginButton.addEventListener('click', this.signIn);
  }

  /**
   * Publish event that means that user click SignIn button.
   * @method
   * @memberof LoginController
   */
  signIn(e){
    e.preventDefault();
    pubsub.publish("click/SignIn");
  }

}