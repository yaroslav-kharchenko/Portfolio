
export default class Controller {

  constructor(view, data, container, options){
    this.view = new view;
    this.view.render(container ,data, options);
  }

}


