/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
/* */

//haalt de icon op, waar op moet worden geklikt
var zoekknop = document.getElementById("uov_zoeken");
//Dit is de input die is aangemaakt in de html
var zoekbar = document.getElementById("zoekbalk");
var zoeken = zoekbar.className;

var zoekFunctie = function () {
    var zoeken = zoekbar.className;

    if (zoeken == "zoek") {
        //Voegt class toe
        zoekbar.classList.remove("zoek");
        zoekbar.classList.add("zoek1");
    } else if (zoeken == "zoek1") {
        //Verwijderd class
        zoekbar.classList.remove("zoek1");
        zoekbar.classList.add("zoek");
    } else {
        //Reset de zoekbar
        zoekbar.classList.add("zoek");
    }
};

//Wanneer er geklikt wordt op de zoekknop (icon) runt hij de functie hierboven.
zoekknop.addEventListener("click", zoekFunctie);


var dropbutton = document.getElementById("dropbtn");
var pijl = document.getElementById("pijl");
var filterMenu = document.getElementById("dropmenu");
var filterenKnop = document.getElementById("filteren");

var open = function () {
    filterMenu.classList.remove('menu');
    filterMenu.classList.add('menu1');
    pijl.classList.remove('pijl');
    pijl.classList.add('pijl1');
    console.log("test");
}

dropbutton.addEventListener("click", open);

var dicht = function () {
    filterMenu.classList.remove('menu1');
    filterMenu.classList.add('menu');
    pijl.classList.remove('pijl1');
    pijl.classList.add('pijl');
    console.log("test2");
}

filterenKnop.addEventListener("click", dicht);
