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
    loadHtmlContent('work-container', 'google.com');
    loadHtmlContent('testimonial-container', 'google.com');
});

console.log('main')