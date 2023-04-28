let mob_email = document.getElementById("email")
let Name = document.getElementById("name")
let username = document.getElementById("Uname")
let password = document.getElementById("pass")
let flag = 1
function validateForm() {
    if (mob_email.value == "") {
        document.getElementById("mob-error").innerHTML = "Please enter Mobile-number or email-address";
        flag = 0
    } else if (mob_email.value.length < 11) {
        document.getElementById("mob-error").innerHTML = "Please enter maximum 10 character";
        flag = 0
    } else {
        document.getElementById("mob-error").innerHTML = "";
        flag = 1
    }


    if (Name.value == "") {
        document.getElementById("name-error").innerHTML = "Please enter Your Name";
        flag = 0
    } else {
        document.getElementById("name-error").innerHTML = "";
        flag = 1
    }


    if (username.value == "") {
        document.getElementById("user-error").innerHTML = "Please enter Username";
        flag = 0
    } else if (username.value.length < 5) {
        document.getElementById("user-error").innerHTML = "Please enter maximum 5 character";
        flag = 0
    } else {
        document.getElementById("user-error").innerHTML = "";
        flag = 1
    }


    if (password.value == "") {
        document.getElementById("pass-error").innerHTML = "Please enter Password";
        flag = 0
    } else if (password.value.length < 5) {
        document.getElementById("pass-error").innerHTML = "Please enter maximum 5 character";
        flag = 0
    } else {
        document.getElementById("pass-error").innerHTML = "";
        flag = 1
    }


    if (flag) {
        return true
    } else {
        return false
    }
}