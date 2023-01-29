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
};

window.onload = init();