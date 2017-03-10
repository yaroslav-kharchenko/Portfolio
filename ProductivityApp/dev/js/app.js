import '../../build/css/reset.css';
import '../less/app.less';
import * as Firebase from 'firebase';
// import $ from 'jquery';
// import jQuery from 'jquery';
//
// window.$ = $;
// window.jQuery = jQuery;
window.firebase = Firebase;

//jQuery Plugins
import '../plugins/tooltip';
import '../plugins/accordion';
import '../plugins/dialog';
import '../plugins/tabs';

let config = {
  apiKey: "AIzaSyCRCPrXl0KeY35RCdgPViqCDxbheh3gelQ",
  authDomain: "prod-app-50094.firebaseapp.com",
  databaseURL: "https://prod-app-50094.firebaseio.com",
  storageBucket: "prod-app-50094.appspot.com",
  messagingSenderId: "702067455200"
};
firebase.initializeApp(config);

//loginService
import LoginService from './services/login_service';
let loginService = new LoginService;
//dataService
import DataService from './services/data_service'
let dataService = new DataService;

//Router
import Router from './router';
let router = new Router;
router.bind();