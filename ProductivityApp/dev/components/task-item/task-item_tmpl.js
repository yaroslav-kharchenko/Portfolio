export default class Template {

  getDom(obj){

    let elem = document.createElement('li');
    this.setProps(elem,obj);
    elem.innerHTML = this.generateDom(obj);

    return elem;
  }

  setProps(elem,obj){
    let selector = $(elem);
    selector.removeClass();
    selector.addClass('task category--' + obj.category + ' priority--' + obj.priority + ' clearfix');
    selector.attr('data-id', obj.id);
  }

  generateDom(obj){
    return `
      <div class="trash icomoon">
        <span class="recycle">&#xe912;</span>
        <span class="cancel-remove">&#xe910;</span>
      </div>
      
      <div class="task-date">
        <span class="task-date__day">${obj.deadline}</span>
      </div>

      <section class="task-info">
        <h5 class="task-name">${obj.title}</h5>
        <p class="task-description">${obj.desc}</p>
      </section>
  
      <a href="#timer" class="task-priority clearfix has-tooltip" title="Go to Timer">
        <span class="task-priority__icon-tomato icomoon">&#xe90e;</span>
        <span class="task-priority__icon-timer icomoon">&#xe90d;</span>
        <span class="task-priority__value">${obj.estimation}</span>
      </a>
  
      <div class="task-controls">
        ${ !obj.isDaily ? `<a href="#" class="link-pick-up-task controls-btn icomoon">&#xe904;</a>`: ``}
        <a href="#" class="link-edit-task controls-btn icomoon has-tooltip" title="Edit task">&#xe905;</a>
      </div>
    `;
  }

}