// import './categories_style.css'

export default class Template {

  getDom(obj, options) {
    return `
      <h2 class="settings-header">${obj.title}</h2>
      <form action="#" class="categories_form inner-wrap">
        <ul class="categories-list">
          <li class="categories-item">
            <input type="text" id="category-${options[0].id}" class="category-name" value="${options[0].value
        }"/>
            <i class="category-color"></i>
          </li>
          <li class="categories-item">
            <input type="text" id="category-${options[1].id}" class="category-name" value="${options[1].value
        }"/>
            <i class="category-color"></i>
          </li>
          <li class="categories-item">
            <input type="text" id="category-${options[2].id}" class="category-name" value="${options[2].value
        }"/>
            <i class="category-color"></i>
          </li>
          <li class="categories-item">
            <input type="text" id="category-${options[3].id}" class="category-name" value="${options[3].value
        }"/>
            <i class="category-color"></i>
          </li>
          <li class="categories-item">
            <input type="text" id="category-${options[4].id}" class="category-name" value="${options[4].value
        }"/>
            <i class="category-color"></i>
          </li>
        </ul>
      </form>
      <div class="settings-controls inner-wrap">
        ${obj.buttons[0].show ?
          `<button class="${obj.buttons[0].className}-button ${obj.buttons[0].className}-button--categories button button--${obj.buttons[0].size} button--${obj.buttons[0].color}">${obj.buttons[0].value}</button>`: ''}
        ${obj.buttons[1].show ?
        `<button class="${obj.buttons[1].className}-button ${obj.buttons[1].className}-button--categories button button--${obj.buttons[1].size} button--${obj.buttons[1].color}">${obj.buttons[1].value}</button>`: ''}
        ${obj.buttons[2].show ?
        `<button class="${obj.buttons[2].className}-button ${obj.buttons[2].className}-button--categories button button--${obj.buttons[2].size} button--${obj.buttons[2].color}">${obj.buttons[2].value}</button>`: ''}
      </div>
    `}

}