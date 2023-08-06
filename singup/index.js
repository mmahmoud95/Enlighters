var submit = document.getElementById("submit");

submit.addEventListener('mouseover', function () {
    var Name = document.getElementById("name");
    var userNmae = document.getElementById("user").value
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;

    var nameValue = Name.value
    var userValue = userNmae.value
    var emailValue = Email.value
    var passwordValue = Password.value
    var rePasswordValue = rePassword.value

    Name.value = nameValue;
    userNmae.value = userValue;
    Email.value = emailValue;
    Password.value = passwordValue;
    rePassword.value = rePasswordValue;

    console.log(Name);
    var patternName = /^[A-Za-z]{3,}()[A-Za-z]{4,}$/
    var test = patternName.test(Name);
    if (test !== true) {
        document.getElementById("name").style.border = "1px solid red";

    }
    else {
        document.getElementById("name").style.border = "1px solid green";

    }

    var patternUser = /^[A-Z]{3,}[0-9]{4,}$/i
    var test = patternUser.test(userNmae);
    if (test !== true) {
        document.getElementById("user").style.border = "1px solid red";
    }
    else {
        document.getElementById("user").style.border = "1px solid green";
    }

    var patternEmail = /^[A-Za-z]{3,}@[a-z]{5,}(.com)$/
    var test = patternEmail.test(Email);
    if (test !== true) {
        document.getElementById("email").style.border = "1px solid red";
    }
    else {
        document.getElementById("email").style.border = "1px solid green";
    }
    var patternPass = /[A-Za-z0-9].*[#$@%*&]{8,}$/;
    var test = patternPass.test(passwordValue);
    if (test !== true) {
        document.getElementById("password").style.border = "1px solid red";
    }
    else {
        document.getElementById("password").style.border = "1px solid green";
    }

    if (rePasswordValue === "") {
        document.getElementById("rePassword").style.border = "1px solid red";
    } else if (rePasswordValue !== passwordValue) {
        document.getElementById("rePassword").style.border = "1px solid red";
    } else {
        document.getElementById("rePassword").style.border = "1px solid green";
    }
});