const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// Add event listener to the bar element
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

// Add event listener to the close element
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}
