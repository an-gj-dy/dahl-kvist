// Observe elements to animate once in view
const pages = Array.from(
    document.querySelectorAll("section:not(:first-child)")
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    { threshold: 0.4 }
);

pages.forEach((page) => {
    observer.observe(page);
});
