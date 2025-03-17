const buttonLogin = document.querySelector('.button-form');
const buttonLogout = document.querySelector('.button-logout');

if (buttonLogin) {
    buttonLogin.addEventListener('click', (e) => {
        e.preventDefault();

        window.location.href = 'principal.html';
})};

if (buttonLogout) {
    buttonLogout.addEventListener('click', (e) => {
        e.preventDefault();

        window.location.href = 'login.html';
})};