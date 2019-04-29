let logo = document.getElementById("logo");

logo.addEventListener("mouseenter", function () {
    logo.setAttribute("src", "images/logo/Super Sogbu.PNG")
})

logo.addEventListener("mouseleave", function () {
    logo.setAttribute("src", "images/logo/Super Sogbu_1.PNG")
})


let saladas = document.getElementById("saladas");
let sucos = document.getElementById("sucos");
let outros = document.getElementById("outros");
let menu_salada = document.getElementById("menu_salada");
let menu_suco = document.getElementById("menu_suco");
let menu_outro = document.getElementById("menu_outro");

function mostrarSaladas() {
    saladas.setAttribute("class", "row mt-4 inline");
    sucos.setAttribute("class", "row mt-4 none");
    outros.setAttribute("class", "row mt-4 none");
}

function mostrarSucos() {
    saladas.setAttribute("class", "row mt-4 none");
    sucos.setAttribute("class", "row mt-4 inline");
    outros.setAttribute("class", "row mt-4 none");

}

function mostrarOutros() {
    saladas.setAttribute("class", "row mt-4 none");
    sucos.setAttribute("class", "row mt-4 none");
    outros.setAttribute("class", "row mt-4 inline");
}

menu_salada.addEventListener('click', function () {
    mostrarSaladas();
    menu_suco.setAttribute("class", "btn btn-outline-warning mr-3");
    menu_salada.setAttribute("class", "btn btn-success mr-3");
    menu_outro.setAttribute("class", "btn btn-outline-info mr-3");
})

menu_suco.addEventListener('click', function () {
    mostrarSucos();
    menu_suco.setAttribute("class", "btn btn-warning mr-3");
    menu_salada.setAttribute("class", "btn btn-outline-success mr-3");
    menu_outro.setAttribute("class", "btn btn-outline-info mr-3");
})

menu_outro.addEventListener('click', function () {
    mostrarOutros();
    menu_suco.setAttribute("class", "btn btn-outline-warning mr-3");
    menu_salada.setAttribute("class", "btn btn-outline-success mr-3");
    menu_outro.setAttribute("class", "btn btn-info mr-3");
})

document.getElementById("whats_icon").addEventListener("click", function(e) {
    let whatsapp = document.getElementById("whatsapp");
    whatsapp.style.color = "green";
    whatsapp.style.fontSize = "135%";
    setTimeout(function(){ 
        whatsapp.style.color = "black"; 
        whatsapp.style.fontSize = "100%";
    }, 3000);
})

document.getElementById("mail_icon").addEventListener("click", function(e) {
    let mail = document.getElementById("mail");
    mail.style.color = "red";
    mail.style.fontSize = "135%";
    setTimeout(function(){ 
        mail.style.color = "black"; 
        mail.style.fontSize = "100%";
    }, 3000);
})