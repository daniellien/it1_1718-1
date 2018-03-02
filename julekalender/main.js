
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtcYCPFrc1nvml-VCDdgSgQF44d2hs8xE",
    authDomain: "fires-d29e9.firebaseapp.com",
    databaseURL: "https://fires-d29e9.firebaseio.com",
    projectId: "fires-d29e9",
    storageBucket: "fires-d29e9.appspot.com",
    messagingSenderId: "1039334080742"
};
firebase.initializeApp(config);

var db = firebase.firestore();

/***Legge til 24 luker
for(var lukenummer = 1; lukenummer<=24; lukenummer++){
    db.collection("julekalender").add({
        luke: lukenummer
    });
}
*/

var pakkerE = document.querySelector('.pakker');

var ref = db.collection('julekalender');

var query = ref.where('luke', '==', 12);


query.onSnapshot(function (data) {
    var objekt = data.docs;

    for(var x in objekt){

        pakkerE.innerHTML +=    "<div class='luke'>"+
                                    objekt[x].data().luke +
                                "</div>";
    }
});