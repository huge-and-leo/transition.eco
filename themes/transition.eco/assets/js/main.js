window.addEventListener('DOMContentLoaded', () => {
    const primaryNavToggle = document.querySelector(".primary-nav-toggle");
    primaryNavToggle.addEventListener("click", _ => {
        document.body.classList.toggle("primary-nav--opened");
    })

    const secondaryNavToggle = document.querySelector(".secondary-nav-toggle");
    secondaryNavToggle.addEventListener("click", _ => {
        document.body.classList.toggle("secondary-nav--opened");
    })
});