let priority = [
  {
    name: 'urgent',
    title: 'Urgent'
  },
  {
    name: 'high',
    title: 'High'
  },
  {
    name: 'middle',
    title: 'Middle'
  },
  {
    name: 'low',
    title: 'Low'
  },
];

export default class Template {

  getDom(type, options, config){
    $('body').dialog();
    let overlay = $('.modal-overlay');
    let title = type.charAt(0).toUpperCase() + type.substr(1);
    let strDom = `
    <form class="${type}-task-modal modal-window">
        <div class="modal-controls">`;
    if (type == 'remove'){
      strDom += `<a class="modal-control link-cancel-edit icomoon">&#xe910;</a>`;
    } else if (type == 'edit'){
      strDom += `<button class="modal-control link-remove-task icomoon">&#xe912;</button>
        <button class="modal-control link-apply-edit icomoon">&#xe90f;</button>
        <a class="modal-control link-cancel-edit icomoon">&#xe910;</a>`;
    } else {
      strDom += `<button class="modal-control link-apply-add icomoon">&#xe90f;</button>
        <a class="modal-control link-cancel-edit icomoon">&#xe910;</a>`;
    }
    strDom += `</div><div class="modal-inner">
        <h2 class="modal-header">${title} Task</h2>`;
    if (type == 'remove'){
      strDom += `<p class="remove-message">Are you sure you want to remove selected task(s)?</p>
          <div class="settings-controls">
            <button class="cancel-button controls-button button button--small button--red">Cancel</button>
            <button class="remove-button controls-button button button--small button--green">Remove</button>
          </div>
        </div>
      </div>`;
      overlay.html(strDom);
      return overlay;
    } else {
      strDom += `
        <div class="modal-option">
          <label for="task-title" class="modal-label">Title</label><br>
          <input type="text" class="modal-input" id="task-title" placeholder="Add title here" value="${options.title ? `${options.title}`: ''}" required/>
        </div>
         
        <div class="modal-option">
          <label for="task-description" class="modal-label">Description</label><br>
          <input type="text" class="modal-input" id="task-description" placeholder="Add descripttion here" value="${options.desc ? `${options.desc}`: ''}" required/>
        </div>
        <div class="modal-option">
          <label class="modal-label">Category</label><br>
          <ul class="categories-list">`;

      for(let i = 0; i < config.length; i++){
        strDom += `
        <li class="categories-item radio-li">
            <input id="category--${config[i].id}" name="category" type="radio" class="category-input radio-button" ${options.category == i + 1 ? `checked` : ``}>
            <label for="category--${config[i].id}" class="category-name radio-label">${config[i].value}</label>
        </li>
        `
      }

      strDom += `</ul></div>
        <div class="modal-option">
          <label for="task-deadline" class="modal-label">Deadline</label><br>
          <input type="date" class="modal-input" id="task-deadline" value="${options.deadline ? `${options.deadline}`: ''}" required>
        </div>
        <div class="modal-option">
          <label class="modal-label">Estimation</label><br>
          <div class="estimation-wrap">
          <div class="pomadoras-list">
      `;

      for(let i = 5; i != 0; i--){
        strDom += `<input class="radio-hidden estimation-input" id="est${i}" type="radio" name="estimation" ${options.estimation == i ? `checked` : ``}>
                   <label class="pomadoras-label" for="est${i}"></label>`;
      }

      strDom += `</div></div></div>
         <div class="modal-option">
            <label class="modal-label">Priority</label><br>
            <ul class="categories-list">`;

      for(let i = 0; i < priority.length; i++){
        strDom += `
         <li class="categories-item radio-li">\
            <input id="priority--${priority[i].name}" name="priority" type="radio" class="radio-button priority-input" ${priority[i].name == options.priority ? `checked` : ``}>
            <label for="priority--${priority[i].name}" class="category-name radio-label">${priority[i].title}</label>
         </li>`
      }

      strDom += `</ul></div></form></div>`;
      overlay.html(strDom);
      return overlay;
    }
  }

}

 // let type = 'add' || 'edit' || 'remove';