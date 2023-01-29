function init() {
    setTimeout(() => {
        onDOMLoad();
    }, 1000);
};

function onDOMLoad() {
    const header = document.getElementById('header');
    loadHeader();
};

function loadHeader() {
    header.innerHTML = `
    <div class="headerLink">
        <p>
            oi
        </p>
    </div>`
}

function loadFooter() {
    //make sure this <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div> is in footer
};

window.onload = init();