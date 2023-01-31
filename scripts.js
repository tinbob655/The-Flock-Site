function init() {
    setTimeout(() => {
        DOMloaded();
    }, 1000);
};

function DOMloaded() {
    const header = document.getElementById('header');
    loadHeader();
    loadFooter();
};

async function loadHeader() {

    //header logic
    const pageList = ['Home', 'Socials', 'Videos'];
    let pageTitles = [];
    const initPageLinks = ['index.html', 'socials.html', 'videos.html'];
    let finPageLinks = [];
    let headerHTML = '';
    let location = document.location.href;
    location = decodeURI(location.substring(location.lastIndexOf('/') +1));
    location = location.slice(0, location.lastIndexOf('.'));
    location = location.charAt(0).toUpperCase() + location.slice(1);
    if (location == 'Index') {
        location = 'Home';
    };
    for (let i = 0; i < pageList.length; i++) {
        if (location != pageList[i]) {
            if (pageList[i] != 'Home') {
                pageTitles.push(pageList[i]);
            }
            else {
                pageTitles.push('Home');
            };
            finPageLinks.push(initPageLinks[i]);
        };
    };
    
    //load the header
    for (let i = 0; i < pageList.length -1; i++) {
        headerHTML = headerHTML + `
        <div class="headerLink">
            <button onclick="change_page('`+finPageLinks[i]+`')" type="button">
                <h2>
                    `+pageTitles[i]+`
                </h2>
            </button>
        </div>`;
    };
    document.getElementById('header').innerHTML = headerHTML;
}

 async function loadFooter() {
    let footerHTML = `
    <img src="images/logo main.jpg" class="rounded" style="height: 150px; width: 150px;"/>`;
    document.getElementById('footer').innerHTML = footerHTML;
};

function change_page(page) {
    document.body.style.opacity = 0.0;
    setTimeout(() => {
        document.location = page;
    }, 1200);
};

window.onload = init();