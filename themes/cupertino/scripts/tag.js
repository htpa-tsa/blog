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
        let badge, badge2, badge3, image, border, background, actionsBox;
        if (value.button && Array.isArray(value.button.text)) {
            for (let i = 0; i < value.button.text.length; i++) {
                actions.push(`<a href="${value.button.link[i]}" class="action-button-primary">${value.button.text[i]}</a>`);
            }
        } else if(value.button) {
            actions.push(`<a href="${value.button.link}" class="action-button-primary">${value.button.text}</a>`);
        }
        actions = actions.join("");
        badge = value.badge ? `<span class="badge no-select ${value.badge.type}">${value.badge.text}</span>` : "";
        badge2 = value.badge2 ? `<span class="badge no-select ${value.badge2.type}">${value.badge2.text}</span>` : "";
        badge3 = value.badge3 ? `<span class="badge no-select ${value.badge3.type}">${value.badge3.text}</span>` : "";
        image = value.image ? `<div class="cover-img"><img src="${value.image}" alt="${key}"></div>` : "";
        border = value.border ? `border: 2px solid #${value.border};` : "";
        background = value.background ? `background: ${value.background};` : "";
        if(badge || badge2 || badge3 || actions) {
            actionsBox = `<div class="actions">
            <div class="left">
                ${badge}${badge2}${badge3}
            </div>
            <div class="right">
                ${actions}
            </div>
            </div>`;
        } else {
            actionsBox = "";
        }
        gridItems.push(`<div class="card" style="${border}${background}">
        ${image}
        <div class="content">
            <p class="title">${key}</p>
            <p class="description">${value.description}</p>
        </div>
        ${actionsBox}
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