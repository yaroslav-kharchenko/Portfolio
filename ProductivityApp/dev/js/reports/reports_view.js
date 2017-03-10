// import Template from './reports_tmpl';
let template = require("./reports_tmpl.handlebars");
//Header
import headerView from '../../components/header/header_view';
import headerController from '../../components/header/header_controller';
import { data as headerData } from '../../components/header/header_data';

export default class View {

  constructor(){
    this.template = template;
  }

  render(parent, data){

    document.querySelector('body').innerHTML = '';

    let header = new headerController(headerView, headerData, {title: 'Report', add: false, remove: false});
    header.init();

    let parentElem = parent || document.querySelector('body');
    parentElem.innerHTML += this.template();

  }
}