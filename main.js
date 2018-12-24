firebase.initializeApp({
    apiKey: 'AIzaSyAGrFYgDymrWJjvtYFnbqtVgzn7OpCoxaI',
    authDomain: 'birthdaywebsite-7743f.firebaseapp.com',
    projectId: 'birthdaywebsite-7743f'
});

var functions = firebase.functions();

var wrong = 0;

function checkPassword(){
    var email = $("#email").val();
    var password = $("#password").val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            wrong++;
            $("#wrong-pass").html("<p class=\"wrongText\">Wrong Password "+wrong+"</p>")} 
        else {
            console.log(errorMessage);
        }
     });
}

function checkInit(){
    firebase.auth().onAuthStateChanged(function(user) { 
        console.log(user);
        if (user) {
            correctPassword();
        } else {
            loadLogin();
        }
    });
}


function correctPassword(){
    $("#password-page").hide();
    if(Date.now() >= 1545890400 && Date.now() <= 1545976800){
        $("#yay-page").show();
        $.confetti.start();
        startFirebase();
    } else {
        $("#wait-page").show();
    }
}

function loadLogin(){
    $("#password-page").show();
}

$(document).ready(function() {
    checkInit();
});