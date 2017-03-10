export default class Template {

  getDom() {
    return `
        <main class="clearfix content-wrap settings-block">
        
        <nav class="tabs">
          <a class="tabs__link" href="#tab_1">Pomodoras</a>|
          <a class="tabs__link" href="#tab_2">Categories</a></li>
        </nav>
        <div id="tab_1" class="pomodoras-block tabs__content">
        
        </div>
        <div id="tab_2" class="categories-block tabs__content">
        
        </div>
      </main>
    `}

}