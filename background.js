let cssEnabled = {};

chrome.action.onClicked.addListener((tab) => {
    if (cssEnabled[tab.id]) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: removeCss,
        });


    } else {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: applyCss,

        });


    }

    cssEnabled[tab.id] = !cssEnabled[tab.id];
});

function applyCss() {
    const css = `
        * {
            outline: 1px solid #f00 !important;
            opacity: 1 !important;
            visibility: visible !important;
        }
    `;
    const style = document.createElement('style');
    style.id = 'myCustomStyles';
    style.textContent = css;
    document.head.append(style);
}

function removeCss() {
    const style = document.getElementById('myCustomStyles');
    style.remove();
}
