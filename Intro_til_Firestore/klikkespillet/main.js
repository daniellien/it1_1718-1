firebase.initializeApp({
    apiKey: "AIzaSyC0JGcJB79ySrP4zR8Xy4sMthvEZpptKos",
    authDomain: "klikkespillet01.firebaseapp.com",
    projectId: "klikkespillet01"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


var navnE = document.querySelector('.navn');
var startE = document.querySelector('.start');
var klikkE = document.querySelector('.klikk');
var klikkverdiE = document.querySelector('.klikkverdi');
var listeE = document.querySelector('.poengliste');
var klikkebarE = document.querySelector('.bar');
var topscoreE = document.querySelector('.topscore');
var antKlikk = 0;
var klart = false;
var start = false;
var grense = 67*80;
var navn = "";

var allowed = true;
$(document).keydown(function(event) {
    if (event.repeat != undefined) {
        allowed = !event.repeat;
    }
    if (!allowed) return;
    allowed = false;
});
$(document).keyup(function(e) {
    allowed = true;
});
$(document).focus(function(e) {
    allowed = false;
});


klikkE.addEventListener('click', function () {

    if(klart){
        if(allowed){
            antKlikk += 67;
            klikkverdiE.innerHTML = antKlikk;
            klikkebarE.style.height = 100*antKlikk/grense + "%";
        }
    }
    else if(start){
        klart = true;
        setTimeout(function () {
            db.collection("spill").add({
                navn: navn,
                poeng: antKlikk
            });
            antKlikk=0;
            klart = false;
            start = false;

        }, 5000);
    }
});
startE.addEventListener('click', function () {spill = "ikkeKlart";
   navn = prompt("Skriv inn navnet ditt");
   start = true;
   klikkebarE.style.height = "1%";

});

var mappe = db.collection('spill').orderBy('poeng', 'desc').limit(20);
var topscore = 0;
mappe.onSnapshot(function(data){
    listeE.innerHTML = "";
    var plass = 0;
    var dokumenter = data.docs;
    for(var x in dokumenter){
       plass += 1;
       listeE.innerHTML += "<tr><td>"+ plass +"</td><td>" + dokumenter[x].data().navn + "</td><td> " + dokumenter[x].data().poeng + "</td></tr>"
    }
    topscore = dokumenter[0].data().poeng;

    topscoreE.style.bottom = 100* topscore/grense + "%";
    topscoreE.innerHTML = "Rekord - " + dokumenter[0].data().navn + " - " + topscore + " poeng";

});

