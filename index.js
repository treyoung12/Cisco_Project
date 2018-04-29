firebase.auth().onAuthStateChanged(function(user){
    if(user) {
        alert("Logging In...");
        location = 'StartTest.html';
        //window.location = 'StartTest.html';
    }
    else{
    }
});

function login() {

    var userName = document.getElementById("userName").value;
    var userPass = document.getElementById("userPass").value;

    //window.location = "StartTest.html";

    firebase.auth().signInWithEmailAndPassword(userName, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("ERROR: " + errorMessage);

    });
}


