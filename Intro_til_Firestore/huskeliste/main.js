firebase.initializeApp({
    apiKey: "AIzaSyAJZUW-NruXBLi3LVOnaWpYWb0DFyOngV4",
    authDomain: "huskeliste-beb5f.firebaseapp.com",
    projectId: "huskeliste-beb5f"
});
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var todoE = document.querySelector(".todo");
var knappE = document.querySelector(".knapp");
var listeE = document.querySelector(".huskeliste")

knappE.addEventListener("click", function () {
    db.collection("huskeliste").add({
        todo: todoE.value,
        done: "Nei"
    });
    todoE.value = "";
});

var ref = db.collection("huskeliste");
//var orderQuery = ref.orderBy("done", "desc");

ref.onSnapshot(function(data){
    listeE.innerHTML = "";
    var objekt = data.docs;
    for(var x in objekt)
        listeE.innerHTML += "<li>" + objekt[x].data().todo + "<button onclick='slettTodo(\"" + objekt[x].id + "\")'> Slett </button></li>";
});

function slettTodo(id) {
    db.collection("huskeliste").doc(id).delete();
}