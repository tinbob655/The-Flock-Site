function init() {
    setTimeout(() => {
        DOMloaded();
    }, 1500);
};

function DOMloaded() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    document.head.innerHTML = document.head.innerHTMl +`
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon-stuff/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-stuff/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-stuff/favicon-16x16.png">
    <link rel="manifest" href="/favicon-stuff/site.webmanifest">
    <link rel="mask-icon" href="/favicon-stuff/safari-pinned-tab.svg" color="#000000">
    <link rel="shortcut icon" href="/favicon-stuff/favicon.ico">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-config" content="/favicon-stuff/browserconfig.xml">
    <meta name="theme-color" content="#000000">`;
    loadHeader();
    loadFooter()
    document.body.style.opacity = 1.0;
};