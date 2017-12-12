// Initialize Firebase
var config = {
    apiKey: "AIzaSyDMB7YmJjNwNQhBJniAOD5d940zNW-_2yg",
    authDomain: "form-d7474.firebaseapp.com",
    databaseURL: "https://form-d7474.firebaseio.com",
    projectId: "form-d7474",
    storageBucket: "",
    messagingSenderId: "1019596976724"
};
firebase.initializeApp(config);


//lytte til form-knappen
document.querySelector("#contactForm").addEventListener('submit', submitForm);


var refDb = firebase.database().ref('messages');


function submitForm(e) {
    e.preventDefault();

    var nameE = document.querySelector("#name").value;
    var emailE = document.querySelector("#email").value;
    var phoneE = document.querySelector("#phone").value;
    var messageE = document.querySelector("#message").value;

    var newMessageRef = refDb.push();
    newMessageRef.set({
        name: nameE,
        email: emailE,
        phone: phoneE,
        message: messageE

    });

    document.querySelector(".alert").style.display = 'block';


    setTimeout(function () {
        document.querySelector(".alert").style.display = 'none';

    }, 3000);


    document.querySelector("#contactForm").reset();

}



