const navigationButtons = document.querySelectorAll('.nav-btn');

navigationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const target = document.getElementById(button.dataset.target);

        if (!target) {
            return;
        }

        target.scrollIntoView({ behavior: 'smooth' });
        navigationButtons.forEach((navButton) => navButton.classList.remove('active'));
        button.classList.add('active');
    });
});
