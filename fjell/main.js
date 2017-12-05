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

/******************** fjellform ***********************/

// Henter elementer fra index.html (domen)
var fjellForm = document.querySelector('.fjellForm');
var fjellnavnInput = document.querySelector('.fjellnavn');
var mohInput = document.querySelector('.moh');
var bildeInput = document.querySelector('.fjellbilde');
var sendKnapp = document.querySelector('.send');
var statusDiv = document.querySelector('.status');
var progbarDiv = document.querySelector('.bar');
var tempImg = document.querySelector('.tempImg');

// Laster opp fjellform til firestore
sendKnapp.addEventListener('click',function() {
    var storageRef = firebase.storage().ref('it-1/fjell');
    var bilde = bildeInput.files[0];
    var uploadTask = storageRef.child(bilde.name).put(bilde);


    uploadTask.on('state_changed',
        // Progresjon til bildeopplasting
        function(snap){
            statusDiv.innerHTML = Math.round(snap.bytesTransferred/1000)+ 'kb /' +  Math.round(snap.totalBytes/1000) + 'kb';
            progbarDiv.style.width = 100*snap.bytesTransferred/snap.totalBytes + "%";
        },
        // Feilmeldinger
        function(error){console.log(error)},
        // Opplasting av bildet er ferdig, laster nå opp til databasen
        function(){
            // Legger til et nytt dokument i mappen fjell
            db.collection('fjell').add({
                fjellnavn: fjellnavnInput.value,
                moh: mohInput.value*1,
                fjellbilde: uploadTask.snapshot.downloadURL
            });

            statusDiv.innerHTML = "Opplasting ferdig";

            // Resetter og fjerner info i formen etter 2 sekunder
            setTimeout(function () {
                statusDiv.innerHTML = "";
                progbarDiv.style.width = "0";
                fjellForm.reset();
                tempImg.src = "#";
                tempImg.style.display = "none";
            },2000);
        }
    );
});

// Viser bildet man skal laste opp i img.bildeInput i html-filen
bildeInput.addEventListener('change',function(){
        var reader = new FileReader();
        reader.onload = function (e) { tempImg.src = e.target.result}
        reader.readAsDataURL(this.files[0]);
        tempImg.style.display = "block";
});


/**************** fjelloversikt ********************/

// Henter og skriver ut fjellene
var fjelloversiktDiv = document.querySelector('.fjelloversikt');

function test() {
}


var ref = db.collection("fjell");
ref.onSnapshot(function(data){
    fjelloversiktDiv.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        console.log(dokument[x].data().bilde);
        fjelloversiktDiv.innerHTML +=    "<div class='fjellboks' onclick='test()'>"+
                                            "<h3>" + dokument[x].data().fjellnavn + "</h3>"+
                                            "<img src=' " + dokument[x].data().fjellbilde + " '>"+
                                            "<p>" + dokument[x].data().moh + " moh</p>"+
                                        "</div>";
    }

});




