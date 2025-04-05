// Language Switcher
const langLinks = document.querySelectorAll('.lang');
const contents = document.querySelectorAll('.content');
const body = document.querySelector('body');

langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = link.dataset.lang;

        // Toggle Content Visibility
        contents.forEach(content => {
            content.style.display = (content.id === selectedLang) ? 'block' : 'none';
        });

        // Toggle Text Direction
        if (selectedLang === 'dv') {
            body.classList.add('rtl');
        } else {
            body.classList.remove('rtl');
        }
    });
});
