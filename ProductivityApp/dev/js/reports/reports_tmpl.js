// import './reports_style.css'

export default class Template {

  getDom(obj, options) {
    return `
  <main class="content-wrap reports-main">

    <div class="filters__top tabs">
      <a href="#" class="tabs__link tabs__link--active">Day</a>
      |<a href="#" class="tabs__link">Week</a>
      |<a href="#" class="tabs__link">Month</a>
    </div>

    <div class="bagel-chart chart">
      <div id="container" style="min-width: 300px; max-width: 605px; height: 317px; margin: 0 auto"></div>
    </div>

    <div class=" icomoon">
      <a class="arrow arrow--left">&#xe902;</a>
      <a class="arrow arrow--right">&#xe903;</a>
    </div>

    <div class="filters__bottom tabs">
      <a href="#" class="tabs__link">Pomodoros</a>
      |<a href="#" class="tabs__link tabs__link--active">Tasks</a>
    </div>

  </main>
    `}

}