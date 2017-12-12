firebase.initializeApp({
    apiKey: "AIzaSyDtcYCPFrc1nvml-VCDdgSgQF44d2hs8xE",
    authDomain: "fires-d29e9.firebaseapp.com",
    projectId: "fires-d29e9"
});
var db = firebase.firestore();


db.collection('mappe').add({

});


var usersRef = db.collection("users");
var query = usersRef.where("first", "==", "Geir");
var orderQuaery = usersRef.orderBy("first");


//henter elementer fra domen
var listeE = document.querySelector("#liste");

orderQuaery.get().then(function(data){

    var brukere = data.docs;
    for(var x in brukere)
        //console.log(brukere[x].data().first);
        listeE.innerHTML += "<li>" + brukere[x].data().first + "</li>";
});


/*
db.collection("users").add({
    first: "Geir",
    last: "Lovelace",
    born: 1815
});

db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
});

*/