firebase.initializeApp({
    apiKey: 'AIzaSyDtcYCPFrc1nvml-VCDdgSgQF44d2hs8xE',
    authDomain: 'fires-d29e9.firebaseapp.com',
    projectId: 'fires-d29e9',
    storageBucket: "fires-d29e9.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelInput = document.querySelector('.tittel');
var beskrivelseInput = document.querySelector('.beskrivelse');
var bildeInput = document.querySelector('.bilde');
var sendKnapp = document.querySelector('.send');

sendKnapp.addEventListener('click', function () {
   //alert(tittelInput.value + " " + beskrivelseInput.value + " " + bildeInput.files[0].name);

    var storageRef = firebase.storage().ref('it-1/filmer');
    var bilde = bildeInput.files[0];
    var uploadTask = storageRef.child(bilde.name).put(bilde);

    uploadTask.on('state_changed', function (snap) {
        console.log(snap.bytesTransferred + '/' + snap.totalBytes);
    },function (err) {
        console.log(err);
    },function () {
        console.log(uploadTask.snapshot.downloadURL);
        db.collection('filmer').add({
            tittel: tittelInput.value,
            beskrivelse: beskrivelseInput.value,
            bilde: uploadTask.snapshot.downloadURL
        })
    });
});

