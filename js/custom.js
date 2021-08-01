let tabs = document.querySelectorAll(".tab label");

tabs.forEach(tab => {
    tab.addEventListener('click', (element) => {
        if (!element.target.classList.contains("-active")) {
            setActive();
            tab.classList.add("-active");
        }
    })
})

let setActive = () => {
    tabs.forEach(tab => {
        tab.classList.remove("-active");
    })
}