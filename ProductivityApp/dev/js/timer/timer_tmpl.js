// import './timer_style.css';

export default class Template {

  getDom(obj, config) {
    let strDom = `
   <main class="content-wrap timer-main">

    <h2 class="timer-header">${obj.title}</h2>
    <p class="timer-description">${obj.desc}</p>

    <section class="pomadoras-section">
      <ul class="pomadoras-list">`;

    for (let i = 1; i <= obj.estimation; i++) {
      strDom += `<li class="pomadoras-item"></li>`;
    }

    strDom += `
      </ul>
      <a class="link-add icomoon" href="#" title="Add">&#xe900;</a>
    </section>
    <div class="timer-wrapper">
      <div class="timer category--${obj.category}">
        <div class="timer-inner">
          <div class="timer-pie spinner"></div>
            <div class="timer-pie filler"></div>
            <div class="mask"></div>
            <div class="timer-text-wrap">
              <div class="timer-text">
                <p class="process-text">
                  <span class="counter">${parseInt(config[0].value)}</span><br>
                  <span class="min">min</span>
                </p>
              </div>
            </div>
          </div>
      </div>
            
      <div class=" icomoon">
        <a href="#task-list" class="arrow arrow--left">&#xe902;</a>
        <a href="#reports" class="arrow arrow--right">&#xe903;</a>
      </div>

    </div>

    <div class="timer-controls">
      <button class="fail-pomodora-button button button--large button--red">Fail Pomodora</button>
      <button class="finish-pomodora-button button button--large button--green">Finish Pomodora</button>
    </div>

    </main>
    `;
    return strDom;
  }

}