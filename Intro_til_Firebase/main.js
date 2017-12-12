var mainTextE = document.querySelector("#mainText");
var submitBtnE = document.querySelector("#submitBtn");
var tabellE = document.querySelector("#tabell");

var refDb = firebase.database().ref().child("Users");

refDb.on("child_added", snap=>{

    var navn = snap.child("navn").val();
    var alder = snap.child("alder").val();

    tabellE.innerHTML += "<tr><td>" + navn + "</td><td>" + alder + "</td></tr>"



});

function submitClick() {

    refDb.child().set(mainTextE.value);
}