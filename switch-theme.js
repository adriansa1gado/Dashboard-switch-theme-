const swicth_theme = document.getElementById('head__switch--button');

swicth_theme.addEventListener('click', () => {
    document.body.classList.toggle('active');
    swicth_theme.classList.toggle('switch-dark');
});