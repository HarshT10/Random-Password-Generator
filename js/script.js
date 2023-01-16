let output = document.getElementById("password-output");
let radioBtn = document.getElementsByClassName("radio");
let btn = document.getElementById("btn");

class Password {
    constructor() {
        console.log("Welcome to Password Generator");
    }
    weakPassword() {
        let charset = "abcdefghijklmnopqrstwxyz";
        let password = "";
        let n = charset.length;

        for (let i = 0; i < 6; i++) {
            password += charset.charAt(Math.floor(Math.random() * n))
        }
        return password
    }
    mediumPassword() {
        let charset = "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ";
        let password = "";
        let n = charset.length;

        for (let i = 0; i < 7; i++) {
            password += charset.charAt(Math.floor(Math.random() * n))
        }
        return password

    }
    strongPassword() {
        let charset = "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ1234567890";
        let password = "";
        let n = charset.length;

        for (let i = 0; i < 10; i++) {
            password += charset.charAt(Math.floor(Math.random() * n))
        }
        return password
    }
    superStrongPassword() {
        let charset = "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ1234567890!@#$%^&*()_+-=[]{};':,.<>/?\\";
        let password = "";
        let n = charset.length;

        for (let i = 0; i < 13; i++) {
            password += charset.charAt(Math.floor(Math.random() * n))
        }
        return password
    }
}


let pass = new Password();

btn.addEventListener("click", () => {
    let b;
    if (radioBtn[0].checked) {
        b = pass.weakPassword()
    } else if (radioBtn[1].checked) {
        b = pass.mediumPassword()
    } else if (radioBtn[2].checked) {
        b = pass.strongPassword()
    } else if (radioBtn[3].checked) {
        b = pass.superStrongPassword()
    }
    output.value = b
})
