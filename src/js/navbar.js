function addLinkClickListener(selector, url) {
    var link = document.querySelector(selector);

    if (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = url;
        });
    }
}

addLinkClickListener('.my-resume', 'resume.html');
addLinkClickListener('.home', 'index.html');
