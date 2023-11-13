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
addLinkClickListener('.linkedin', 'https://www.linkedin.com/in/chuyw');


function loadHtmlContent(containerId, htmlFilePath) {
    const container = document.getElementById(containerId);
    if (container) {
        fetch(htmlFilePath)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
            });
    }
}

window.addEventListener('DOMContentLoaded', function() {
    loadHtmlContent('navbar-container', 'src/views/navbar.html');    
    loadHtmlContent('main-container', 'src/views/main.html');
});
