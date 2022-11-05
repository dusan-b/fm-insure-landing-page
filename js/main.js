const body = document.querySelector('body');
const toggleButton = document.querySelector('.main-menu-btn');

toggleButton.addEventListener('click', function () {
    if (body.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false');
        body.classList.remove('is-active');
    } else {
        body.classList.add('is-active');
        this.setAttribute('aria-expanded', 'true');
    }
});