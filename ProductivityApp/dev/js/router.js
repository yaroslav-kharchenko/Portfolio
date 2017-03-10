import pubsub from './pubsub';

export default class Router {

  constructor() {

    this.root = '/';
    this.routes = {
      login: {
        module: './login/login',
        name: 'Login',
        url: this.root
      },
      settings: {
        module: './settings/settings',
        name: 'Settings',
        url: '/settings'
      },
      tasklist: {
        module: './task-list/task-list',
        name: 'Task List',
        url: '/tasklist'
      },
      reports: {
        module: './reports/reports',
        name: 'Reports',
        url: '/reports'
      },
      timer: {
        module: './timer/timer',
        name: 'Timer',
        url: '/timer'
      }
    };

    var subscribe = [
      pubsub.subscribe( "auth/true",  () => {
        this.moveToPage('settings');
        document.querySelector('body').classList.remove('login-page');
      }),
      pubsub.subscribe( "route/timer",  (e, data) => {
        let timerController = require('./timer/timer_controller');
        let timer = new timerController.default(data);
        history.replaceState('timer', null, '/timer');
      })
    ]

  }

  moveToPage(page) {

    pubsub.publish("page/leave");

    require.ensure([], (require) => {
      let route = this.routes[page];
      let pageModule = require(route.module);

      history.replaceState(page, null, route.url);

      pageModule.default();
    });
  }

  bind() {
    this.moveToPage('login');

    window.addEventListener("popstate", (e) => {
      e.preventDefault();

      let path;
      if(!e.state) {
        if (location.hash[0] === '#'){
          path = location.hash.slice(1);
        } else {
          path = location.hash;
        }
      } else {
        path = e.state;
      }

      if (path === 'timer'){
        return false;
      }

      if (this.routes.hasOwnProperty(path)) {
        this.moveToPage(path);
      }
    });

  }

}