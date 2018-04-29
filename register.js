firebase.auth().onAuthStateChanged(function(user){
    if(user) {
        alert("Creating Account...");
        location = 'index.html';
        //window.location = 'StartTest.html';
    }
    else{
    }
});
function register() {

    var userName = document.getElementById("userName").value;
    var userPass = document.getElementById("userPass").value;


    firebase.auth().createUserWithEmailAndPassword(userName, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert("ERROR: " + errorMessage)
    });
}

