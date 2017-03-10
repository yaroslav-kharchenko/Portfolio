export default class Template {

  getDom(obj) {

    return `
      <ul class="task-groups-list">
      
      <div class="task-groups-list__tabs tabs">
        <a href="#" class="tabs__link tabs__link--active">To Do</a>
        |<a href="#" class="tabs__link">Done</a>
      </div>
      
      <li class="task-groups__item daily-list">
        <ul class="task-list"></ul>
      </li>
      
      <li class="task-groups__item global-list"></li>
      
      </ul>
    `}

    getGlobalListDom(){
      return `
        <a href="#" class="global_list link--active has-tooltip" data-accordion-role="control" title="Go to Global List">Global list
          <span class="icon-arrow-right icomoon">&#xe907;</span>
          <span class="icon-arrow-down icomoon">&#xe906;</span>
        </a>

        <div class="global-list__tabs tabs">
          <a href="#" class="tabs__link tabs__link--active">All</a>
          |<a href="#" class="tabs__link">Urgent</a>
          |<a href="#" class="tabs__link">High</a>
          |<a href="#" class="tabs__link">Middle</a>
          |<a href="#" class="tabs__link">Low</a>
        </div>

        <ul class="global-list__list" data-accordion-role="content"></ul>
      `;

    }

    getCategoryDom(category){
      return `
         <li class="global-list__item category--${category.id}">
            <h4 class="category-header">${category.value}</h4>
            <ul class="task-list"></ul>
         </li>
       `
    }

}