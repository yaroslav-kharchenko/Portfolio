// import './login-form_style.css';

export default class Template {

  inputTMPL(obj){
    return`
    <section class="${obj.name}">
      <input id="${obj.name}-input" type="${obj.type}" placeholder="${obj.placeholder}">
      <label for="${obj.name}-input" class="icomoon">${obj.icon}</label>
      <span class="invalid-message">${obj.invalidMsg}</span>
    </section>
    `;
  }

  getDom(obj){
    let str = `
    <header class="${obj.mask}-header">
      <a href="#"><img class="${obj.mask}-page-logo" src="${obj.logo.src}" alt="${obj.logo.text}"></a>
     </header>
     <main class="main">
      <form class="${obj.mask}-form" action="#">
    `;
    for(var i = 0; i < obj.inputs.length; i++){
      str += this.inputTMPL(obj.inputs[i]);
    }
    str += `<button class="${obj.mask}-button button button--small button--green">Log In</button></form></main>`;
    return str;
  }

};