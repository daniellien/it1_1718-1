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

var fjellForm = document.querySelector('.fjellForm');
var fjellnavnInput = document.querySelector('.fjellnavn');
var mohInput = document.querySelector('.moh');
var bildeInput = document.querySelector('.fjellbilde');
var sendKnapp = document.querySelector('.send');
var statusDiv = document.querySelector('.status');
var progbarDiv = document.querySelector('.bar');
var tempImg = document.querySelector('.tempImg');

sendKnapp.addEventListener('click',function() {

    var storageRef = firebase.storage().ref('it-1/fjell');
    var bilde = bildeInput.files[0];
    var uploadTask = storageRef.child(bilde.name).put(bilde);
    var klientIp;
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        klientIp = data.ip
    });

    uploadTask.on('state_changed',
        function(snap){
            statusDiv.innerHTML = Math.round(snap.bytesTransferred/1000)+ 'kb /' +  Math.round(snap.totalBytes/1000) + 'kb';
            progbarDiv.style.width = 100*snap.bytesTransferred/snap.totalBytes + "%";
        },
        function(){},
        function(){
            db.collection('fjell').add({
                fjellnavn: fjellnavnInput.value,
                moh: mohInput.value*1,
                fjellbilde: uploadTask.snapshot.downloadURL,
                klientIp: klientIp
            });

            statusDiv.innerHTML = "Opplasting ferdig";

            setTimeout(function () {
                statusDiv.innerHTML = "";
                progbarDiv.style.width = "0";
                fjellForm.reset();
                tempImg.src = "#";
                tempImg.style.display = "none";
            },1000);
        }
    );
});

//Viser bildet man skal laste opp i img.bildeInput i html-filen
bildeInput.addEventListener('change',function(){
        var reader = new FileReader();
        reader.onload = function (e) {
            tempImg.src = e.target.result;
        }
        reader.readAsDataURL(this.files[0]);
        tempImg.style.display = "block";

});