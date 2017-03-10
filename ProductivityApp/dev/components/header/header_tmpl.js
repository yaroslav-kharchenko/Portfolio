export default class Template {

  getDom(obj, options) {
    return `
      <header class="page-header wrapper">
        <div class="logo">
          <a href="#"><img src="${obj.logo.url}" alt="${obj.logo.alt}"/></a>
        </div>
        ${options.title ? `<h1 class="page-title">${options.title} ${options.tasklist ? `<button class="link-add-task icomoon">&#xe900;</button>`: ``}</h1>`: ''}
        <nav class="menu">
          ${options.add ?
          `<a class="menu__option link-${obj.menu.add.className} icomoon has-tooltip" href="#" title="${obj.menu.add.title}">${obj.menu.add.icon}</a>` : ''}
          ${options.remove ?
          `<a class="menu__option link-${obj.menu.remove.className} icomoon has-tooltip" href="#" title="${obj.menu.remove.title}">${obj.menu.remove.icon}</a>` : ''}
          <a class="menu__option link-${obj.menu.charts.className} icomoon has-tooltip" href="#reports" title="${obj.menu.charts.title}">${obj.menu.charts.icon}</a>
          <a class="menu__option link-${obj.menu.options.className} icomoon has-tooltip" href="#settings" title="${obj.menu.options.title}">${obj.menu.options.icon}</a>
          <a class="menu__option link-${obj.menu.exit.className} icomoon has-tooltip" href="#login" title="${obj.menu.exit.title}">${obj.menu.exit.icon}</a>
        </nav>
      </header>
    `}

}