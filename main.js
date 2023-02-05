const pageArray = Array.from(document.querySelectorAll(".page"));
const navigationArray = Array.from(
    document.querySelectorAll(".sticky-navbar ul li")
);

navigationArray.forEach((listItem, index) => {
    listItem.addEventListener("click", () => {
        pageArray[index].scrollIntoView(true);
    });
});

function addObserver(selector, options = {}) {
    let elements = document.querySelectorAll(selector);
    elements = Array.from(elements);
    elements.forEach((element) => {
        observerEvent(element, options);
    });
}

function observerEvent(element, options) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry.target.classList);
            }
        });
    }, options);
    observer.observe(element);
}

addObserver(".page");
