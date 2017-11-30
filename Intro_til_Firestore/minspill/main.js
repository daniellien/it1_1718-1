// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC51q4KXo01O5QykjM767NZA4al08Q0HZ0",
    authDomain: "minispill-ded9e.firebaseapp.com",
    projectId: "minispill-ded9e"
});
var db = firebase.firestore();

var klikkverdi = 0;
var klikkverdiE = document.querySelector("#klikkverdi");
var navnE = document.querySelector("#navn");
var poenglisteE = document.querySelector("#poengliste");

var ref = db.collection("brukere");
var orderQuaery = ref.orderBy("poeng", "desc");

orderQuaery.onSnapshot(function(data){
    for(var x in objekt)
        poenglisteE.innerHTML += "<li>" + objekt[x].data().navn + " " +  objekt[x].data().poeng + "</li>";
});

function klikk() {
    //øker klikkverdien med 1
    klikkverdi++;
    klikkverdiE.innerHTML = klikkverdi;
}

function start() {
    klikkverdi=0;
    klikkverdiE.innerHTML = klikkverdi;

    setTimeout(function () {
        db.collection("brukere").add({
            navn: navnE.value,
            poeng: klikkverdi
        });
        alert("Du fikk " + klikkverdi + " poeng!" )

    },4000);
}



