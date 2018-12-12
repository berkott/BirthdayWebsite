var wrong = 0;

function checkPassword(){
    var input = $("#password").val();
    if(input == "puppy"){
        correctPassword();
    } else {
        wrong++;
        $("#wrong-pass").html("<p class=\"wrongText\">Wrong Password "+wrong+"</p>")
    }
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

$(document).ready(function() {
    $("#password-page").show();
});