const menuBar = document.querySelector("#menu-bar");
const navLink = document.querySelector("#nav-link");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");   
    navLink.classList.toggle("show");    
});
