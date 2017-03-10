export default class Template {

  getDom(obj, options) {
    return `
      <li>
      <section class="${obj.className} option-block">
       <h3 class="setting-title">${obj.name}</h3>
       <div class="option-controls">
       <button class="value-decrease">&#xe911;</button>
       <button class="value-increase">&#xe900;</button>
       <input class="timer-value ${obj.className}__value" type="text" value="${options.value}" disabled/>
       </div>
       <p class="description">${obj.desc}</p>
      </section>
      </li>
    `}

}