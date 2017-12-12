// Initialize Firebase
var config = {
    apiKey: "AIzaSyC51q4KXo01O5QykjM767NZA4al08Q0HZ0",
    authDomain: "minispill-ded9e.firebaseapp.com",
    databaseURL: "https://minispill-ded9e.firebaseio.com",
    projectId: "minispill-ded9e",
    storageBucket: "",
    messagingSenderId: "223797110619"
};
firebase.initializeApp(config);

var klikkverdi = 0;
var klikkverdiE = document.querySelector("#klikkverdi");
var navnE = document.querySelector("#navn");
var poenglisteE = document.querySelector("#poengliste");

var ref = firebase.database().ref("brukere");

ref.orderBy('verdi').on('value', gotData);

function gotData(data) {
    var objekt = data.val();
    poenglisteE.innerHTML = "";
    for(x in objekt){
        console.log(objekt[x].navn + " " + objekt[x].poeng);

        poenglisteE.innerHTML +=
            "<li>"+
                objekt[x].navn + " " + objekt[x].poeng +
            "</li>";

    }
}

function klikk() {
    //øker klikkverdien med 1
    klikkverdi++;
    klikkverdiE.innerHTML = klikkverdi;
}

function start() {
    klikkverdi=0;
    klikkverdiE.innerHTML = klikkverdi;

    setTimeout(function () {
        ref.push({
            navn: navnE.value,
            poeng: klikkverdi
        });
        alert("Du fikk " + klikkverdi + " poeng!" )

    },4000);
}



