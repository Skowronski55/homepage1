console.log("Cześć!");

let button1 = document.querySelector(".js-header__buttonHeading");
let header__heading = document.querySelector(".js-header__heading");
let button2 = document.querySelector(".js-header__buttonImage");
let img  = document.querySelector(".js-headerImage");
let button3 = document.querySelector(".js-header__buttonColor");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".themeName");


button1.addEventListener("click", () => {
    header__heading.remove();
})

button2.addEventListener("click", () => {
    img .remove();
})

button3.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny";
} else {
         themeName.innerText = "ciemny";
}
})

