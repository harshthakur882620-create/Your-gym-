// LOADER
window.onload = function() {
    document.getElementById("loader").style.display = "none";
};

// PROGRESS BAR
window.onscroll = function() {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
};

// SCROLL ANIMATION
window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".hidden");

    elements.forEach(el => {
        let pos = el.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(pos < screen - 100) {
            el.classList.add("show");
        }
    });
});

// FORM
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent!");
});
