var submit = document.getElementById("submit");

var DummyData = {
    users:[

    ],
    current_user:0
}

// hold the local storage 
var data = JSON.parse(localStorage.getItem("data")) || DummyData;

console.log(data)

function onSubmit(e){
    e.preventDefault();
}
submit.addEventListener('click', function () {

    var current_user = {
    }

    var Name = document.getElementById("name").value;
    var userName = document.getElementById("user").value
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;

    // adding user data to current user
    // current_user.id = Math.round(Math.random()*300)
    // current_user.fullName = Name;
    // current_user.userName = userName;
    // current_user.email = Email;
    // current_user.password = Password;



    var patternName = /^[A-Za-z]{3,}(\s[A-Za-z]{3,})+$/i;
    var test = patternName.test(Name);
    if (test !== true) {
        document.getElementById("name").style.border = "1px solid red";
    }

    else {

        document.getElementById("name").style.border = "1px solid green";
        current_user.id = parseInt(Math.random() * 1000);
        current_user.fullName = Name;
    }

    var patternUser = /[A-Za-z._@#$%&*0-9]{3,}/i
    var test = patternUser.test(userName);
    if (test !== true) {
        document.getElementById("user").style.border = "1px solid red";
    }
    else {
        document.getElementById("user").style.border = "1px solid green";
        current_user.userName = userName;
    }
    var patternEmail = /^[A-Za-z0-9_.]{3,}@[A-Za-z]+(\.com)$/;
    var test = patternEmail.test(Email);
    if (test !== true) {
        document.getElementById("email").style.border = "1px solid red";
    }
    else {
        document.getElementById("email").style.border = "1px solid green";
        current_user.email = Email;
    }

    var patternPass = /[A-Za-z0-9._@#$%&*]{8,}$/;
    var test = patternPass.test(Password);
    if (test !== true) {
        document.getElementById("password").style.border = "1px solid red";
    }

    else {
        document.getElementById("password").style.border = "1px solid green";
        current_user.password = Password;
        //alert(Password);
    }

    if (rePassword === "") {
        document.getElementById("rePassword").style.border = "1px solid red";
    } else if (rePassword !== Password) {
        document.getElementById("rePassword").style.border = "1px solid red";
    } else {
        document.getElementById("rePassword").style.border = "1px solid green";
    }

    var objectLength = Object.keys(current_user).length;
    console.log(objectLength);
    if (objectLength === 5) {
        data.users.push(current_user);
        
        console.log(data.users);
        // console.log(current_user);
        // var dataJSON = JSON.stringify(data);
        localStorage.setItem('data', JSON.stringify(data)); //override
    }
});

