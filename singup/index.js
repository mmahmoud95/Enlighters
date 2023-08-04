var submit = document.getElementById("submit");

submit.addEventListener('click', function () {
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
    var patternName = /^[A-Za-z]{3,}( )[A-Za-z]{4,}$/
    var test = patternName.test(Name);
    if (test !== true) {
        document.getElementById("name").style.border = "1px solid red";

    }

    var patternUser = /^[A-Za-z]{3,}[0-9]{4,}$/
    var test = patternUser.test(userNmae);
    if (test !== true) {
        document.getElementById("user").style.border = "1px solid red";
    }

    var patternEmail = /^[A-Za-z]{3,}@[a-z]{5,}(.com)$/
    var test = patternEmail.test(Email);
    if (test !== true) {
        document.getElementById("email").style.border = "1px solid red";
    }
    var patternPass = /[A-Za-z0-9].*[#$@%*&]{8,}$/;
    var test = patternPass.test(Password);
    if (test !== true) {
        document.getElementById("password").style.border = "1px solid red";
    }
    if (rePassword !== Password) {
        document.getElementById("password").style.border = "1px solid red";
    }
});