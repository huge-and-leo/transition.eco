window.addEventListener('DOMContentLoaded', () => {
    const primaryNavToggle = document.querySelector(".primary-nav-toggle");
    primaryNavToggle.addEventListener("click", _ => {
        document.body.classList.toggle("primary-nav--opened");
        primaryNavToggle.classList.toggle("primary-nav-toggle--opened");
    })
});