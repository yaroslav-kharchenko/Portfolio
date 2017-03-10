webpackJsonp([1],Array(65).concat([
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./login/login": 66,
		"./login/login-controller": 67,
		"./login/login-controller.js": 67,
		"./login/login-data": 70,
		"./login/login-data.js": 70,
		"./login/login-view": 68,
		"./login/login-view.js": 68,
		"./login/login.js": 66,
		"./pubsub": 34,
		"./pubsub.js": 34,
		"./reports/reports": 71,
		"./reports/reports.js": 71,
		"./reports/reports_controller": 72,
		"./reports/reports_controller.js": 72,
		"./reports/reports_tmpl": 78,
		"./reports/reports_tmpl.handlebars": 74,
		"./reports/reports_tmpl.js": 78,
		"./reports/reports_view": 73,
		"./reports/reports_view.js": 73,
		"./router": 37,
		"./router.js": 37,
		"./services/data_service": 35,
		"./services/data_service.js": 35,
		"./services/login_service": 33,
		"./services/login_service.js": 33,
		"./services/ping_service": 36,
		"./services/ping_service.js": 36,
		"./settings/categories/categories": 79,
		"./settings/categories/categories.js": 79,
		"./settings/categories/categories_controller": 80,
		"./settings/categories/categories_controller.js": 80,
		"./settings/categories/categories_data": 83,
		"./settings/categories/categories_data.js": 83,
		"./settings/categories/categories_tmpl": 84,
		"./settings/categories/categories_tmpl.handlebars": 82,
		"./settings/categories/categories_tmpl.js": 84,
		"./settings/categories/categories_view": 81,
		"./settings/categories/categories_view.js": 81,
		"./settings/pomodoras/pomodoras": 85,
		"./settings/pomodoras/pomodoras.js": 85,
		"./settings/pomodoras/pomodoras_controller": 86,
		"./settings/pomodoras/pomodoras_controller.js": 86,
		"./settings/pomodoras/pomodoras_data": 96,
		"./settings/pomodoras/pomodoras_data.js": 96,
		"./settings/pomodoras/pomodoras_tmpl": 97,
		"./settings/pomodoras/pomodoras_tmpl.handlebars": 95,
		"./settings/pomodoras/pomodoras_tmpl.js": 97,
		"./settings/pomodoras/pomodoras_view": 87,
		"./settings/pomodoras/pomodoras_view.js": 87,
		"./settings/settings": 98,
		"./settings/settings.js": 98,
		"./settings/settings_controller": 99,
		"./settings/settings_controller.js": 99,
		"./settings/settings_tmpl": 101,
		"./settings/settings_tmpl.handlebars": 102,
		"./settings/settings_tmpl.js": 101,
		"./settings/settings_view": 100,
		"./settings/settings_view.js": 100,
		"./task-list/task-list": 103,
		"./task-list/task-list.js": 103,
		"./task-list/task-list_controller": 104,
		"./task-list/task-list_controller.js": 104,
		"./task-list/task-list_tmpl.handlebars": 109,
		"./task-list/task-list_view": 108,
		"./task-list/task-list_view.js": 108,
		"./timer/timer": 121,
		"./timer/timer.js": 121,
		"./timer/timer_controller": 38,
		"./timer/timer_controller.js": 38,
		"./timer/timer_data": 122,
		"./timer/timer_data.js": 122,
		"./timer/timer_tmpl": 123,
		"./timer/timer_tmpl.handlebars": 63,
		"./timer/timer_tmpl.js": 123,
		"./timer/timer_view": 39,
		"./timer/timer_view.js": 39
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 65;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _loginController = __webpack_require__(67);
	
	var _loginController2 = _interopRequireDefault(_loginController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var login = function login() {
	  var page = new _loginController2.default();
	};
	
	exports.default = login;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	var _loginView = __webpack_require__(68);
	
	var _loginView2 = _interopRequireDefault(_loginView);
	
	var _loginData = __webpack_require__(70);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Login page controller
	 * Collects components and trigger events
	 * @class LoginController
	 * @extends Controller
	 */
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.view = new _loginView2.default();
	    this.data = _loginData.data;
	    if (document.querySelector('main')) {
	      document.querySelector('main').remove();
	    }
	
	    this.view.render(this.data);
	    var loginButton = document.getElementsByClassName('login-button')[0];
	    loginButton.addEventListener('click', this.signIn);
	  }
	
	  /**
	   * Publish event that means that user click SignIn button.
	   * @method
	   * @memberof LoginController
	   */
	
	
	  _createClass(Controller, [{
	    key: 'signIn',
	    value: function signIn(e) {
	      e.preventDefault();
	      _pubsub2.default.publish("click/SignIn");
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import Template from '../../components/login-form/login-form_tmpl';
	var template = __webpack_require__(69);
	
	/**
	 * Login page view
	 * Collects components and displays page content
	 * @class LoginView
	 * @extends View
	 */
	
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.template = template;
	  }
	
	  /**
	   * Render template content into parent selector;
	   * @method
	   * @memberof LoginView
	   * @param {object} data - object with page options
	   * @param {HTMLElement} parent - selector where content might be inserted
	   * context or an element.
	   */
	
	
	  _createClass(View, [{
	    key: 'render',
	    value: function render(data, parent) {
	      document.querySelector('body').innerHTML = '';
	      var parentElem = parent || document.querySelector('body');
	      parentElem.classList.add('login-page');
	      parentElem.innerHTML = this.template(data);
	    }
	  }, {
	    key: 'throwErrorMsg',
	    value: function throwErrorMsg(msg) {}
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "    <section class=\""
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "\">\r\n      <input id=\""
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "-input\" type=\""
	    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
	    + "\" placeholder=\""
	    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
	    + "\">\r\n      <label for=\""
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "-input\" class=\"icon-"
	    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
	    + "\"></label>\r\n      <span class=\"invalid-message\">"
	    + alias4(((helper = (helper = helpers.invalidMsg || (depth0 != null ? depth0.invalidMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"invalidMsg","hash":{},"data":data}) : helper)))
	    + "</span>\r\n    </section>\r\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, buffer = 
	  "<header class=\""
	    + alias4(((helper = (helper = helpers.mask || (depth0 != null ? depth0.mask : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mask","hash":{},"data":data}) : helper)))
	    + "-header\">\r\n  <a href=\"#\"><img class=\""
	    + alias4(((helper = (helper = helpers.mask || (depth0 != null ? depth0.mask : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mask","hash":{},"data":data}) : helper)))
	    + "-page-logo\" src=\""
	    + alias4(alias5(((stack1 = (depth0 != null ? depth0.logo : depth0)) != null ? stack1.src : stack1), depth0))
	    + "\" alt=\""
	    + alias4(alias5(((stack1 = (depth0 != null ? depth0.logo : depth0)) != null ? stack1.text : stack1), depth0))
	    + "\"></a>\r\n</header>\r\n<main class=\"main\">\r\n  <form class=\""
	    + alias4(((helper = (helper = helpers.mask || (depth0 != null ? depth0.mask : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mask","hash":{},"data":data}) : helper)))
	    + "-form\" action=\"#\">\r\n";
	  stack1 = ((helper = (helper = helpers.inputs || (depth0 != null ? depth0.inputs : depth0)) != null ? helper : alias2),(options={"name":"inputs","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
	  if (!helpers.inputs) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
	  if (stack1 != null) { buffer += stack1; }
	  return buffer + "    <button class=\""
	    + alias4(((helper = (helper = helpers.mask || (depth0 != null ? depth0.mask : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mask","hash":{},"data":data}) : helper)))
	    + "-button button button--small button--green\">Log In</button>\r\n  </form>\r\n</main>";
	},"useData":true});

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = exports.data = {
	  mask: 'login',
	  logo: {
	    src: './assets/img/Logo_1.svg',
	    text: 'Pomodoro Productivity Tracker'
	  },
	  inputs: [{
	    name: 'username',
	    type: 'email',
	    icon: 'login',
	    placeholder: 'Username',
	    invalidMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
	  }, {
	    name: 'password',
	    type: 'password',
	    icon: 'password',
	    placeholder: 'Password',
	    invalidMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
	  }]
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reports_controller = __webpack_require__(72);
	
	var _reports_controller2 = _interopRequireDefault(_reports_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reports = function reports() {
	  new _reports_controller2.default();
	}; //Main Page Template
	exports.default = reports;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	//Reports
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	var _reports_view = __webpack_require__(73);
	
	var _reports_view2 = _interopRequireDefault(_reports_view);
	
	var _charts_script = __webpack_require__(75);
	
	var _charts_script2 = _interopRequireDefault(_charts_script);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Reports page controller
	 * Collects components and trigger events
	 * @class ReportsController
	 * @extends Controller
	 */
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.view = new _reports_view2.default();
	    this.init();
	  }
	
	  /**
	   * Set class on active tab
	   * @method
	   * @memberof ReportsController
	   */
	
	
	  _createClass(Controller, [{
	    key: 'tabActivation',
	    value: function tabActivation(tab) {
	      $($(tab).siblings()).removeClass('tabs__link--active');
	      $(tab).addClass('tabs__link--active');
	    }
	
	    /**
	     * Set handlers for user interactions with page
	     * bind them on window
	     * @method
	     * @memberof ReportsController
	     */
	
	  }, {
	    key: 'setListeners',
	    value: function setListeners() {
	      var _this = this;
	
	      $('.filters__top .tabs__link').click(function (e) {
	        e.preventDefault();
	        if (e.target.textContent == 'Day') {
	          _this.tabActivation(e.target);
	          _charts_script2.default.dayChart();
	        } else if (e.target.textContent == 'Week') {
	          _this.tabActivation(e.target);
	          _charts_script2.default.weekChart();
	        } else if (e.target.textContent == 'Month') {
	          _this.tabActivation(e.target);
	          _charts_script2.default.monthChart();
	        }
	      });
	    }
	
	    /**
	     * Initialize page
	     * @method
	     * @memberof ReportsController
	     */
	
	  }, {
	    key: 'init',
	    value: function init() {
	      this.view.render();
	      _charts_script2.default.dayChart();
	      this.setListeners();
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _header_view = __webpack_require__(40);
	
	var _header_view2 = _interopRequireDefault(_header_view);
	
	var _header_controller = __webpack_require__(61);
	
	var _header_controller2 = _interopRequireDefault(_header_controller);
	
	var _header_data = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import Template from './reports_tmpl';
	var template = __webpack_require__(74);
	//Header
	
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.template = template;
	  }
	
	  _createClass(View, [{
	    key: 'render',
	    value: function render(parent, data) {
	
	      document.querySelector('body').innerHTML = '';
	
	      var header = new _header_controller2.default(_header_view2.default, _header_data.data, { title: 'Report', add: false, remove: false });
	      header.init();
	
	      var parentElem = parent || document.querySelector('body');
	      parentElem.innerHTML += this.template();
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<main class=\"content-wrap reports-main\">\r\n\r\n  <div class=\"filters__top tabs\">\r\n    <a href=\"#\" class=\"tabs__link tabs__link--active\">Day</a>\r\n    |<a href=\"#\" class=\"tabs__link\">Week</a>\r\n    |<a href=\"#\" class=\"tabs__link\">Month</a>\r\n  </div>\r\n\r\n  <div class=\"bagel-chart chart\">\r\n    <div id=\"container\" style=\"min-width: 300px; max-width: 605px; height: 317px; margin: 0 auto\"></div>\r\n  </div>\r\n\r\n  <div class=\" icomoon\">\r\n    <a class=\"arrow arrow--left\">&#xe902;</a>\r\n    <a class=\"arrow arrow--right\">&#xe903;</a>\r\n  </div>\r\n\r\n  <div class=\"filters__bottom tabs\">\r\n    <a href=\"#\" class=\"tabs__link\">Pomodoros</a>\r\n    |<a href=\"#\" class=\"tabs__link tabs__link--active\">Tasks</a>\r\n  </div>\r\n\r\n</main>";
	},"useData":true});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _charts_data = __webpack_require__(76);
	
	var _highcharts = __webpack_require__(77);
	
	var _highcharts2 = _interopRequireDefault(_highcharts);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Reports = {
	
	  dayChart: function dayChart() {
	    $(function () {
	
	      var browserData = [];
	      var dataLen = _charts_data.dayData.length;
	
	      for (var i = 0; i < dataLen; i += 1) {
	        browserData.push({
	          name: _charts_data.dayCategories[i],
	          y: _charts_data.dayData[i].y,
	          color: _charts_data.dayData[i].color
	        });
	      }
	
	      _highcharts2.default.chart('container', {
	        credits: {
	          enabled: false
	        },
	        chart: {
	          plotBackgroundColor: null,
	          plotBorderWidth: null,
	          plotShadow: false,
	          type: 'pie',
	          backgroundColor: 'transparent'
	        },
	        title: {
	          text: '8',
	          verticalAlign: 'middle',
	          y: 15,
	          style: {
	            fontFamily: 'Roboto',
	            fontSize: '70px',
	            color: '#fff'
	          }
	        },
	        subtitle: {
	          text: 'total',
	          verticalAlign: 'middle',
	          y: 37,
	          style: {
	            fontFamily: 'Roboto',
	            color: '#fff',
	            fontSize: '18px'
	          }
	        },
	        tooltip: {
	          useHTML: true,
	          formatter: function formatter() {
	            return '<b>' + this.point.name.toUpperCase() + '</b><br/>' + 'Tasks: ' + this.y;
	          },
	          shadow: false,
	          borderWidth: 0,
	          style: {
	            backgroundColor: '#fff',
	            opacity: 0.9,
	            border: '1px solid #4c6374',
	            fontFamily: 'Roboto'
	          }
	        },
	        plotOptions: {
	          pie: {
	            allowPointSelect: false,
	            cursor: 'pointer',
	            borderWidth: null,
	            dataLabels: {
	              enabled: true,
	              distance: -35,
	              format: '<b>{point.name}</b>',
	              style: {
	                fontFamily: 'PT Sans',
	                color: 'white',
	                fontSize: '14px',
	                fontWeight: 'bold',
	                textShadow: 'none'
	              }
	            }
	          }
	        },
	        series: [{
	          name: 'Tasks',
	          colorByPoint: true,
	          size: 265,
	          innerSize: 123,
	          shadow: {
	            color: 'rgba(0,0,0,0.3)',
	            width: 15
	          },
	          states: {
	            hover: {
	              halo: {
	                attributes: {
	                  fill: '#fff'
	                },
	                opacity: 0.8
	              }
	            }
	          },
	          data: browserData
	        }]
	      });
	    });
	  },
	
	  weekChart: function weekChart() {
	    $(function () {
	
	      var browserData = [];
	      var dataLen = _charts_data.weekData.length;
	
	      for (var i = 0; i < dataLen; i += 1) {
	        browserData.push({
	          name: _charts_data.weekCategories[i],
	          data: _charts_data.weekData[i].data,
	          stack: _charts_data.weekData[i].stack,
	          color: _charts_data.weekData[i].color
	        });
	      }
	
	      _highcharts2.default.chart('container', {
	
	        credits: {
	          enabled: false
	        },
	
	        chart: {
	          type: 'column',
	          backgroundColor: 'transparent',
	          plotBorderWidth: null
	        },
	
	        title: {
	          text: null
	        },
	
	        xAxis: {
	          categories: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
	          labels: {
	            style: {
	              color: '#fff',
	              fontSize: 11,
	              fontFamily: 'Roboto'
	            }
	          },
	          tickWidth: 0
	        },
	
	        yAxis: {
	          min: 0,
	          step: 2,
	          max: 10,
	          gridLineColor: '#345168',
	          lineColor: '#fff',
	          lineWidth: 1,
	          title: {
	            text: null
	          },
	          tickInterval: 2,
	          labels: {
	            style: {
	              color: '#fff',
	              fontSize: 11,
	              fontFamily: 'Roboto'
	            }
	          }
	        },
	
	        legend: {
	          symbolRadius: 0,
	          symbolHeight: 8,
	          y: -30,
	          itemMarginTop: 25,
	          itemDistance: 5,
	          itemStyle: {
	            fontFamily: 'Roboto',
	            fontSize: 11,
	            color: '#8da5b8'
	          },
	          itemHoverStyle: {
	            color: '#fff'
	          }
	        },
	
	        tooltip: {
	          useHTML: true,
	          shadow: false,
	          borderWidth: 0,
	          style: {
	            backgroundColor: '#fff',
	            opacity: 0.9,
	            border: '1px solid #4c6374',
	            fontFamily: 'Roboto',
	            fontSize: 12
	          },
	          formatter: function formatter() {
	            return '<b>' + this.series.name.toUpperCase() + '</b><br/>' + 'Tasks: ' + this.y;
	          }
	        },
	
	        plotOptions: {
	          column: {
	            stacking: 'normal',
	            borderWidth: 0
	          }
	        },
	
	        series: browserData
	      });
	    });
	  },
	
	  monthChart: function monthChart() {
	    $(function () {
	
	      var browserData = [];
	      var dataLen = _charts_data.weekData.length;
	
	      for (var i = 0; i < dataLen; i += 1) {
	        browserData.push({
	          name: _charts_data.weekCategories[i],
	          data: _charts_data.monthData[i].data,
	          stack: _charts_data.monthData[i].stack,
	          color: _charts_data.monthData[i].color
	        });
	      }
	
	      _highcharts2.default.chart('container', {
	
	        credits: {
	          enabled: false
	        },
	
	        chart: {
	          type: 'column',
	          backgroundColor: 'transparent',
	          plotBorderWidth: null
	        },
	
	        title: {
	          text: null
	        },
	
	        xAxis: {
	          min: 1,
	          tickInterval: 1,
	          tickColor: 'transparent',
	          labels: {
	            style: {
	              color: '#fff',
	              fontFamily: 'Roboto'
	            }
	          }
	        },
	
	        yAxis: {
	          min: 0,
	          gridLineColor: '#345168',
	          lineColor: '#fff',
	          lineWidth: 1,
	          title: {
	            text: null
	          },
	          tickInterval: 1,
	          labels: {
	            style: {
	              color: '#fff',
	              fontSize: 11,
	              fontFamily: 'Roboto'
	            }
	          }
	        },
	
	        legend: {
	          symbolRadius: 0,
	          symbolHeight: 8,
	          y: -30,
	          itemMarginTop: 25,
	          itemDistance: 5,
	          itemStyle: {
	            fontFamily: 'Roboto',
	            fontSize: 11,
	            color: '#8da5b8'
	          },
	          itemHoverStyle: {
	            color: '#fff'
	          }
	        },
	
	        tooltip: {
	          useHTML: true,
	          shadow: false,
	          borderWidth: 0,
	          style: {
	            backgroundColor: '#fff',
	            opacity: 0.9,
	            border: '1px solid #4c6374',
	            fontFamily: 'Roboto',
	            fontSize: 12
	          },
	          formatter: function formatter() {
	            return '<b>' + this.series.name.toUpperCase() + '</b><br/>' + 'Tasks: ' + this.y;
	          }
	        },
	
	        plotOptions: {
	          column: {
	            stacking: 'normal',
	            borderWidth: 0
	          }
	        },
	
	        series: browserData
	      });
	    });
	  }
	
	};
	
	exports.default = Reports;
	
	//Code for changing tabs active state
	
	function tabActivation(tab) {
	  $($(tab).siblings()).removeClass('tabs__link--active');
	  $(tab).addClass('tabs__link--active');
	}
	
	//Tabs events
	
	$('.filters__top .tabs__link').click(function () {
	  if (this.textContent == 'Day') {
	    tabActivation(this);
	    dayChart();
	  } else if (this.textContent == 'Week') {
	    tabActivation(this);
	    weekChart();
	  } else {
	    tabActivation(this);
	    monthChart();
	  }
	});
	
	// dayChart();

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dayCategories = exports.dayCategories = ['Urgent', 'Failed', 'High', 'Middle', 'Low'];
	
	var dayData = exports.dayData = [{
	  y: 2,
	  color: '#df5446'
	}, {
	  y: 3,
	  color: '#8da5b8'
	}, {
	  y: 6,
	  color: '#e79a3c'
	}, {
	  y: 4,
	  color: '#fcdb43'
	}, {
	  y: 3,
	  color: '#1aba9b'
	}];
	
	var weekCategories = exports.weekCategories = ['Urgent', 'High', 'Middle', 'Low', 'Failed'];
	
	var weekData = exports.weekData = [{
	  data: [3, 1, 2, 7, 2],
	  stack: 'stack1',
	  color: '#f15a4a'
	}, {
	  data: [2, 4, 2, 1, 1],
	  stack: 'stack1',
	  color: '#fea741'
	}, {
	  data: [1, 1, 1, 1, 1],
	  stack: 'stack1',
	  color: '#fddc43'
	}, {
	  data: [4, 2, 1, 1, 6],
	  stack: 'stack1',
	  color: '#1abb9b'
	}, {
	  data: [6, 2, 4, 4, 2],
	  stack: 'stack2',
	  color: '#8da5b8'
	}];
	
	var monthData = exports.monthData = [{
	  data: [3, 1, 2, 7, 2, 5, 3, 2, 1, 3, 4, 5, 6, 7, 3, 2, 1, 2, 3, 4, 2, 3, 5, 3, 4, 5, 6, 2, 3, 6, 5],
	  stack: 'stack1',
	  color: '#f15a4a'
	}, {
	  data: [3, 2, 5, 1, 2, 3, 1, 4, 6, 2, 1, 2, 4, 6, 2, 1, 2, 3, 2, 2, 1, 6, 2, 1, 3, 2, 2, 2, 1, 3, 1],
	  stack: 'stack1',
	  color: '#fea741'
	}, {
	  data: [1, 1, 1, 1, 1, 3, 4, 2, 1, 2, 3, 2, 1, 4, 2, 1, 1, 4, 3, 2, 2, 1, 3, 4, 3, 2, 1, 3, 4, 2, 3],
	  stack: 'stack1',
	  color: '#fddc43'
	}, {
	  data: [1, 2, 1, 1, 1, 3, 2, 2, 1, 2, 3, 2, 1, 2, 2, 1, 1, 2, 3, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 3],
	  stack: 'stack1',
	  color: '#1abb9b'
	}, {
	  data: [1, 2, 1, 1, 1, 1, 3, 2, 1, 2, 3, 2, 1, 2, 2, 1, 3, 2, 3, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2],
	  stack: 'stack1',
	  color: '#8da5b8'
	}];

/***/ },
/* 77 */,
/* 78 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import './reports_style.css'
	
	var Template = function () {
	  function Template() {
	    _classCallCheck(this, Template);
	  }
	
	  _createClass(Template, [{
	    key: "getDom",
	    value: function getDom(obj, options) {
	      return "\n  <main class=\"content-wrap reports-main\">\n\n    <div class=\"filters__top tabs\">\n      <a href=\"#\" class=\"tabs__link tabs__link--active\">Day</a>\n      |<a href=\"#\" class=\"tabs__link\">Week</a>\n      |<a href=\"#\" class=\"tabs__link\">Month</a>\n    </div>\n\n    <div class=\"bagel-chart chart\">\n      <div id=\"container\" style=\"min-width: 300px; max-width: 605px; height: 317px; margin: 0 auto\"></div>\n    </div>\n\n    <div class=\" icomoon\">\n      <a class=\"arrow arrow--left\">&#xe902;</a>\n      <a class=\"arrow arrow--right\">&#xe903;</a>\n    </div>\n\n    <div class=\"filters__bottom tabs\">\n      <a href=\"#\" class=\"tabs__link\">Pomodoros</a>\n      |<a href=\"#\" class=\"tabs__link tabs__link--active\">Tasks</a>\n    </div>\n\n  </main>\n    ";
	    }
	  }]);
	
	  return Template;
	}();
	
	exports.default = Template;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _categories_controller = __webpack_require__(80);
	
	var _categories_controller2 = _interopRequireDefault(_categories_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var categories = function categories() {
	  new _categories_controller2.default();
	}; //Main Page Template
	exports.default = categories;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	//Main Page Template
	
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	var _categories_view = __webpack_require__(81);
	
	var _categories_view2 = _interopRequireDefault(_categories_view);
	
	var _categories_data = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Categories tab controller
	 * Collects components and trigger events
	 * @class CategoriesController
	 * @extends Controller
	 */
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.view = new _categories_view2.default();
	    this.data = _categories_data.data;
	    this.handlers;
	  }
	
	  /**
	   * Get categories options from page
	   * @method
	   * @memberof CategoriesController
	   * @returns {Object[]} - object which consist of list of categories
	   * @returns {string} object[].id1 - id 5 - categories values.
	   */
	
	
	  _createClass(Controller, [{
	    key: 'getOptions',
	    value: function getOptions() {
	      return {
	        id1: document.getElementById('category-1').value,
	        id2: document.getElementById('category-2').value,
	        id3: document.getElementById('category-3').value,
	        id4: document.getElementById('category-4').value,
	        id5: document.getElementById('category-5').value
	      };
	    }
	  }, {
	    key: 'back',
	    value: function back() {}
	
	    /**
	     * Publish event that means that user click Save button.
	     * @method
	     * @memberof CategoriesController
	     */
	
	  }, {
	    key: 'save',
	    value: function save() {
	      _pubsub2.default.publish("click/saveCategories", this.getOptions());
	    }
	
	    /**
	     * Set handlers for user interactions with page
	     * bind them on window
	     * @method
	     * @memberof CategoriesController
	     */
	
	  }, {
	    key: 'setListeners',
	    value: function setListeners() {
	      var _this = this;
	
	      var handlers = function handlers(e) {
	        if (e.target.classList.contains('save-button--categories')) {
	          e.preventDefault();
	          _this.save();
	          location.hash += '#tasklist';
	        }
	        if (e.target.classList.contains('back-button--categories')) {
	          e.preventDefault();
	        }
	      };
	
	      this.handlers = handlers;
	      window.addEventListener('click', this.handlers);
	    }
	
	    /**
	     * Destroy all event handlers on the page
	     * @method
	     * @memberof CategoriesController
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      window.removeEventListener('click', this.handlers);
	    }
	
	    /**
	     * Initialize page
	     * @method
	     * @memberof CategoriesController
	     * @param {object} options - object with page options
	     */
	
	  }, {
	    key: 'init',
	    value: function init(e, options) {
	      if (options) {
	        this.view.render(this.data, options);
	        this.setListeners();
	      } else {
	        this.view.render(this.data, _categories_data.options);
	        this.setListeners();
	      }
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _header_view = __webpack_require__(40);
	
	var _header_view2 = _interopRequireDefault(_header_view);
	
	var _header_controller = __webpack_require__(61);
	
	var _header_controller2 = _interopRequireDefault(_header_controller);
	
	var _header_data = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import Template from './categories_tmpl';
	var template = __webpack_require__(82);
	
	//Header
	
	/**
	 * Categories tab view
	 * Collects components and displays page content
	 * @class CategoriesView
	 * @extends View
	 */
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.template = template;
	  }
	
	  /**
	   * Render template content into parent selector;
	   * @method
	   * @memberof CategoriesView
	   * @param {object} data - object with page data
	   * @param {object} options - object with categories options
	   * @param {HTMLElement} parent - selector where content might be inserted
	   * context or an element.
	   */
	
	
	  _createClass(View, [{
	    key: 'render',
	    value: function render(data, options, parent) {
	
	      var parentElem = $('.categories-block')[0];
	
	      parentElem.innerHTML += this.template({ obj: data, options: options });
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "    <li class=\"categories-item\">\r\n      <input type=\"text\" id=\"category-"
	    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\" class=\"category-name\" value=\""
	    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
	    + "\"/>\r\n      <i class=\"category-color\"></i>\r\n    </li>\r\n";
	},"3":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.show : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"4":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "      <button class=\""
	    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
	    + "-button "
	    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
	    + "-button--categories button button--"
	    + alias4(((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size","hash":{},"data":data}) : helper)))
	    + " button--"
	    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
	    + "\">"
	    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
	    + "</button>\r\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, options, alias1=container.lambda, alias2=helpers.blockHelperMissing, buffer = 
	  "<h2 class=\"settings-header\">"
	    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.title : stack1), depth0))
	    + "</h2>\r\n<form action=\"#\" class=\"categories_form inner-wrap\">\r\n  <ul class=\"categories-list\">\r\n";
	  stack1 = ((helper = (helper = helpers.options || (depth0 != null ? depth0.options : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"options","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
	  if (!helpers.options) { stack1 = alias2.call(depth0,stack1,options)}
	  if (stack1 != null) { buffer += stack1; }
	  return buffer + "  </ul>\r\n</form>\r\n<div class=\"settings-controls inner-wrap\">\r\n"
	    + ((stack1 = alias2.call(depth0,alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.buttons : stack1), depth0),{"name":"obj.buttons","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</div>";
	},"useData":true});

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = exports.data = {
	  title: 'Choose categories',
	  tabs: [{
	    name: 'Pomodoros'
	  }, {
	    name: 'Categories'
	  }],
	  buttons: [{
	    value: 'Next',
	    className: 'next',
	    color: 'green',
	    size: 'small',
	    show: false
	  }, {
	    value: 'Back',
	    className: 'back',
	    color: 'blue',
	    size: 'small',
	    show: true
	  }, {
	    value: 'Save',
	    className: 'save',
	    color: 'green',
	    size: 'small',
	    show: true
	  }]
	};
	
	var options = exports.options = [{
	  id: 1,
	  value: 'Work'
	}, {
	  id: 2,
	  value: 'Education'
	}, {
	  id: 3,
	  value: 'Hobby'
	}, {
	  id: 4,
	  value: 'Sport'
	}, {
	  id: 5,
	  value: 'Other'
	}];

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import './categories_style.css'
	
	var Template = function () {
	  function Template() {
	    _classCallCheck(this, Template);
	  }
	
	  _createClass(Template, [{
	    key: 'getDom',
	    value: function getDom(obj, options) {
	      return '\n      <h2 class="settings-header">' + obj.title + '</h2>\n      <form action="#" class="categories_form inner-wrap">\n        <ul class="categories-list">\n          <li class="categories-item">\n            <input type="text" id="category-' + options[0].id + '" class="category-name" value="' + options[0].value + '"/>\n            <i class="category-color"></i>\n          </li>\n          <li class="categories-item">\n            <input type="text" id="category-' + options[1].id + '" class="category-name" value="' + options[1].value + '"/>\n            <i class="category-color"></i>\n          </li>\n          <li class="categories-item">\n            <input type="text" id="category-' + options[2].id + '" class="category-name" value="' + options[2].value + '"/>\n            <i class="category-color"></i>\n          </li>\n          <li class="categories-item">\n            <input type="text" id="category-' + options[3].id + '" class="category-name" value="' + options[3].value + '"/>\n            <i class="category-color"></i>\n          </li>\n          <li class="categories-item">\n            <input type="text" id="category-' + options[4].id + '" class="category-name" value="' + options[4].value + '"/>\n            <i class="category-color"></i>\n          </li>\n        </ul>\n      </form>\n      <div class="settings-controls inner-wrap">\n        ' + (obj.buttons[0].show ? '<button class="' + obj.buttons[0].className + '-button ' + obj.buttons[0].className + '-button--categories button button--' + obj.buttons[0].size + ' button--' + obj.buttons[0].color + '">' + obj.buttons[0].value + '</button>' : '') + '\n        ' + (obj.buttons[1].show ? '<button class="' + obj.buttons[1].className + '-button ' + obj.buttons[1].className + '-button--categories button button--' + obj.buttons[1].size + ' button--' + obj.buttons[1].color + '">' + obj.buttons[1].value + '</button>' : '') + '\n        ' + (obj.buttons[2].show ? '<button class="' + obj.buttons[2].className + '-button ' + obj.buttons[2].className + '-button--categories button button--' + obj.buttons[2].size + ' button--' + obj.buttons[2].color + '">' + obj.buttons[2].value + '</button>' : '') + '\n      </div>\n    ';
	    }
	  }]);
	
	  return Template;
	}();
	
	exports.default = Template;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _pomodoras_controller = __webpack_require__(86);
	
	var _pomodoras_controller2 = _interopRequireDefault(_pomodoras_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pomodoras = function pomodoras() {
	  var page = new _pomodoras_controller2.default();
	};
	
	exports.default = pomodoras;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	//Main Page Template
	
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	var _pomodoras_view = __webpack_require__(87);
	
	var _pomodoras_view2 = _interopRequireDefault(_pomodoras_view);
	
	var _pomodoras_data = __webpack_require__(96);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Pomodoras tab controller
	 * Collects components and trigger events
	 * @class PomodorasController
	 * @extends Controller
	 */
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.view = new _pomodoras_view2.default();
	    this.data = _pomodoras_data.data;
	    this.handlers;
	  }
	
	  /**
	   * Get pomodoras graph options from page
	   * @method
	   * @memberof PomodorasController
	   * @returns {Object[]} - object which consist of pomodoras graph parameters
	   * @returns {string} object[].wtValue - work time duration.
	   * @returns {string} object[].sbValue - short break duration.
	   * @returns {string} object[].wiValue - work iteration duration.
	   * @returns {string} object[].lbValue - long break duration.
	   */
	
	
	  _createClass(Controller, [{
	    key: 'getOptions',
	    value: function getOptions() {
	      var workTimeInput = document.getElementsByClassName('work-time__value')[0];
	      var shortBreakInput = document.getElementsByClassName('short-break__value')[0];
	      var workIterationInput = document.getElementsByClassName('work-iteration__value')[0];
	      var longBreakInput = document.getElementsByClassName('long-break__value')[0];
	
	      return {
	        wtValue: workTimeInput.value,
	        sbValue: shortBreakInput.value,
	        wiValue: workIterationInput.value,
	        lbValue: longBreakInput.value
	      };
	    }
	  }, {
	    key: 'back',
	    value: function back() {}
	
	    /**
	     * Publish event that means that user click Save button.
	     * @method
	     * @memberof PomodorasController
	     */
	
	  }, {
	    key: 'save',
	    value: function save() {
	      _pubsub2.default.publish("click/savePomodoras", this.getOptions());
	    }
	
	    /**
	     * Set handlers for user interactions with page
	     * bind them on window
	     * @method
	     * @memberof PomodorasController
	     */
	
	  }, {
	    key: 'setListeners',
	    value: function setListeners() {
	      var _this = this;
	
	      var handlers = function handlers(e) {
	        if (e.target.classList.contains('save-button--pomodoras')) {
	          e.preventDefault();
	          _this.save();
	          location.hash += '#tasklist';
	        }
	      };
	
	      this.handlers = handlers;
	      window.addEventListener('click', handlers);
	    }
	
	    /**
	     * Destroy all event handlers on the page
	     * @method
	     * @memberof PomodorasController
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      window.removeEventListener('click', this.handlers);
	    }
	
	    /**
	     * Initialize page
	     * @method
	     * @memberof SettingsController
	     * @param {object} options - object with page options
	     */
	
	  }, {
	    key: 'init',
	    value: function init(e, options) {
	      if (options) {
	        this.view.render(this.data, options);
	        this.setListeners();
	      } else {
	        this.view.render(this.data);
	        this.setListeners();
	      }
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _cycleGraphView = __webpack_require__(88);
	
	var _cycleGraphView2 = _interopRequireDefault(_cycleGraphView);
	
	var _cycleGraphController = __webpack_require__(89);
	
	var _cycleGraphController2 = _interopRequireDefault(_cycleGraphController);
	
	var _cycleControlsView = __webpack_require__(90);
	
	var _cycleControlsView2 = _interopRequireDefault(_cycleControlsView);
	
	var _cycleControlsController = __webpack_require__(93);
	
	var _cycleControlsController2 = _interopRequireDefault(_cycleControlsController);
	
	var _cycleControlsData = __webpack_require__(94);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import Template from './pomodoras_tmpl';
	var template = __webpack_require__(95);
	
	//Cycle Graph
	
	/**
	 * Pomodoras tab view
	 * Collects components and displays page content
	 * @class PomodorasView
	 * @extends View
	 */
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.template = template;
	  }
	
	  /**
	   * Render template content into parent selector;
	   * @method
	   * @memberof PomodorasView
	   * @param {object} data - object with page data
	   * @param {object} controlsDB - object with graph controls data
	   * @param {HTMLElement} parent - selector where content might be inserted
	   */
	
	
	  _createClass(View, [{
	    key: 'render',
	    value: function render(data, controlsDB, parent) {
	
	      // let parentElem = parent || document.querySelector('body');
	      var parentElem = $('.pomodoras-block')[0];
	
	      parentElem.innerHTML += this.template(data);
	
	      var container = document.getElementsByClassName('options-section')[0];
	
	      if (controlsDB) {
	        var cycleControls = new _cycleControlsController2.default(_cycleControlsView2.default, _cycleControlsData.data, container, controlsDB);
	      } else {
	        var _cycleControls = new _cycleControlsController2.default(_cycleControlsView2.default, _cycleControlsData.data, container, _cycleControlsData.options);
	      }
	
	      var graph = new _cycleGraphController2.default(_cycleGraphView2.default, {
	        workTimeInput: 'work-time__value',
	        shortBreakInput: 'short-break__value',
	        workIterationInput: 'work-iteration__value',
	        longBreakInput: 'long-break__value',
	        controls: 'controls-container'
	      });
	      graph.init();
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * CycleGraph component view
	 * Consist of methods for cycle graph render
	 * @class CycleGraphView
	 */
	var View = function () {
	  function View(options) {
	    _classCallCheck(this, View);
	
	    this.valueWT = parseInt(options.wtValue);
	    this.valueSB = parseInt(options.sbValue);
	    this.valueWI = parseInt(options.wiValue);
	    this.valueLB = parseInt(options.lbValue);
	    this.docFragment = document.createDocumentFragment();
	  }
	
	  /**
	   * Set options for graph
	   * @method
	   * @memberof CycleGraphView
	   * @param {object[]} options - object which consist of pomodoras graph parameters
	   * @param {string} options[].wtValue - work time duration.
	   * @param {string} options[].sbValue - short break duration.
	   * @param {string} options[].wiValue - work iteration duration.
	   * @param {string} options[].lbValue - long break duration.
	   */
	
	
	  _createClass(View, [{
	    key: 'setOptions',
	    value: function setOptions(options) {
	      this.valueWT = parseInt(options.wtValue);
	      this.valueSB = parseInt(options.sbValue);
	      this.valueWI = parseInt(options.wiValue);
	      this.valueLB = parseInt(options.lbValue);
	    }
	
	    /**
	     * Get amount of time
	     * @method
	     * @memberof CycleGraphView
	     * @param {number} WT - work time duration.
	     * @param {number} SB - short break duration.
	     * @param {number} WI - work iteration duration.
	     * @param {number} LB - long break duration.
	     * @returns {number} - (workTime + shortBreak) * (workIteration * 2) - (shortBreak * 2) + longBreak
	     */
	
	  }, {
	    key: 'getAmountTime',
	    value: function getAmountTime(WT, SB, WI, LB) {
	      return (WT + SB) * (WI * 2) - SB * 2 + LB;
	    }
	
	    /**
	     * Get full cycle period
	     * @method
	     * @memberof CycleGraphView
	     * @param {number} WT - work time duration.
	     * @param {number} SB - short break duration.
	     * @param {number} WI - work iteration duration.
	     * @param {number} LB - long break duration.
	     * @returns {number} - (workTime + shortBreak) - shortBreak + longBreak
	     */
	
	  }, {
	    key: 'getFullCycle',
	    value: function getFullCycle(WT, SB, WI, LB) {
	      return (WT + SB) * WI - SB + LB;
	    }
	
	    /**
	     * Returns time value in right format
	     * @param {number} num - current period value on time scale
	     * @method
	     * @memberof CycleGraphView
	     * @return {string} - period value on time scale in right format
	     */
	
	  }, {
	    key: 'getTimeFormat',
	    value: function getTimeFormat(num) {
	      var timeValue = void 0;
	      var hours = ~~(num / 60);
	      var minutes = num % 60;
	      if (hours && minutes > 0) {
	        timeValue = hours + 'h ' + minutes + 'm';
	      } else if (hours && minutes === 0) {
	        timeValue = hours + 'h';
	      } else {
	        timeValue = minutes + 'm';
	      }
	      return timeValue;
	    }
	
	    /**
	     * Generates timelines scale
	     * @method
	     * @memberof CycleGraphView
	     */
	
	  }, {
	    key: 'timelineGenerate',
	    value: function timelineGenerate() {
	      var fullCycleTime = this.getAmountTime(this.valueWT, this.valueSB, this.valueWI, this.valueLB);
	
	      var timelineUL = document.createElement('ul');
	      timelineUL.classList.add('time-line');
	
	      var timePointsCount = parseInt(fullCycleTime / 30);
	
	      for (var i = 1; i <= timePointsCount; i++) {
	        var li = document.createElement('li');
	        li.classList.add('time-period');
	        li.style.width = 30 / fullCycleTime * 100 + '%';
	        var span = document.createElement('span');
	        span.classList.add('time-period__value');
	        span.innerHTML = this.getTimeFormat(30 * i);
	        li.appendChild(span);
	        timelineUL.appendChild(li);
	      }
	      this.docFragment.appendChild(timelineUL);
	    }
	
	    /**
	     * Generates graph
	     * @method
	     * @memberof CycleGraphView
	     */
	
	  }, {
	    key: 'graphGenerate',
	    value: function graphGenerate() {
	      var fullCycleTime = this.getAmountTime(this.valueWT, this.valueSB, this.valueWI, this.valueLB);
	
	      var liCount = this.valueWI * 4 - 2 + 1; //((Work Time + Short Break) * 2) * iterationsCount - 2*ShortBreak + 1*LongBreak
	      var workTimeCycle = this.valueWI * 2 - 1;
	      var graphUL = document.createElement('ul');
	      graphUL.classList.add('cycle-graph');
	
	      for (var i = 1; i <= liCount; i++) {
	        var li = document.createElement('li');
	        if (i % 2 != 0) {
	          li.classList.add('work-time-period');
	          li.style.width = this.valueWT / fullCycleTime * 100 + '%';
	        } else {
	          if (i == workTimeCycle + 1) {
	            li.classList.add('long-break-period');
	            var mark = document.createElement('span');
	            mark.classList.add('full-cycle-label');
	            mark.innerHTML = 'Full Cycle: ' + this.getTimeFormat(this.getFullCycle(this.valueWT, this.valueSB, this.valueWI, this.valueLB));
	            li.appendChild(mark);
	            li.style.width = this.valueLB / fullCycleTime * 100 + '%';
	          } else {
	            li.classList.add('short-break-period');
	            li.style.width = this.valueSB / fullCycleTime * 100 + '%';
	          }
	        }
	        graphUL.appendChild(li);
	      }
	      this.docFragment.appendChild(graphUL);
	    }
	
	    /**
	     * Render graph into this container;
	     * @method
	     * @memberof CycleGraphView
	     * @param {object} options - object with cycle graph options
	     */
	
	  }, {
	    key: 'render',
	    value: function render(options) {
	      var graphContainer = document.getElementsByClassName('cycle-graph-container')[0];
	      this.setOptions(options);
	      graphContainer.innerHTML = '';
	      this.graphGenerate();
	      this.timelineGenerate();
	      graphContainer.appendChild(this.docFragment);
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * CycleGraph component controller
	 * Consist of methods for cycle graph interactions
	 * @class CycleGraphController
	 * @param {object} View - cycle graph view
	 * @param {object} options - object with all controls elements
	 * @param {string} options[].workTimeInput - work time input element.
	 * @param {string} options[].shortBreakInput - short break input element.
	 * @param {string} options[].workIterationInput - work iteration input element.
	 * @param {string} options[].longBreakInput - long break input element.
	 * @param {string} options[].controls - controls container.
	 */
	var Controller = function () {
	  function Controller(View, options) {
	    _classCallCheck(this, Controller);
	
	    this.workTimeInput = document.getElementsByClassName(options.workTimeInput)[0];
	    this.shortBreakInput = document.getElementsByClassName(options.shortBreakInput)[0];
	    this.workIterationInput = document.getElementsByClassName(options.workIterationInput)[0];
	    this.longBreakInput = document.getElementsByClassName(options.longBreakInput)[0];
	    this.controlsContainer = document.getElementsByClassName(options.controls)[0];
	    this.view = new View(this.getOptions());
	  }
	
	  /**
	   * Increase input's value
	   * @method
	   * @memberof CycleGraphController
	   * @param {HTMLElement} input - input element
	   */
	
	
	  _createClass(Controller, [{
	    key: 'inputValueIncrease',
	    value: function inputValueIncrease(input) {
	      var currentValue = parseInt(input.value);
	      if (input == this.workTimeInput) {
	        if (currentValue >= 40) {
	          return;
	        } //Max value
	        input.value = currentValue + 5 + ' min';
	      }
	      if (input == this.longBreakInput) {
	        if (currentValue >= 60) {
	          return;
	        } //Max value
	        input.value = currentValue + 5 + ' min';
	      }
	      if (input == this.shortBreakInput) {
	        if (currentValue >= 15) {
	          return;
	        } //Max value
	        input.value = currentValue + 1 + ' min';
	      }
	      if (input == this.workIterationInput) {
	        if (currentValue >= 5) {
	          return;
	        } //Max value
	        input.value = currentValue + 1;
	      }
	    }
	
	    /**
	     * Decrease input's value
	     * @method
	     * @memberof CycleGraphController
	     * @param {HTMLElement} input - input element
	     */
	
	  }, {
	    key: 'inputValueDecrease',
	    value: function inputValueDecrease(input) {
	      var currentValue = parseInt(input.value);
	      if (input == this.workTimeInput) {
	        if (currentValue <= 15) {
	          return;
	        } //Min value
	        input.value = currentValue - 5 + ' min';
	      }
	      if (input == this.longBreakInput) {
	        if (currentValue <= 30) {
	          return;
	        } //Min value
	        input.value = currentValue - 5 + ' min';
	      }
	      if (input == this.shortBreakInput) {
	        if (currentValue <= 1) {
	          return;
	        } //Min value
	        input.value = currentValue - 1 + ' min';
	      }
	      if (input == this.workIterationInput) {
	        if (currentValue <= 1) {
	          return;
	        } //Min value
	        input.value = currentValue - 1;
	      }
	    }
	
	    /**
	     * Handler for controls click which decrease/increase input value
	     * @method
	     * @memberof CycleGraphController
	     */
	
	  }, {
	    key: 'changeInputValue',
	    value: function changeInputValue(e) {
	      e.preventDefault();
	      var target = e.target;
	      var parent = target.parentNode;
	      var input = parent.getElementsByClassName('timer-value')[0];
	      if (target.nodeName == 'BUTTON') {
	        if (target.classList.contains('value-increase')) {
	          this.inputValueIncrease(input);
	        }
	        if (target.classList.contains('value-decrease')) {
	          this.inputValueDecrease(input);
	        }
	      }
	      this.view.render(this.getOptions());
	    }
	
	    /**
	     * Get options of graph
	     * @method
	     * @memberof CycleGraphController
	     * @returns {Object[]} - object which consist of pomodoras graph parameters
	     * @returns {string} object[].wtValue - work time duration.
	     * @returns {string} object[].sbValue - short break duration.
	     * @returns {string} object[].wiValue - work iteration duration.
	     * @returns {string} object[].lbValue - long break duration.
	     */
	
	  }, {
	    key: 'getOptions',
	    value: function getOptions() {
	      return {
	        wtValue: this.workTimeInput.value,
	        sbValue: this.shortBreakInput.value,
	        wiValue: this.workIterationInput.value,
	        lbValue: this.longBreakInput.value
	      };
	    }
	
	    /**
	     * Initialize component
	     * @method
	     * @memberof CycleGraphController
	     */
	
	  }, {
	    key: 'init',
	    value: function init() {
	      this.controlsContainer.addEventListener('click', this.changeInputValue.bind(this));
	      this.view.render(this.getOptions());
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _cycleControlsTmpl = __webpack_require__(91);
	
	var _cycleControlsTmpl2 = _interopRequireDefault(_cycleControlsTmpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = __webpack_require__(92);
	
	/**
	 * CycleControls component view
	 * Displays component content
	 * @class CycleControlsView
	 */
	
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.template = template;
	  }
	
	  /**
	   * Render template content into parent selector;
	   * @method
	   * @memberof CycleControlsView
	   * @param {object} data - object with component data
	   * @param {object} options - object with cycle options
	   * @param {HTMLElement} parent - selector where content might be inserted
	   */
	
	
	  _createClass(View, [{
	    key: "render",
	    value: function render(parent, data, options) {
	      var tmplStr = "\n    <ul class=\"column-container controls-container\">";
	      for (var i = 0; i < data.length; i++) {
	        tmplStr += this.template({ obj: data[i], options: options[i] });
	      }
	      tmplStr += "</ul>";
	      parent.innerHTML = tmplStr;
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Template = function () {
	  function Template() {
	    _classCallCheck(this, Template);
	  }
	
	  _createClass(Template, [{
	    key: "getDom",
	    value: function getDom(obj, options) {
	      return "\n      <li>\n      <section class=\"" + obj.className + " option-block\">\n       <h3 class=\"setting-title\">" + obj.name + "</h3>\n       <div class=\"option-controls\">\n       <button class=\"value-decrease\">&#xe911;</button>\n       <button class=\"value-increase\">&#xe900;</button>\n       <input class=\"timer-value " + obj.className + "__value\" type=\"text\" value=\"" + options.value + "\" disabled/>\n       </div>\n       <p class=\"description\">" + obj.desc + "</p>\n      </section>\n      </li>\n    ";
	    }
	  }]);
	
	  return Template;
	}();
	
	exports.default = Template;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<li>\r\n  <section class=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.className : stack1), depth0))
	    + " option-block\">\r\n    <h3 class=\"setting-title\">"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
	    + "</h3>\r\n    <div class=\"option-controls\">\r\n      <button class=\"value-decrease\">&#xe911;</button>\r\n      <button class=\"value-increase\">&#xe900;</button>\r\n      <input class=\"timer-value "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.className : stack1), depth0))
	    + "__value\" type=\"text\" value=\""
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.value : stack1), depth0))
	    + "\" disabled/>\r\n    </div>\r\n    <p class=\"description\">"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.desc : stack1), depth0))
	    + "</p>\r\n  </section>\r\n</li>";
	},"useData":true});

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function Controller(view, data, container, options) {
	  _classCallCheck(this, Controller);
	
	  this.view = new view();
	  this.view.render(container, data, options);
	};
	
	exports.default = Controller;

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = exports.data = [{
	  name: 'Work time',
	  className: 'work-time',
	  desc: 'Lorem ipsum dolor sit amet consectetur adipiscing',
	  value: "25 min"
	}, {
	  name: 'Work iteration',
	  className: 'work-iteration',
	  desc: 'Lorem ipsum dolor sit amet consectetur',
	  value: "5"
	}, {
	  name: 'Short Break',
	  className: 'short-break',
	  desc: 'Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod tempor',
	  value: "5 min"
	}, {
	  name: 'Long Break',
	  className: 'long-break',
	  desc: 'Lorem ipsum dolor sit amet consectetur adipiscing',
	  value: "45 min"
	}];
	
	var options = exports.options = [{
	  name: 'Work time',
	  value: "25 min"
	}, {
	  name: 'Work iteration',
	  value: "5"
	}, {
	  name: 'Short Break',
	  value: "5 min"
	}, {
	  name: 'Long Break',
	  value: "45 min"
	}];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.show : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"2":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "      <button class=\""
	    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
	    + "-button "
	    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
	    + "-button--pomodoras button button--"
	    + alias4(((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size","hash":{},"data":data}) : helper)))
	    + " button--"
	    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
	    + "\">"
	    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
	    + "</button>\r\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", buffer = 
	  "<h2 class=\"settings-header\">"
	    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
	    + "</h2>\r\n<div class=\"options-section clearfix\">\r\n</div>\r\n<section class=\"cycle-graph-section\">\r\n  <h3>Your cycle</h3>\r\n  <div class=\"cycle-graph-container\"></div>\r\n</section>\r\n<div class=\"settings-controls inner-wrap\">\r\n";
	  stack1 = ((helper = (helper = helpers.buttons || (depth0 != null ? depth0.buttons : depth0)) != null ? helper : alias2),(options={"name":"buttons","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
	  if (!helpers.buttons) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
	  if (stack1 != null) { buffer += stack1; }
	  return buffer + "</div>";
	},"useData":true});

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = exports.data = {
	  title: 'Pomodoros Settings',
	  tabs: [{
	    name: 'Pomodoros'
	  }, {
	    name: 'Categories'
	  }],
	  buttons: [{
	    value: 'Next',
	    className: 'next',
	    color: 'green',
	    size: 'small',
	    show: false
	  }, {
	    value: 'Back',
	    className: 'back',
	    color: 'blue',
	    size: 'small',
	    show: true
	  }, {
	    value: 'Save',
	    className: 'save',
	    color: 'green',
	    size: 'small',
	    show: true
	  }]
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import './pomodoras_style.css'
	
	var Template = function () {
	  function Template() {
	    _classCallCheck(this, Template);
	  }
	
	  _createClass(Template, [{
	    key: 'getDom',
	    value: function getDom(obj) {
	      return '\n        <h2 class="settings-header">' + obj.title + '</h2> \n        <div class="options-section clearfix">\n        </div>\n        <section class="cycle-graph-section">\n        <h3>Your cycle</h3>\n        <div class="cycle-graph-container"></div>\n        </section>\n        <div class="settings-controls inner-wrap">\n        ' + (obj.buttons[0].show ? '<button class="' + obj.buttons[0].className + '-button ' + obj.buttons[0].className + '-button--pomodoras button button--' + obj.buttons[0].size + ' button--' + obj.buttons[0].color + '">' + obj.buttons[0].value + '</button>' : '') + '\n        ' + (obj.buttons[1].show ? '<button class="' + obj.buttons[1].className + '-button ' + obj.buttons[1].className + '-button--pomodoras button button--' + obj.buttons[1].size + ' button--' + obj.buttons[1].color + '">' + obj.buttons[1].value + '</button>' : '') + '\n        ' + (obj.buttons[2].show ? '<button class="' + obj.buttons[2].className + '-button ' + obj.buttons[2].className + '-button--pomodoras button button--' + obj.buttons[2].size + ' button--' + obj.buttons[2].color + '">' + obj.buttons[2].value + '</button>' : '') + '\n      </div>\n    ';
	    }
	  }]);
	
	  return Template;
	}();
	
	exports.default = Template;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _settings_controller = __webpack_require__(99);
	
	var _settings_controller2 = _interopRequireDefault(_settings_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pomodoras = function pomodoras() {
	  var page = new _settings_controller2.default();
	};
	
	exports.default = pomodoras;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	//Main Page Template
	
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	var _data_service = __webpack_require__(35);
	
	var _data_service2 = _interopRequireDefault(_data_service);
	
	var _settings_view = __webpack_require__(100);
	
	var _settings_view2 = _interopRequireDefault(_settings_view);
	
	var _pomodoras_controller = __webpack_require__(86);
	
	var _pomodoras_controller2 = _interopRequireDefault(_pomodoras_controller);
	
	var _categories_controller = __webpack_require__(80);
	
	var _categories_controller2 = _interopRequireDefault(_categories_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Settings page controller
	 * Collects components and trigger events
	 * @class SettingsController
	 * @extends Controller
	 */
	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    this.view = new _settings_view2.default();
	    this.dataService = new _data_service2.default();
	    this.pomodoras = new _pomodoras_controller2.default();
	    this.categories = new _categories_controller2.default();
	
	    this.init();
	
	    //Забираем данные из Файербейса/Инициализация блоков
	    this.subscribe = [_pubsub2.default.subscribe("getData/pomodoras", this.pomodoras.init.bind(this.pomodoras)), _pubsub2.default.subscribe("getData/categories", this.categories.init.bind(this.categories)), _pubsub2.default.subscribe("page/leave", function () {
	      this.subscribe.forEach(function (subscribe) {
	        _pubsub2.default.unsubscribe(subscribe);
	      });
	      this.pomodoras.destroy();
	      this.categories.destroy();
	    }.bind(this))];
	
	    this.dataService.getData('cycleData', "getData/pomodoras");
	    this.dataService.getData('categoriesData', "getData/categories");
	  }
	
	  /**
	   * Initialize page
	   * @method
	   * @memberof SettingsController
	   */
	
	
	  _createClass(Controller, [{
	    key: 'init',
	    value: function init() {
	      this.view.render();
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _settings_tmpl = __webpack_require__(101);
	
	var _settings_tmpl2 = _interopRequireDefault(_settings_tmpl);
	
	var _header_view = __webpack_require__(40);
	
	var _header_view2 = _interopRequireDefault(_header_view);
	
	var _header_controller = __webpack_require__(61);
	
	var _header_controller2 = _interopRequireDefault(_header_controller);
	
	var _header_data = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = __webpack_require__(102);
	
	//Header
	
	/**
	 * Settings page view
	 * Collects components and displays page content
	 * @class SettingsView
	 * @extends View
	 */
	var View = function () {
	    function View() {
	        _classCallCheck(this, View);
	
	        this.template = template;
	    }
	
	    /**
	     * Render template content into parent selector;
	     * @method
	     * @memberof SettingsView
	     * @param {object} data - object with page data
	     * @param {object} options - object with page options
	     * @param {HTMLElement} parent - selector where content might be inserted
	     * context or an element.
	     */
	
	
	    _createClass(View, [{
	        key: 'render',
	        value: function render(data, options, parent) {
	            document.querySelector('body').innerHTML = '';
	
	            var header = new _header_controller2.default(_header_view2.default, _header_data.data, { title: 'Settings', add: true, remove: false });
	            header.init();
	
	            var parentElem = parent || document.querySelector('body');
	
	            parentElem.innerHTML += this.template(data);
	
	            $('.settings-block').tabs();
	        }
	    }]);
	
	    return View;
	}();
	
	exports.default = View;

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Template = function () {
	  function Template() {
	    _classCallCheck(this, Template);
	  }
	
	  _createClass(Template, [{
	    key: "getDom",
	    value: function getDom() {
	      return "\n        <main class=\"clearfix content-wrap settings-block\">\n        \n        <nav class=\"tabs\">\n          <a class=\"tabs__link\" href=\"#tab_1\">Pomodoras</a>|\n          <a class=\"tabs__link\" href=\"#tab_2\">Categories</a></li>\n        </nav>\n        <div id=\"tab_1\" class=\"pomodoras-block tabs__content\">\n        \n        </div>\n        <div id=\"tab_2\" class=\"categories-block tabs__content\">\n        \n        </div>\n      </main>\n    ";
	    }
	  }]);
	
	  return Template;
	}();
	
	exports.default = Template;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<main class=\"clearfix content-wrap settings-block\">\r\n  <nav class=\"tabs\">\r\n    <a class=\"tabs__link\" href=\"#tab_1\">Pomodoras</a>|\r\n    <a class=\"tabs__link\" href=\"#tab_2\">Categories</a></li>\r\n  </nav>\r\n  <div id=\"tab_1\" class=\"pomodoras-block tabs__content\">\r\n  </div>\r\n  <div id=\"tab_2\" class=\"categories-block tabs__content\">\r\n  </div>\r\n</main>";
	},"useData":true});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _taskList_controller = __webpack_require__(104);
	
	var _taskList_controller2 = _interopRequireDefault(_taskList_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tasklist = function tasklist() {
	  var page = new _taskList_controller2.default();
	};
	
	exports.default = tasklist;
	
	//task-item test
	// import taskItem from '../../components/task-item/task-item';
	// taskItem.init();
	// taskItem.init();
	// taskItem.init();
	// taskItem.init();
	// taskItem.init();

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	//Modal
	
	//Main Page Template
	
	//Task Collection
	
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	var _data_service = __webpack_require__(35);
	
	var _data_service2 = _interopRequireDefault(_data_service);
	
	var _modal_controller = __webpack_require__(105);
	
	var _modal_controller2 = _interopRequireDefault(_modal_controller);
	
	var _taskList_view = __webpack_require__(108);
	
	var _taskList_view2 = _interopRequireDefault(_taskList_view);
	
	var _taskCollection_controller = __webpack_require__(110);
	
	var _taskCollection_controller2 = _interopRequireDefault(_taskCollection_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * TaskList page controller
	 * Collects components and trigger events
	 * @class TaskListController
	 * @extends Controller
	 */
	var Controller = function () {
	  function Controller() {
	    var _this = this;
	
	    _classCallCheck(this, Controller);
	
	    this.view = new _taskList_view2.default();
	    this.dataService = new _data_service2.default();
	    this.handlers;
	    this.init();
	    this.body = document.querySelector('body');
	    this.collection = new _taskCollection_controller2.default();
	
	    this.subscribe = [
	    //Рендеринг страницы при первом попадании на неё
	    _pubsub2.default.subscribe("getData/tasks", function (e, data) {
	      if (data === null) {
	        _this.view.showGuide('add');
	      } else {
	        var main = document.querySelector('main');
	        _this.collection.init(main);
	      }
	      for (var key in data) {
	        _this.collection.addTask(data[key]);
	      }
	    }), _pubsub2.default.subscribe("getData/categories", function (e, data) {
	      _this.modal = new _modal_controller2.default(data);
	      _this.collection.setCategories(data);
	    }), _pubsub2.default.subscribe("task/edit", function (e, data) {
	      _this.modal.init('edit', data);
	    }), _pubsub2.default.subscribe("removeTasks/confirm", function () {
	      _this.modal.init('remove');
	    }), _pubsub2.default.subscribe("page/leave", function () {
	      this.subscribe.forEach(function (subscribe) {
	        _pubsub2.default.unsubscribe(subscribe);
	      });
	      window.removeEventListener('click', this.handlers);
	      document.querySelector('body').classList.remove('active-page');
	    }.bind(this))];
	
	    this.dataService.getData('categoriesData', "getData/categories");
	    this.dataService.getData('tasks', "getData/tasks");
	  }
	
	  /**
	   * Set handlers for user interactions with page
	   * bind them on window
	   * @method
	   * @memberof TaskListController
	   */
	
	
	  _createClass(Controller, [{
	    key: 'setListeners',
	    value: function setListeners() {
	      var _this2 = this;
	
	      var handlers = function handlers(e) {
	        //Открытие модального окна
	        if (e.target.classList.contains('link-add-task')) {
	          _this2.modal.init('add', {});
	        }
	        //Подтверждение добавления
	        if (e.target.classList.contains('link-apply-add')) {
	          if (_this2.collection.model.getCollectionData().length == 0) {
	            var main = document.querySelector('main');
	            // document.getElementsByClassName('first_task')[0].remove();
	            _this2.collection.init(main);
	          }
	          var config = _this2.modal.getConfig();
	          _pubsub2.default.publish("task/add", config);
	          _this2.collection.addTask(config);
	          _this2.modal.close();
	        }
	        //Редактирование таска
	        if (e.target.classList.contains('link-edit-task')) {
	          e.preventDefault();
	          var taskId = $($(e.target)[0]).parent().parent()[0].dataset.id;
	          _pubsub2.default.publish("task/getData", taskId);
	        }
	        //Подтверждение редактирования
	        if (e.target.classList.contains('link-apply-edit')) {
	          e.preventDefault();
	          var _config = _this2.modal.getConfig();
	          _pubsub2.default.publish("task/update", _config);
	          _this2.modal.close();
	        }
	        //Удаление таска
	        if (e.target.classList.contains('link-remove-task')) {
	          e.preventDefault();
	          _this2.collection.removeTask(_this2.modal.taskId);
	          _pubsub2.default.publish("task/delete", _this2.modal.taskId);
	          _this2.modal.close();
	        }
	        //Удаление тасков
	        if (e.target.classList.contains('link-remove-tasks')) {
	          e.preventDefault();
	          _pubsub2.default.publish("removeTasks/clicked");
	        }
	        if (e.target.classList.contains('recycle')) {
	          e.preventDefault();
	          _this2.collection.view.selectTaskToRemoveToggle(e.target, 'select');
	        }
	        if (e.target.classList.contains('cancel-remove')) {
	          e.preventDefault();
	          _this2.collection.view.selectTaskToRemoveToggle(e.target, 'deselect');
	        }
	        if (e.target.classList.contains('select-all__tab')) {
	          e.preventDefault();
	          _this2.collection.view.selectAllToRemoveToggle(e.target, 'select');
	        }
	        if (e.target.classList.contains('deselect-all__tab')) {
	          e.preventDefault();
	          _this2.collection.view.selectAllToRemoveToggle(e.target, 'deselect');
	        }
	        //to Daily
	        if (e.target.classList.contains('link-pick-up-task')) {
	          e.preventDefault();
	          var _taskId = $($(e.target)[0]).parent().parent()[0].dataset.id;
	          _pubsub2.default.publish("task/toDaily", _taskId);
	        }
	        //go to timer
	        if (e.target.classList.contains('task-priority__icon-timer')) {
	          e.preventDefault();
	          e.stopPropagation();
	          var _taskId2 = $($(e.target)[0]).parents('.task').data('id');
	          _pubsub2.default.publish("route/timer", _taskId2);
	        }
	      };
	
	      this.handlers = handlers;
	
	      window.addEventListener('click', this.handlers);
	    }
	
	    /**
	     * Initialize page
	     * @method
	     * @memberof TaskListController
	     */
	
	  }, {
	    key: 'init',
	    value: function init() {
	      this.view.render(this.data);
	      this.setListeners();
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _modal_view = __webpack_require__(106);
	
	var _modal_view2 = _interopRequireDefault(_modal_view);
	
	var _data_service = __webpack_require__(35);
	
	var _data_service2 = _interopRequireDefault(_data_service);
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Config = [{
	  "id": 1,
	  "value": "JS"
	}, {
	  "id": 2,
	  "value": "CSS"
	}, {
	  "id": 3,
	  "value": "HTML"
	}, {
	  "id": 4,
	  "value": "SQL"
	}, {
	  "id": 5,
	  "value": "Photoshop"
	}];
	
	/**
	 * Modal component controller
	 * Consist of methods for header interactions
	 * @class ModalController
	 * @param {config} options - object with modal config
	 */
	
	var Controller = function () {
	  function Controller(config) {
	    _classCallCheck(this, Controller);
	
	    this.view = new _modal_view2.default();
	    this.config = config;
	    this.dataService = new _data_service2.default();
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
	
	
	  _createClass(Controller, [{
	    key: 'close',
	    value: function close() {
	      this.modal.removeEventListener('click', this.handlers);
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
	
	  }, {
	    key: 'getConfig',
	    value: function getConfig() {
	      var title = $('#task-title')[0].value;
	      var desc = $('#task-description')[0].value;
	      var deadline = $('#task-deadline')[0].value;
	      var category = $('.category-input:radio:checked')[0].id.match(/[0-9]$/g)[0];
	      var estimation = $('.estimation-input:radio:checked')[0].id.match(/[0-9]$/g)[0];
	      var priority = $('.priority-input:radio:checked')[0].id.match(/--.*/g)[0].slice(2);
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
	      };
	    }
	
	    /**
	     * Set handlers for user interactions with component
	     * bind them on window
	     * @method
	     * @memberof ModalController
	     */
	
	  }, {
	    key: 'setListeners',
	    value: function setListeners() {
	      var _this = this;
	
	      $(this.modal).submit(function () {
	        return false;
	      });
	
	      var handlers = function handlers(e) {
	        if (e.target.classList.contains('link-cancel-edit')) {
	          _this.close();
	        }
	        if (e.target.classList.contains('cancel-button')) {
	          _this.close();
	          _pubsub2.default.publish("modal/cancelButton:clicked");
	        }
	        if (e.target.classList.contains('remove-button')) {
	          _this.close();
	          _pubsub2.default.publish("modal/removeButton:clicked");
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
	
	  }, {
	    key: 'init',
	    value: function init(type, options) {
	      options ? this.taskId = options.id : null;
	      this.view.render(type, options, this.config);
	      this.modal = document.getElementsByClassName('modal-window')[0];
	      this.setListeners();
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _modal_tmpl = __webpack_require__(107);
	
	var _modal_tmpl2 = _interopRequireDefault(_modal_tmpl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Modal component view
	 * Consist of methods for header interactions
	 * @class ModalView
	 */
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.template = new _modal_tmpl2.default();
	  }
	
	  /**
	   * Render template content into parent selector;
	   * @method
	   * @memberof ModalView
	   * @param {string} type - type of modal window
	   * @param {object} options - object with component options
	   * @param {object} config - component configuration
	   */
	
	
	  _createClass(View, [{
	    key: 'render',
	    value: function render(type, options, config) {
	      var body = document.querySelector('body');
	      $(this.template.getDom(type, options, config)).appendTo(body);
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var priority = [{
	  name: 'urgent',
	  title: 'Urgent'
	}, {
	  name: 'high',
	  title: 'High'
	}, {
	  name: 'middle',
	  title: 'Middle'
	}, {
	  name: 'low',
	  title: 'Low'
	}];
	
	var Template = function () {
	  function Template() {
	    _classCallCheck(this, Template);
	  }
	
	  _createClass(Template, [{
	    key: 'getDom',
	    value: function getDom(type, options, config) {
	      $('body').dialog();
	      var overlay = $('.modal-overlay');
	      var title = type.charAt(0).toUpperCase() + type.substr(1);
	      var strDom = '\n    <form class="' + type + '-task-modal modal-window">\n        <div class="modal-controls">';
	      if (type == 'remove') {
	        strDom += '<a class="modal-control link-cancel-edit icomoon">&#xe910;</a>';
	      } else if (type == 'edit') {
	        strDom += '<button class="modal-control link-remove-task icomoon">&#xe912;</button>\n        <button class="modal-control link-apply-edit icomoon">&#xe90f;</button>\n        <a class="modal-control link-cancel-edit icomoon">&#xe910;</a>';
	      } else {
	        strDom += '<button class="modal-control link-apply-add icomoon">&#xe90f;</button>\n        <a class="modal-control link-cancel-edit icomoon">&#xe910;</a>';
	      }
	      strDom += '</div><div class="modal-inner">\n        <h2 class="modal-header">' + title + ' Task</h2>';
	      if (type == 'remove') {
	        strDom += '<p class="remove-message">Are you sure you want to remove selected task(s)?</p>\n          <div class="settings-controls">\n            <button class="cancel-button controls-button button button--small button--red">Cancel</button>\n            <button class="remove-button controls-button button button--small button--green">Remove</button>\n          </div>\n        </div>\n      </div>';
	        overlay.html(strDom);
	        return overlay;
	      } else {
	        strDom += '\n        <div class="modal-option">\n          <label for="task-title" class="modal-label">Title</label><br>\n          <input type="text" class="modal-input" id="task-title" placeholder="Add title here" value="' + (options.title ? '' + options.title : '') + '" required/>\n        </div>\n         \n        <div class="modal-option">\n          <label for="task-description" class="modal-label">Description</label><br>\n          <input type="text" class="modal-input" id="task-description" placeholder="Add descripttion here" value="' + (options.desc ? '' + options.desc : '') + '" required/>\n        </div>\n        <div class="modal-option">\n          <label class="modal-label">Category</label><br>\n          <ul class="categories-list">';
	
	        for (var i = 0; i < config.length; i++) {
	          strDom += '\n        <li class="categories-item radio-li">\n            <input id="category--' + config[i].id + '" name="category" type="radio" class="category-input radio-button" ' + (options.category == i + 1 ? 'checked' : '') + '>\n            <label for="category--' + config[i].id + '" class="category-name radio-label">' + config[i].value + '</label>\n        </li>\n        ';
	        }
	
	        strDom += '</ul></div>\n        <div class="modal-option">\n          <label for="task-deadline" class="modal-label">Deadline</label><br>\n          <input type="date" class="modal-input" id="task-deadline" value="' + (options.deadline ? '' + options.deadline : '') + '" required>\n        </div>\n        <div class="modal-option">\n          <label class="modal-label">Estimation</label><br>\n          <div class="estimation-wrap">\n          <div class="pomadoras-list">\n      ';
	
	        for (var _i = 5; _i != 0; _i--) {
	          strDom += '<input class="radio-hidden estimation-input" id="est' + _i + '" type="radio" name="estimation" ' + (options.estimation == _i ? 'checked' : '') + '>\n                   <label class="pomadoras-label" for="est' + _i + '"></label>';
	        }
	
	        strDom += '</div></div></div>\n         <div class="modal-option">\n            <label class="modal-label">Priority</label><br>\n            <ul class="categories-list">';
	
	        for (var _i2 = 0; _i2 < priority.length; _i2++) {
	          strDom += '\n         <li class="categories-item radio-li">            <input id="priority--' + priority[_i2].name + '" name="priority" type="radio" class="radio-button priority-input" ' + (priority[_i2].name == options.priority ? 'checked' : '') + '>\n            <label for="priority--' + priority[_i2].name + '" class="category-name radio-label">' + priority[_i2].title + '</label>\n         </li>';
	        }
	
	        strDom += '</ul></div></form></div>';
	        overlay.html(strDom);
	        return overlay;
	      }
	    }
	  }]);
	
	  return Template;
	}();
	
	// let type = 'add' || 'edit' || 'remove';
	
	
	exports.default = Template;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _header_view = __webpack_require__(40);
	
	var _header_view2 = _interopRequireDefault(_header_view);
	
	var _header_controller = __webpack_require__(61);
	
	var _header_controller2 = _interopRequireDefault(_header_controller);
	
	var _header_data = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import Template from './task-list_tmpl';
	var template = __webpack_require__(109);
	//Header
	
	/**
	 * TaskList page view
	 * Collects components and displays page content
	 * @class TaskListView
	 * @extends View
	 */
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.template = template;
	  }
	
	  /**
	   * Show guide for user to help him with page interactions;
	   * @method
	   * @memberof TaskListView
	   * @param {string} str - option which describe guide name
	   */
	
	
	  _createClass(View, [{
	    key: 'showGuide',
	    value: function showGuide(str) {
	      var container = document.getElementsByClassName('guide')[0];
	      var message = document.createElement('div');
	      if (str == 'add') {
	        message.classList.add('first_task');
	        message.innerHTML = '\n          <span class="icomoon">&#xe901;</span>\n          <h2 class="guide-message">Add your first task</h2>';
	      }
	
	      container.appendChild(message);
	    }
	
	    /**
	     * Render template content into parent selector;
	     * @method
	     * @memberof TaskListView
	     * @param {object} data - object with page data
	     * @param {HTMLElement} parent - selector where content might be inserted
	     */
	
	  }, {
	    key: 'render',
	    value: function render(data, parent) {
	      document.querySelector('body').innerHTML = '';
	
	      var header = new _header_controller2.default(_header_view2.default, _header_data.data, { title: 'Daily Task List', tasklist: true, add: true, remove: true });
	      header.init();
	
	      var parentElem = parent || document.querySelector('body');
	
	      parentElem.innerHTML += this.template();
	      document.querySelector('body').classList.add('active-page');
	      $('.has-tooltip').tooltip();
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<main class=\"task-list-block clearfix content-wrap\">\r\n  <div class=\"guide\"></div>\r\n</main>";
	},"useData":true});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _taskCollection_view = __webpack_require__(111);
	
	var _taskCollection_view2 = _interopRequireDefault(_taskCollection_view);
	
	var _taskCollection_model = __webpack_require__(120);
	
	var _taskCollection_model2 = _interopRequireDefault(_taskCollection_model);
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * TaskCollection component controller
	 * Consist of methods for header interactions
	 * @class TaskCollectionController
	 */
	var Collection = function () {
	  function Collection() {
	    var _this = this;
	
	    _classCallCheck(this, Collection);
	
	    this.view = new _taskCollection_view2.default();
	    this.model = new _taskCollection_model2.default();
	    this.handlers;
	
	    this.subscribe = [_pubsub2.default.subscribe("task/getData", function (e, data) {
	      _pubsub2.default.publish("task/edit", _this.model.getTaskData(data));
	    }), _pubsub2.default.subscribe("task/update", function (e, data) {
	      _this.model.update(data);
	    }), _pubsub2.default.subscribe("task/toDaily", function (e, data) {
	      _this.view.toDaily(_this.model.getTaskData(data));
	    }), _pubsub2.default.subscribe("removeTasks/apply", function (e, data) {
	      data.forEach(function (id) {
	        _this.removeTask(id);
	      });
	    }), _pubsub2.default.subscribe("page/leave", function () {
	      this.subscribe.forEach(function (subscribe) {
	        _pubsub2.default.unsubscribe(subscribe);
	      });
	      window.removeEventListener('click', this.handlers);
	    }.bind(this))];
	  }
	
	  /**
	   * Add new task into collection
	   * @method
	   * @memberof TaskCollectionController
	   * @param {object[]} data - task data
	   * @param {string} data[].id - task id
	   * @param {string} data[].title - task title
	   * @param {number} data[].category - task category id
	   * @param {string} data[].deadline - task deadline
	   * @param {number} data[].estimation - task estimation
	   * @param {string} data[].priority - task priority
	   * @param {boolean} data[].daily - is task daily
	   * @param {boolean} data[].done - is task done
	   */
	
	
	  _createClass(Collection, [{
	    key: 'addTask',
	    value: function addTask(data) {
	
	      var collectionData = this.model.getCollectionData();
	
	      var dailyList = $('.daily-list .task-list')[0];
	
	      if (data.daily) {
	        this.view.addTask(data, dailyList);
	      } else {
	
	        var isGlobalNotEmpty = void 0;
	
	        isGlobalNotEmpty = collectionData.some(function (task) {
	          return task.daily !== false;
	        });
	
	        if (!isGlobalNotEmpty) {
	          this.view.addCategory(true, false, this.getCategory(data.category));
	        } else {
	          this.view.addCategory(false, this.isCategoryUsed(data.category), this.getCategory(data.category));
	        }
	
	        var categoryContainer = $('.category--' + data.category + ' .task-list')[0];
	        this.view.addTask(data, categoryContainer);
	      }
	    }
	
	    /**
	     * Remove task from collection
	     * @method
	     * @memberof TaskCollectionController
	     * @param {string} taskId - task id
	     */
	
	  }, {
	    key: 'removeTask',
	    value: function removeTask(taskId) {
	      this.model.removeTask(taskId);
	    }
	
	    /**
	     * Set's categories configuration into collection
	     * @param {object[]} categories - array of categories configs
	     * @memberof TaskCollectionController
	     */
	
	  }, {
	    key: 'setCategories',
	    value: function setCategories(categories) {
	      this.model.categories = categories;
	    }
	
	    /**
	     * Get category by id
	     * @param {number} id - category id
	     * @memberof TaskCollectionController
	     */
	
	  }, {
	    key: 'getCategory',
	    value: function getCategory(id) {
	      return this.model.categories.filter(function (category) {
	        return category.id === +id;
	      })[0];
	    }
	
	    /**
	     * Returns true if category already used / false if not
	     * @param id
	     * @returns {boolean}
	     * @memberof TaskCollectionController
	     */
	
	  }, {
	    key: 'isCategoryUsed',
	    value: function isCategoryUsed(id) {
	      return this.model.getCollectionData().some(function (task) {
	        return task.category == id && !task.daily;
	      });
	    }
	  }, {
	    key: 'setListeners',
	    value: function setListeners() {
	      var handlers = function handlers(e) {
	        if ($(e.target).data('filter-role') === 'filter') {
	          e.stopPropagation();
	          var category = $(e.target).data('filter-category');
	          $(e.target).siblings().removeClass('tabs__link--active');
	          $(e.target).addClass('tabs__link--active');
	          var status = $('.status-tabs .tabs__link--active').data('filter-status');
	          _pubsub2.default.publish('filter/changed', { category: category, status: status });
	        }
	      };
	
	      this.handlers = handlers;
	      window.addEventListener('click', this.handlers);
	    }
	
	    /**
	     * Initialize component
	     * @method
	     * @memberof TaskCollectionController
	     */
	
	  }, {
	    key: 'init',
	    value: function init(parent) {
	      this.view.render(parent);
	      this.setListeners();
	    }
	  }]);
	
	  return Collection;
	}();
	
	exports.default = Collection;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _taskItem_controller = __webpack_require__(112);
	
	var _taskItem_controller2 = _interopRequireDefault(_taskItem_controller);
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import Template from './task-collection_tmpl';
	var template = __webpack_require__(117);
	var globalListTemplate = __webpack_require__(118);
	var categoryTemplate = __webpack_require__(119);
	
	var taskController = _taskItem_controller2.default;
	
	/**
	 * TaskCollection component view
	 * Consist of methods for TaskCollection rendering
	 * @class TaskCollectionView
	 */
	
	var View = function () {
	  function View() {
	    var _this = this;
	
	    _classCallCheck(this, View);
	
	    this.taskItem = taskController;
	    this.template = template;
	    this.globalListTemplate = globalListTemplate;
	    this.categoryTemplate = categoryTemplate;
	    this.container = null;
	    this.globalContainer = null;
	    this.dailyContainer = null;
	    this.tasksIdArray = [];
	
	    this.subscribe = [_pubsub2.default.subscribe('task/removed', function (e, data) {
	      _this.checkAndRemove(data);
	    }), _pubsub2.default.subscribe('filter/changed', function (e, data) {
	      _this.filterTasks(data.status, data.category);
	    }), _pubsub2.default.subscribe("removeTasks/active", function () {
	      _this.toggleRemoveMode('active');
	    }), _pubsub2.default.subscribe("modal/removeButton:clicked", function () {
	      _pubsub2.default.publish('removeTasks/apply', _this.getCurrentTasksToRemove());
	    }), _pubsub2.default.subscribe("modal/cancelButton:clicked", function () {
	      _this.toggleRemoveMode('cancel');
	    }), _pubsub2.default.subscribe("page/leave", function () {
	      this.subscribe.forEach(function (subscribe) {
	        _pubsub2.default.unsubscribe(subscribe);
	      });
	    }.bind(this))];
	  }
	
	  _createClass(View, [{
	    key: 'addTask',
	    value: function addTask(data, parent) {
	      var newTask = new this.taskItem(data, parent);
	      _pubsub2.default.publish('collection/add', newTask);
	    }
	
	    /**
	     * Render new category
	     * @param {boolean} isFirst - is this category first in global list
	     * @param {boolean} isUsed - is this category already rendered
	     * @param {string} category - category name
	     * @memberof TaskCollectionView
	     */
	
	  }, {
	    key: 'addCategory',
	    value: function addCategory(isFirst, isUsed, category) {
	      if (isFirst) {
	        this.container.innerHTML += this.globalListTemplate();
	        $('.global-list').accordion();
	        this.globalContainer = this.container.getElementsByClassName('global-list__list')[0];
	      }
	      if (!isUsed) {
	        document.getElementsByClassName('global-list__list')[0].innerHTML += this.categoryTemplate({ category: category });
	      }
	    }
	
	    /**
	     * Check is category empty and remove this if it's true
	     * @param {string} category - category name
	     * @memberof TaskCollectionView
	     */
	
	  }, {
	    key: 'checkAndRemove',
	    value: function checkAndRemove(category) {
	      var categoryList = $('.global-list .category--' + category)[0];
	      $(categoryList).children('.task-list').children().length == 0 ? categoryList.remove() : null;
	    }
	  }, {
	    key: 'correctCategories',
	    value: function correctCategories(elemList) {
	      for (var i = 0; i < elemList.length; i++) {
	        if ($(elemList[i]).parent().children(':visible').length === 0) {
	          $(elemList[i]).parents('.global-list__item').hide();
	        } else {
	          $(elemList[i]).parents('.global-list__item').show();
	        }
	      }
	    }
	  }, {
	    key: 'filterTasks',
	    value: function filterTasks(status, category) {
	
	      var mode = void 0;
	      var filter = void 0;
	      var tasksToShow = void 0;
	      var tasksToHide = void 0;
	
	      $('.global-list__item').show();
	
	      if (category) {
	        mode = '.global-list__item ';
	        filter = category;
	        tasksToHide = $(mode + '*[data-filter-role="item"]');
	      } else {
	        mode = '';
	        filter = $('.priority-tabs .tabs__link--active').data('filter-category');
	        if (status === 'todo') {
	          tasksToHide = $('.task-groups__item:not(.daily-list) ' + mode + '*[data-filter-role="item"]');
	        } else {
	          tasksToHide = $(mode + '*[data-filter-role="item"]');
	        }
	      }
	
	      if (status == 'todo') {
	        tasksToShow = $(mode + '*[data-filter-value=' + filter + ']:not(.task--done)');
	      } else {
	        tasksToShow = $(mode + '*[data-filter-value=' + filter + '].task--done');
	      }
	      if (filter === 'all' && status == 'todo') {
	        tasksToHide = $(mode + '*[data-filter-role="item"]:not(.task--done)');
	        tasksToShow = $(mode + '*[data-filter-role="item"].task--done');
	        tasksToShow.hide();
	        tasksToHide.show();
	        this.correctCategories(tasksToShow);
	        return;
	      } else if (filter === 'all' && status == 'done') {
	        tasksToHide = $(mode + '*[data-filter-role="item"].task--done');
	        $(mode + '*[data-filter-role="item"]:not(.task--done)').hide();
	        tasksToHide.show();
	        this.correctCategories($(mode + '*[data-filter-role="item"]:not(.task--done)'));
	        return;
	      }
	
	      tasksToHide.hide();
	      tasksToShow.show();
	
	      this.correctCategories(tasksToHide);
	    }
	  }, {
	    key: 'toDaily',
	    value: function toDaily(data) {
	      var config = data;
	      config.daily = true;
	      config.deadline = new Date().toString().slice(0, 15);
	      var task = $('*[data-id=' + config.id + ']');
	      var taskCategoryElem = task.parents('.global-list__item');
	      task.remove();
	      new this.taskItem(config, $('.daily-list .task-list')[0]);
	      if (task.parent('.task-list').find('.task').length === 0) {
	        taskCategoryElem.remove();
	      }
	      _pubsub2.default.publish("task/update", config);
	    }
	  }, {
	    key: 'selectAllToRemoveToggle',
	    value: function selectAllToRemoveToggle(target, action) {
	      var $target = $(target);
	
	      if (action === 'select') {
	        if ($target.parents('.daily-list').length) {
	          $('.daily-list .task:visible .trash').addClass('in-recycle');
	        } else if ($target.parents('.global-list').length) {
	          $('.global-list .task:visible .trash').addClass('in-recycle');
	        }
	      } else if (action === 'deselect') {
	        if ($target.parents('.daily-list').length) {
	          $('.daily-list .task:visible .trash').removeClass('in-recycle');
	        } else if ($target.parents('.global-list').length) {
	          $('.global-list .task:visible .trash').removeClass('in-recycle');
	        }
	      }
	
	      _pubsub2.default.publish("removeCounter/set", this.getCurrentRemoveCount());
	    }
	  }, {
	    key: 'getCurrentRemoveCount',
	    value: function getCurrentRemoveCount() {
	      return $('.in-recycle').length;
	    }
	  }, {
	    key: 'getCurrentTasksToRemove',
	    value: function getCurrentTasksToRemove() {
	      var tasks = $('.in-recycle').parent('.task');
	      for (var i = 0; i < tasks.length; i++) {
	        this.tasksIdArray.push(tasks[i].dataset.id);
	      }
	      return this.tasksIdArray;
	    }
	  }, {
	    key: 'selectTaskToRemoveToggle',
	    value: function selectTaskToRemoveToggle(target, action) {
	      var $target = $(target);
	      if (action === 'select') {
	        $target.parent().addClass('in-recycle');
	      } else if (action === 'deselect') {
	        $target.parent().removeClass('in-recycle');
	      }
	
	      _pubsub2.default.publish("removeCounter/set", this.getCurrentRemoveCount());
	    }
	  }, {
	    key: 'toggleRemoveMode',
	    value: function toggleRemoveMode(mode) {
	      if (mode === 'active') {
	        $('.task-groups-list').addClass('remove--active');
	      }
	      if (mode === 'cancel') {
	        $('.task-groups-list').removeClass('remove--active');
	        $('.in-recycle').removeClass('in-recycle');
	        this.tasksIdArray = [];
	      }
	    }
	
	    /**
	     * Render collection template into parent selector;
	     * @method
	     * @memberof TaskCollectionView
	     * @param {HTMLElement} parent - selector where content might be inserted
	     */
	
	  }, {
	    key: 'render',
	    value: function render(parent) {
	      var _this2 = this;
	
	      var parentElem = parent || document.querySelector('main');
	      parentElem.innerHTML += this.template();
	      this.container = document.getElementsByClassName('global-list')[0];
	      $('.has-tooltip').tooltip();
	      setTimeout(function () {
	        _this2.filterTasks('todo', 'all');
	      }, 0);
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _taskItem_view = __webpack_require__(113);
	
	var _taskItem_view2 = _interopRequireDefault(_taskItem_view);
	
	var _taskItem_model = __webpack_require__(116);
	
	var _taskItem_model2 = _interopRequireDefault(_taskItem_model);
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * TaskItem component controller
	 * Consist of methods for header interactions
	 * @class TaskItemController
	 * @param {object} data - object with header data
	 * @param {HTMLElement} parent - parent element
	 */
	var Controller = function () {
	  function Controller(data, parent) {
	    var _this = this;
	
	    _classCallCheck(this, Controller);
	
	    this.view = new _taskItem_view2.default();
	    this.model = new _taskItem_model2.default(data);
	    this.view.render(this.model.getData(), parent);
	    this.subscribe = [_pubsub2.default.subscribe("task/" + this.model.data.id + "/updated", function (e, data) {
	      _this.view.update(data);
	    }), _pubsub2.default.subscribe("page/leave", function () {
	      this.subscribe.forEach(function (subscribe) {
	        _pubsub2.default.unsubscribe(subscribe);
	      });
	    }.bind(this))];
	  }
	
	  /**
	   * Destroy task item
	   * @method
	   * @memberof TaskItemController
	   */
	
	
	  _createClass(Controller, [{
	    key: 'destroy',
	    value: function destroy() {
	      $('[data-id=' + this.model.data.id + ']')[0].remove();
	      // pubsub.publish('')
	    }
	  }]);
	
	  return Controller;
	}();
	
	exports.default = Controller;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _taskItem_tmpl = __webpack_require__(114);
	
	var _taskItem_tmpl2 = _interopRequireDefault(_taskItem_tmpl);
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = __webpack_require__(115);
	
	/**
	 * TaskItem component view
	 * Consist of methods for TaskItem rendering
	 * @class TaskItemView
	 */
	
	var View = function () {
	  function View() {
	    _classCallCheck(this, View);
	
	    this.template = template;
	    this.elem = null;
	
	    // this.subscribe = [
	    //   pubsub.subscribe("page/leave", function () {
	    //     this.subscribe.forEach(function (subscribe) {
	    //       pubsub.unsubscribe(subscribe);
	    //     });
	    //     window.removeEventListener('click', this.handlers);
	    //   }.bind(this))
	    // ];
	  }
	
	  /**
	   * Set's params(classes) to task view
	   * @param {HTMLElement} elem - task element
	   * @param {object} obj - task parameters
	   * @memberof TaskItemView
	   */
	
	
	  _createClass(View, [{
	    key: 'setProps',
	    value: function setProps(elem, obj) {
	      var selector = $(elem);
	      selector.removeClass();
	      selector.addClass('task category--' + obj.category + ' priority--' + obj.priority + ' clearfix');
	      if (obj.done) {
	        selector.addClass('task--done');
	      }
	      selector.attr('data-is-done', obj.done);
	      selector.attr('data-id', obj.id);
	      selector.attr('data-filter-role', 'item');
	      selector.attr('data-filter-value', obj.priority);
	    }
	
	    /**
	     * Get dom structure from task template
	     * @param {object} obj - task parameters
	     * @memberof TaskItemView
	     */
	
	  }, {
	    key: 'getDom',
	    value: function getDom(obj) {
	
	      var elem = document.createElement('li');
	      this.setProps(elem, obj);
	      elem.innerHTML = this.template({ obj: obj });
	
	      return elem;
	    }
	  }, {
	    key: 'dateTranslate',
	    value: function dateTranslate(data) {
	      var today = new Date().toString();
	      var date = new Date(data.deadline).toString();
	
	      if (today.slice(0, 15) === date.slice(0, 15) && data.daily) {
	        return false;
	      }
	      var dateArr = date.split(' ');
	      var day = dateArr[2];
	      var month = dateArr[1];
	      return {
	        day: day,
	        month: month
	      };
	    }
	
	    // setListeners(){
	    //
	    //   let handlers = (e) => {
	    //     if (e.target.classList.contains('trash')) {
	    //       e.preventDefault();
	    //       console.log('bla-bla');
	    //     }
	    //   };
	    //
	    //   this.handlers = handlers;
	    //
	    //   window.addEventListener('click', this.handlers);
	    //
	    // }
	
	    /**
	     * Renders task template into parent category selector;
	     * @method
	     * @memberof TaskItemView
	     * @param {object} data - task data
	     * @param {HTMLElement} parent - selector where content might be inserted
	     */
	
	  }, {
	    key: 'render',
	    value: function render(data, parent) {
	      var config = data;
	      config.date = this.dateTranslate(data);
	      parent.appendChild(this.getDom(config));
	      this.elem = parent.lastElementChild;
	      $('.has-tooltip').tooltip();
	    }
	
	    /**
	     * Updates task view
	     * @method
	     * @memberof TaskItemView
	     * @param {object} data - task data
	     */
	
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var taskElem = $('*[data-id=' + data.id + ']')[0];
	      this.setProps(taskElem, data);
	      taskElem.innerHTML = this.template({ obj: data });
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Template = function () {
	  function Template() {
	    _classCallCheck(this, Template);
	  }
	
	  _createClass(Template, [{
	    key: 'getDom',
	    value: function getDom(obj) {
	
	      var elem = document.createElement('li');
	      this.setProps(elem, obj);
	      elem.innerHTML = this.generateDom(obj);
	
	      return elem;
	    }
	  }, {
	    key: 'setProps',
	    value: function setProps(elem, obj) {
	      var selector = $(elem);
	      selector.removeClass();
	      selector.addClass('task category--' + obj.category + ' priority--' + obj.priority + ' clearfix');
	      selector.attr('data-id', obj.id);
	    }
	  }, {
	    key: 'generateDom',
	    value: function generateDom(obj) {
	      return '\n      <div class="trash icomoon">\n        <span class="recycle">&#xe912;</span>\n        <span class="cancel-remove">&#xe910;</span>\n      </div>\n      \n      <div class="task-date">\n        <span class="task-date__day">' + obj.deadline + '</span>\n      </div>\n\n      <section class="task-info">\n        <h5 class="task-name">' + obj.title + '</h5>\n        <p class="task-description">' + obj.desc + '</p>\n      </section>\n  \n      <a href="#timer" class="task-priority clearfix has-tooltip" title="Go to Timer">\n        <span class="task-priority__icon-tomato icomoon">&#xe90e;</span>\n        <span class="task-priority__icon-timer icomoon">&#xe90d;</span>\n        <span class="task-priority__value">' + obj.estimation + '</span>\n      </a>\n  \n      <div class="task-controls">\n        ' + (!obj.isDaily ? '<a href="#" class="link-pick-up-task controls-btn icomoon">&#xe904;</a>' : '') + '\n        <a href="#" class="link-edit-task controls-btn icomoon has-tooltip" title="Edit task">&#xe905;</a>\n      </div>\n    ';
	    }
	  }]);
	
	  return Template;
	}();
	
	exports.default = Template;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "    <span class=\"task-date__day\">"
	    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.date : stack1)) != null ? stack1.day : stack1), depth0))
	    + "</span>\r\n    <span class=\"task-date__month\">"
	    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.date : stack1)) != null ? stack1.month : stack1), depth0))
	    + "</span>\r\n";
	},"3":function(container,depth0,helpers,partials,data) {
	    return "    Today\r\n";
	},"5":function(container,depth0,helpers,partials,data) {
	    return "    <a href=\"#\" class=\"link-pick-up-task controls-btn icomoon\">&#xe904;</a>\r\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;
	
	  return "<div class=\"trash icomoon\">\r\n  <span class=\"recycle\">&#xe912;</span>\r\n  <span class=\"cancel-remove\">&#xe910;</span>\r\n</div>\r\n\r\n<div class=\"task-date\">\r\n"
	    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.date : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
	    + "</div>\r\n\r\n<section class=\"task-info\">\r\n  <h5 class=\"task-name\">"
	    + alias3(alias2(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.title : stack1), depth0))
	    + "</h5>\r\n  <p class=\"task-description\">"
	    + alias3(alias2(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.desc : stack1), depth0))
	    + "</p>\r\n</section>\r\n\r\n<a href=\"\" class=\"task-priority clearfix has-tooltip\" title=\"Go to Timer\">\r\n  <span class=\"task-priority__icon-tomato icomoon\">&#xe90e;</span>\r\n  <span class=\"task-priority__icon-timer icomoon\">&#xe90d;</span>\r\n  <span class=\"task-priority__value\">"
	    + alias3(alias2(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.estimation : stack1), depth0))
	    + "</span>\r\n</a>\r\n\r\n<div class=\"task-controls\">\r\n"
	    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.isDaily : stack1),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\r\n  <a href=\"#\" class=\"link-edit-task controls-btn icomoon has-tooltip\" title=\"Edit task\">&#xe905;</a>\r\n</div>";
	},"useData":true});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * TaskItem component model
	 * Consist of methods for TaskCollection data
	 * @class TaskItemModel
	 */
	var Model = function () {
	  function Model(data) {
	    _classCallCheck(this, Model);
	
	    this.data = data;
	  }
	
	  /**
	   * Returns task data
	   * @method
	   * @returns {object} - task data
	   * @memberof TaskItemModel
	   */
	
	
	  _createClass(Model, [{
	    key: 'getData',
	    value: function getData() {
	      return this.data;
	    }
	
	    /**
	     * Updates task item
	     * @method
	     * @memberof TaskItemModel
	     * @param {object} data - task data
	     */
	
	  }, {
	    key: 'update',
	    value: function update(data) {
	      for (var key in this.data) {
	        this.data[key] !== data[key] ? this.data[key] = data[key] : null;
	      }
	      _pubsub2.default.publish('task/' + data.id + '/updated', this.data);
	    }
	  }]);
	
	  return Model;
	}();
	
	exports.default = Model;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<ul class=\"task-groups-list\">\r\n\r\n  <div class=\"task-groups-list__tabs tabs status-tabs\">\r\n    <a href=\"#\" class=\"tabs__link tabs__link--active\" data-filter-role=\"filter\" data-filter-status=\"todo\">To Do</a>\r\n    |<a href=\"#\" class=\"tabs__link\" data-filter-role=\"filter\" data-filter-status=\"done\">Done</a>\r\n  </div>\r\n\r\n  <li class=\"task-groups__item daily-list\">\r\n    <ul class=\"task-list\">\r\n      <div class=\"select__tabs\">\r\n        <a href=\"#\" class=\"tabs__link select-all__tab\">Select All</a>\r\n        |<a href=\"#\" class=\"tabs__link deselect-all__tab\">Deselect All</a>\r\n      </div>\r\n    </ul>\r\n  </li>\r\n\r\n  <li class=\"task-groups__item global-list\"></li>\r\n\r\n</ul>";
	},"useData":true});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<a href=\"#\" class=\"global_list link--active has-tooltip\" data-accordion-role=\"control\" title=\"Go to Global List\">Global list\r\n  <span class=\"icon-global-list-arrow-right global-list-arrow icomoon\"></span>\r\n  <span class=\"icon-global-list-arrow-down global-list-arrow icomoon\"></span>\r\n</a>\r\n\r\n<div class=\"global-list__tabs priority-tabs tabs\">\r\n  <a href=\"#\" class=\"tabs__link tabs__link--active\" data-filter-role=\"filter\" data-filter-category=\"all\">All</a>\r\n  |<a href=\"#\" class=\"tabs__link\" data-filter-role=\"filter\" data-filter-category=\"urgent\">Urgent</a>\r\n  |<a href=\"#\" class=\"tabs__link\" data-filter-role=\"filter\" data-filter-category=\"high\">High</a>\r\n  |<a href=\"#\" class=\"tabs__link\" data-filter-role=\"filter\" data-filter-category=\"middle\">Middle</a>\r\n  |<a href=\"#\" class=\"tabs__link\" data-filter-role=\"filter\" data-filter-category=\"low\">Low</a>\r\n</div>\r\n\r\n<ul class=\"global-list__list\" data-accordion-role=\"content\">\r\n  <div class=\"select__tabs tabs\">\r\n    <a href=\"#\" class=\"tabs__link select-all__tab\">Select All</a>\r\n    |<a href=\"#\" class=\"tabs__link deselect-all__tab\">Deselect All</a>\r\n  </div>\r\n</ul>";
	},"useData":true});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(42);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
	
	  return "<li class=\"global-list__item category--"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.id : stack1), depth0))
	    + "\">\r\n  <h4 class=\"category-header\">"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.value : stack1), depth0))
	    + "</h4>\r\n  <ul class=\"task-list\"></ul>\r\n</li>";
	},"useData":true});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _pubsub = __webpack_require__(34);
	
	var _pubsub2 = _interopRequireDefault(_pubsub);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * TaskCollection component model
	 * Consist of methods for TaskCollection data
	 * @class TaskCollectionModel
	 */
	var Model = function () {
	  function Model() {
	    var _this = this;
	
	    _classCallCheck(this, Model);
	
	    this.collection = [];
	    this.categories = [];
	    this.subscribe = [_pubsub2.default.subscribe('collection/add', function (e, data) {
	      _this.addToCollection(data);
	    })];
	  }
	
	  /**
	   * Add new task instance to collection
	   * @method
	   * @param {object} instance - task instance
	   * @memberof TaskCollectionModel
	   */
	
	
	  _createClass(Model, [{
	    key: 'addToCollection',
	    value: function addToCollection(instance) {
	      this.collection.push(instance);
	    }
	
	    /**
	     * Returns collection data
	     * @method
	     * @returns {object} - collection data
	     * @memberof TaskCollectionModel
	     */
	
	  }, {
	    key: 'getCollectionData',
	    value: function getCollectionData() {
	      return this.collection.map(function (task) {
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
	
	  }, {
	    key: 'getTaskData',
	    value: function getTaskData(id) {
	      return this.getCollectionData().filter(function (task) {
	        return task.id === id;
	      })[0];
	    }
	
	    /**
	     * Updates task collection
	     * @method
	     * @memberof TaskCollectionModel
	     * @param {object} data - task collection data
	     */
	
	  }, {
	    key: 'update',
	    value: function update(data) {
	      this.collection.forEach(function (task) {
	        task.model.data.id == data.id ? task.model.update(data) : null;
	      });
	    }
	
	    /**
	     * Remove task from collection
	     * @method
	     * @memberof TaskCollectionModel
	     * @param {string} id - task id
	     */
	
	  }, {
	    key: 'removeTask',
	    value: function removeTask(id) {
	      for (var i = 0; i < this.collection.length; i++) {
	        if (this.collection[i].model.data.id == id) {
	          this.collection[i].destroy();
	          _pubsub2.default.publish('task/removed', this.collection[i].model.data.category);
	          this.collection.splice(i, 1);
	          break;
	        }
	      }
	    }
	  }]);
	
	  return Model;
	}();
	
	exports.default = Model;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _timer_controller = __webpack_require__(38);
	
	var _timer_controller2 = _interopRequireDefault(_timer_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var timer = function timer() {
	  new _timer_controller2.default();
	}; //Main Page Template
	exports.default = timer;

/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = exports.data = {
	  category: "5",
	  desc: "lorem ipsum",
	  estimation: 5,
	  title: "Test Timer Task"
	};
	
	var config = exports.config = [{
	  name: "Work time",
	  value: "25 min"
	}, {
	  name: "Work iteration",
	  value: "5"
	}, {
	  name: "Short Break",
	  value: "15 min"
	}, {
	  name: "Long Break",
	  value: "55 min"
	}];

/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import './timer_style.css';
	
	var Template = function () {
	  function Template() {
	    _classCallCheck(this, Template);
	  }
	
	  _createClass(Template, [{
	    key: "getDom",
	    value: function getDom(obj, config) {
	      var strDom = "\n   <main class=\"content-wrap timer-main\">\n\n    <h2 class=\"timer-header\">" + obj.title + "</h2>\n    <p class=\"timer-description\">" + obj.desc + "</p>\n\n    <section class=\"pomadoras-section\">\n      <ul class=\"pomadoras-list\">";
	
	      for (var i = 1; i <= obj.estimation; i++) {
	        strDom += "<li class=\"pomadoras-item\"></li>";
	      }
	
	      strDom += "\n      </ul>\n      <a class=\"link-add icomoon\" href=\"#\" title=\"Add\">&#xe900;</a>\n    </section>\n    <div class=\"timer-wrapper\">\n      <div class=\"timer category--" + obj.category + "\">\n        <div class=\"timer-inner\">\n          <div class=\"timer-pie spinner\"></div>\n            <div class=\"timer-pie filler\"></div>\n            <div class=\"mask\"></div>\n            <div class=\"timer-text-wrap\">\n              <div class=\"timer-text\">\n                <p class=\"process-text\">\n                  <span class=\"counter\">" + parseInt(config[0].value) + "</span><br>\n                  <span class=\"min\">min</span>\n                </p>\n              </div>\n            </div>\n          </div>\n      </div>\n            \n      <div class=\" icomoon\">\n        <a href=\"#task-list\" class=\"arrow arrow--left\">&#xe902;</a>\n        <a href=\"#reports\" class=\"arrow arrow--right\">&#xe903;</a>\n      </div>\n\n    </div>\n\n    <div class=\"timer-controls\">\n      <button class=\"fail-pomodora-button button button--large button--red\">Fail Pomodora</button>\n      <button class=\"finish-pomodora-button button button--large button--green\">Finish Pomodora</button>\n    </div>\n\n    </main>\n    ";
	      return strDom;
	    }
	  }]);
	
	  return Template;
	}();
	
	exports.default = Template;

/***/ }
]));
//# sourceMappingURL=1.1.js.map