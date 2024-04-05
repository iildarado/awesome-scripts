
let inputPassword = document.getElementById('inputPassword'); 
let eyeImage = document.getElementById('eyeImage');

function showAndHide() {
    if (inputPassword.type == 'password') {
        inputPassword.type = 'text';
        eyeImage.src = 'images/eye-open.png';
    } 
    else {
        inputPassword.type = 'password';
        eyeImage.src = 'images/eye-close.png';
    }
}