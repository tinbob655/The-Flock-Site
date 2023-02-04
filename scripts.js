function init() {
    //if the URL suffix is blank, make it 'index.html'
    var location = document.location.href;
    location = location.substring(location.lastIndexOf('/') +1);
    if (location == '') {
        document.location.href = 'index.html';
        return(null);
    };

    //load the page
    setTimeout(() => {
        DOMloaded();
    }, 1000);
};

function DOMloaded() {
    //if the user is mobile then adjust css variables accordingly
    if (isMobile() == false) {
        const root = document.querySelector(':root');
        root.style.setProperty('--pxEnlargment', '30px');
        root.style.setProperty('--percentageEnlargment', '15%');
        root.style.setProperty('--vwEnlargment', '20vw');
        root.style.setProperty('--vhEnlargment', '20vh');
    };

    //load the page
    loadHeader();
    loadFooter();
    document.body.style.opacity = 1.0;
};

async function loadHeader() {

    //header logic
    const pageList = ['Home', 'Socials', 'Videos'];
    const initPageLinks = ['index.html', 'socials.html', 'videos.html'];
    let finPageLinks = [];
    let pageTitles = [];
    let headStyles = [];
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
                headStyles.push('');
            }
            else {
                pageTitles.push('Home');
                headStyles.push('style="color: #e6e670;"');
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
            <td style="width: `+100/finPageLinks.length+`%;">
                <div class="headerLink" style="width: 100%;">
                    <button onclick="change_page('`+finPageLinks[i]+`')" type="button">
                        <h2 `+headStyles[i]+`>
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
};

function change_page(page) {
    document.body.style.opacity = 0.0;
    setTimeout(() => {
        document.location = page;
    }, 1200);
};

function mobileCheck() {     //massive mobile detection script
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function isMobile () {
    //combines mobile detection script with navigator
    if (mobileCheck() == true || navigator.userAgentData.mobile == true) {
        return (true);
    }
    else {
        return (false);
    };
};

window.onload = init();