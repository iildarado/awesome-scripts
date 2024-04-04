
const passwordBox = document.getElementById("password");

function generatePassword()  {
    let passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}\\|;:,<.>/?";
    let passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    }

    passwordBox.value = password;
    return password;
}

function toCopyTmp() {
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("Copied the text: " + passwordBox.value);
}
