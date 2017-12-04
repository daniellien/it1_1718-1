firebase.initializeApp({
    apiKey: "AIzaSyDtcYCPFrc1nvml-VCDdgSgQF44d2hs8xE",
    authDomain: "fires-d29e9.firebaseapp.com",
    databaseURL: "https://fires-d29e9.firebaseio.com",
    projectId: "fires-d29e9",
    storageBucket: "fires-d29e9.appspot.com",
    messagingSenderId: "1039334080742"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var fjellnavnInput = document.querySelector('.fjellnavn');
var mohInput = document.querySelector('.moh');
var bildeInput = document.querySelector('.fjellbilde');
var sendKnapp = document.querySelector('.send');

sendKnapp.addEventListener('click', function () {
    var storageRef = firebase.storage().ref('it-1/fjell');
    var bilde = bildeInput.files[0];
    var uploadTask = storageRef.child(bilde.name).put(bilde);

    uploadTask.on('state_changed',
        function (){},
        function (){},
        function (){
            db.collection('fjell').add({
                fjellnavn: fjellnavnInput.value,
                moh: mohInput.value*1,
                fjellbilde: uploadTask.snapshot.downloadURL
            });
        }
    );
});


