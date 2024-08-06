let btnup = document.getElementById("up");

window.onscroll = function() {
    if (window.scrollY >= 120) {
        btnup.style.display = "block";
    } else {
        btnup.style.display = "none";
    }
};


btnup.onclick = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};
document.body.appendChild(btnup);
