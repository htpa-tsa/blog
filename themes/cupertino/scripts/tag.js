hexo.extend.tag.register('fontawesome', function () {
    return `<script src="https://kit.fontawesome.com/129342a70b.js" crossorigin="anonymous"></script>`;
}, {
    async: true
});

hexo.extend.tag.register('grid', function (args, content) {
    const yaml = require('js-yaml');
    let grid = yaml.load(content);
    let gridItems = [];
    for (const [key, value] of Object.entries(grid)) {
        let actions = [];
        let badge;
        if (Array.isArray(value.button.text)) {
            for (let i = 0; i < value.button.text.length; i++) {
                actions.push(`<a href="${value.button.link[i]}" class="action-button-primary">${value.button.text[i]}</a>`);
            }
        } else {
            actions.push(`<a href="${value.button.link}" class="action-button-primary">${value.button.text}</a>`);
        }
        actions = actions.join("");
        badge = value.badge ? `<div class="left"><span class="badge no-select ${value.badge.type}">${value.badge.text}</span></div>` : "";

        gridItems.push(`<div class="card">
        <div class="cover-img">
            <img src="${value.image}" alt="${key}">
        </div>
        <div class="content">
            <p class="title">${key}</p>
            <p class="description">${value.description}</p>
        </div>
        <div class="actions">
            ${badge}
            <div class="right">
                ${actions}
            </div>
        </div>
        </div>`);
    } if(args == "columns:2") {
        return `<div class="container"><div class="card-grid-2">${gridItems.join("")}</div></div>`;
    } else {
        return `<div class="container"><div class="card-grid">${gridItems.join("")}</div></div>`;
    }
}, {
    ends: true,
    async: true
});