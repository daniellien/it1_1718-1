firebase.initializeApp({
    apiKey: 'AIzaSyANTbLujDuLG-j6kfijLJ3z4H2kDrhM24E',
    authDomain: 'screencast-53eb9.firebaseapp.com',
    projectId: 'screencast-53eb9'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var navnInput = document.querySelector('navn');
var alderInput = document.querySelector('alder');
var knappButton = document.querySelector('knapp');


knappInput.addEventListener('click', function (e) {
    e.preventDefault();

    alert("asd");

});

/*
db.collection('personer').add({
    navn: "Steinar",
    alder: 38
});
*/
