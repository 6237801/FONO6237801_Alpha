// Variables et constantes du projet
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
const panneauBtn = document.querySelector(".nav--btn");
const panneauNav = document.querySelector(".nav--menu");
const elementsPanneau = document.querySelectorAll(".nav--menu *")



function OuvrirNav() {
    panneauNav.style.opacity = 1;
    panneauNav.style.width = "100%";
    panneauNav.classList.add("panneau--ouvert");
    panneauNav.classList.remove("panneau--ferme");
    setTimeout(e=> {

        for (let i=0; i < elementsPanneau.length; i++) {
            let element = elementsPanneau[i];
            element.style.opacity = 1;
        }
    },300);
}

function FermerNav() {
    for (let i=0; i < elementsPanneau.length; i++) {
        let element = elementsPanneau[i];
        element.style.opacity = 0;
    }
    setTimeout(e=> {
        panneauNav.style.opacity = 0;
        panneauNav.style.width = 0;
        panneauNav.classList.remove("panneau--ouvert");
        panneauNav.classList.add("panneau--ferme");
    },300);
}