function sendPw(){
    var auth = firebase.auth();
    var emailAddress = document.getElementById("email").value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {

        // Email sent.
        alert("Sending email...");
        location = 'return.html';
    }).catch(function(error) {

        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("ERROR: " + errorMessage);
        location = 'index.html'

    });
}