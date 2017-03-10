// import './pomodoras_style.css'

export default class Template {

  getDom(obj) {
    return `
        <h2 class="settings-header">${obj.title}</h2> 
        <div class="options-section clearfix">
        </div>
        <section class="cycle-graph-section">
        <h3>Your cycle</h3>
        <div class="cycle-graph-container"></div>
        </section>
        <div class="settings-controls inner-wrap">
        ${obj.buttons[0].show ?
        `<button class="${obj.buttons[0].className}-button ${obj.buttons[0].className}-button--pomodoras button button--${obj.buttons[0].size} button--${obj.buttons[0].color}">${obj.buttons[0].value}</button>`: ''}
        ${obj.buttons[1].show ?
        `<button class="${obj.buttons[1].className}-button ${obj.buttons[1].className}-button--pomodoras button button--${obj.buttons[1].size} button--${obj.buttons[1].color}">${obj.buttons[1].value}</button>`: ''}
        ${obj.buttons[2].show ?
        `<button class="${obj.buttons[2].className}-button ${obj.buttons[2].className}-button--pomodoras button button--${obj.buttons[2].size} button--${obj.buttons[2].color}">${obj.buttons[2].value}</button>`: ''}
      </div>
    `}

}