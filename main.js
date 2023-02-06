const pageArray = Array.from(document.querySelectorAll(".page"));
const navigationArray = Array.from(document.querySelectorAll(".sticky-navbar ul li"));
const navigationItemClassArray = [];

navigationArray.forEach((item) => {
    navigationItemClassArray.push(item.className);
});

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
            const observedElementClassArray = Array.from(entry.target.classList);
            if (entry.isIntersecting) {
                for (let i = 0; i < observedElementClassArray.length; i++) {
                    for (let y = 0; y < navigationArray.length; y++) console.log(navigationArray[y].className.includes(observedElementClassArray[i]));
                }
                //navigationArray.filter((element) => observedElementClassArray.findIndex(element))
            }
        });
    }, options);
    observer.observe(element);
}

addObserver(".page");
