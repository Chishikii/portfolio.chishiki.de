var prevScrollpos = window.scrollY;

window.onscroll = function () {
    var currentScrollpos = window.scrollY;

    let navbar = document.getElementById("navbar");
    let navbarHeight = navbar.offsetHeight;

    if (currentScrollpos <= 0) {
        navbar.style.boxShadow = "0px 0px 0px";
    } else {
        navbar.style.boxShadow = "0 10px 30px -10px";
        if (prevScrollpos > currentScrollpos) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = -navbarHeight + "px";
        }
    }

    prevScrollpos = currentScrollpos;
}

window.onload = () => {

}