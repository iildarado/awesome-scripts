let passwordBox = document.getElementById('passwordBox');
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

inputPassword.addEventListener('input', () => {
    let passwordLength = inputPassword.value.length;
    if (passwordLength > 0) {
        if (passwordLength < 6) {
            passwordBox.classList.add('easy-password');
            passwordBox.classList.remove('normal-password');
        } else if (passwordLength > 5 && passwordLength < 9) {
            passwordBox.classList.add('normal-password');
            passwordBox.classList.remove('easy-password');
            passwordBox.classList.remove('strong-password');
        } else {
            passwordBox.classList.add('strong-password');
            passwordBox.classList.remove('normal-password');
        }
    } else {
        passwordBox.classList.remove('easy-password');
        passwordBox.classList.remove('normal-password');
        passwordBox.classList.remove('strong-password');
    }
});

function checkDifficultyOfPassword() {
    
}