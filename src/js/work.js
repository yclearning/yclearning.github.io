function addLinkClickListener(selector, url) {
    var link = document.querySelector(selector);

    if (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = url;
            console.log('hi')
        });
    }
}

addLinkClickListener('.dedoco', 'dedoco.html');
addLinkClickListener('.lalamove', 'lalamove.html');
addLinkClickListener('.youtrip', 'youtrip.html');
