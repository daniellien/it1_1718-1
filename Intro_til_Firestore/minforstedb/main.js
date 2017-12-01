firebase.initializeApp({
    apiKey: "AIzaSyAHCm4SiyFJT08FItBJW1y_LmGW7CQkniI",
    authDomain: "minforstedb1.firebaseapp.com",
    projectId: "minforstedb1"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelE = document.querySelector('.tittel');
var tekstE = document.querySelector('.tekst');
var knappE = document.querySelector('.knapp');

knappE.addEventListener('click', function () {
    db.collection("mappe").add({
        tittel: tittelE.value,
        tekst: tekstE.value
    });
    tittelE.value = "";
    tekstE.value = "";
});


