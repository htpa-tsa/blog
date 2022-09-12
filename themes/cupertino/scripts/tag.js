let hljs = require('highlight.js');

 hexo.extend.tag.register('ccb', function (args, content) {
    // parse args
    let obj = {};
    args.forEach(function(item) {
        let key = item.split(':')[0];
        let value = item.split(':')[1];
        obj[key] = value;
    });
    let lang = obj.lang ? obj.lang : "text";
    let gutter1 = obj.gutter1 ? parseRange(obj.gutter1).map(x => {
        if(x == "S") return `<div style="margin:1.2em 0"><span class="line"> </span></div>`;
        else return `<span class="line">${x}</span><br>`;
    }).join("") : undefined;

    let gutter2 = obj.gutter2 ? parseRange(obj.gutter2).map(x => {
        if(x == "S") return `<div style="margin:1.1em 0"><span class="line"> </span></div>`;
        else return `<span class="line">${x}</span><br>`;
    }).join("") : undefined;

    let caption = obj.caption ? obj.caption : undefined;
    let scrollable = obj.scrollable == 'true' ? true : false;
    let wrapped = obj.wrapped == 'true' ? true : false;
    let diff_add = obj.diff_add ? parseRange(obj.diff_add).map(x => parseInt(x)) : undefined;
    let diff_del = obj.diff_del ? parseRange(obj.diff_del).map(x => parseInt(x)) : undefined;
    let highlight = obj.highlight ? parseRange(obj.highlight).map(x => parseInt(x)) : undefined;
    let url = obj.url ? obj.url : undefined;
    let url_text = obj.url_text ? obj.url_text : undefined;
    let highlighted = hljs.highlight(content, {
        language: lang
    }).value;
    let lines = obj.html == 'true' ? content.split('\n') : highlighted.split('\n');
    
    lines = lines.map(line => {
        if (line.indexOf("SKIP_LINE") != -1) {
            return `<div class="skip-highlight">(${line.match(/\((.*)\)/)[1]})</div>`;
        } else {
            return line;
        }
    });

    if(diff_add) {
        diff_add.forEach(function (line) {
            lines[line - 1] = `<div class="diff-highlight-add">${lines[line - 1]}</div>`;
        });
    }

    if(diff_del) {
        diff_del.forEach(function (line) {
            lines[line - 1] = `<div class="diff-highlight-del">${lines[line - 1]}</div>`;
        });
    }

    if(highlight) {
        highlight.forEach(function (line) {
            lines[line - 1] = `<div class="code-highlight">${lines[line - 1]}</div>`;
        });
    }

    highlighted = lines.join('\n');

    const scrollableText = scrollable ? `<div style="height:400px; overflow:auto; margin:1rem 0;">` : "";
    const scrollableStyle = scrollable ? ` style="margin: 0;"` : "";
    const scrollableEnd = scrollable ? `</div>` : "";
    const wrappedStyle = wrapped ? ` style="white-space: pre-wrap;"` : "";
    const urlText = url ? `<a target="_blank" rel="noopener" href="https://${url}"><span style="color:#82C4E4">[${url_text}]</span></a>` : "";
    const langText = lang ? `<figure class="highlight ${lang}"${scrollableStyle}>`: `<figure class="highlight text"${scrollableStyle}>`
    const captionText = caption ? `<figcaption><span>${caption}</span>${urlText}</figcaption>` : "";
    const gutter1Text = gutter1 ? `<td class="gutter"><pre>${gutter1}</pre></td>`: "";
    const gutter2Text = gutter2 ? `<td class="gutter"><pre>${gutter2}</pre></td>`: "";
    return `${scrollableText}${langText}<table>${captionText}<tr>${gutter1Text}${gutter2Text}<td class="code"><pre${wrappedStyle}>${highlighted}</pre></td></tr></table></figure>${scrollableEnd}`;
}, {
    ends: true,
    async: true
});

hexo.extend.tag.register('fontawesome', function () {
    return `<script src="https://kit.fontawesome.com/129342a70b.js" crossorigin="anonymous"></script>`;
}, {
    async: true
});