function init() {
    setTimeout(() => {
        DOMloaded();
    }, 1000);
};

function DOMloaded() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
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
    headerHTML = `
    <table>
        <tr>`;
    for (let i = 0; i < pageList.length -1; i++) {
        headerHTML = headerHTML + `
            <td>
                <div class="headerLink" style="width: 100%;">
                    <button onclick="change_page('`+finPageLinks[i]+`')" type="button">
                        <h2>
                            `+pageTitles[i]+`
                        </h2>
                    </button>
                </div>
            </td>`;
    };
    headerHTML = headerHTML + `
        </tr>
    </table>`;
    document.getElementById('header').innerHTML = headerHTML;
    header.style.opacity = 1.0;
};

 async function loadFooter() {
    let footerHTML = `
    <img src="images/logo main.jpg" class="rounded" style="height: 150px; width: 150px;"/>
    Made using Will R's brain. The Flock theme is by NewRinaldi and is not void of copyright. Anyone who does not subscribe to The Flock
    will be immediatley shot on sight due to their disrespect. The Flock does not care about you or your feelings, only cold hard
    profits. Giving The Flock money will lead to you being less likley to be shot, but no guarantees. Anyone caught not saying that
    The Flock is the best YouTube chanell at any point will be instantly abducted and will likley have their tounge cut out and thrown
    back at them (with condiserable force).`;
    footer.innerHTML = footerHTML;
    footer.style.opacity = 1.0;
};

function change_page(page) {
    document.body.style.opacity = 0.0;
    setTimeout(() => {
        document.location = page;
    }, 1200);
};

window.onload = init();