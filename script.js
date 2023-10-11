const articleDiv = document.getElementById('article');

articleDiv.addEventListener('click', () => {
    // Scroll to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight
    });
});