
function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert("Logging out...");
        location = "index.html";
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert("ERROR: " + errorMessage)
        // An error happened.
    });
}