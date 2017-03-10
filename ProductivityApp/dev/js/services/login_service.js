import pubsub from '../../js/pubsub';

/**
 * It contains methods for authorize/unauthorize user in app.
 * @class LoginService
 */
export default class loginService {
  constructor(){

    pubsub.subscribe( "click/SignIn", this.auth );
    pubsub.subscribe( "click/SignOut" , this.signOut );
    this.rebase();
  }

  /**
   * Making authorization request with user data to get access to app.
   * @method
   * @memberof LoginService
   */
  auth(){
    this.email = document.getElementById('username-input').value;
    this.password = document.getElementById('password-input').value;

    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  }

  /**
   * Unauthorize user from app.
   * @method
   * @memberof LoginService
   */
  signOut(){
    firebase.auth().signOut();
  }

  /**
   * Listen for authorization status and publish event if user credentials is valid.
   * @method
   * @memberof LoginService
   */
  rebase(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        pubsub.publish("auth/true");
      }
    });
  }

}