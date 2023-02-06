// Listens for click on Hamburger icon (For mobile)
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
});

// Observe elements to animate once in view
const pages = Array.from(
    document.querySelectorAll("section:not(:first-child)")
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
        }
    });
});

pages.forEach((page) => {
    observer.observe(page);
});
