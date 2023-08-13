var submit = document.getElementById("submit");

// Create pattern
var Name = document.getElementById("name");
var namePattern = /^[A-za-z]{3,}(\s)[A-Za-z]/;
var userName = document.getElementById("user");
var userPattern = /^[A-za-z]{3,}/;
var Email = document.getElementById("email");
var userEmail = /^[A-za-z0-9_.]{3,}(@)[A-Za-z]{3,}(.com)/;
var Password = document.getElementById("password");
var passwordPattern = /[A-Za-z0-9]{8,}/;
var rePassword = document.getElementById("rePassword");

// Create events
Name.onchange = function () {
    if (!namePattern.test(Name.value)) {
        Name.style.border = "1px solid red";
    } else {
        Name.style.border = "1px solid green";
    }
};

userName.onchange = function () {
    if (!userPattern.test(userName.value)) {
        userName.style.border = "1px solid red";
    } else {
        userName.style.border = "1px solid green";
    }
};

Email.onchange = function () {
    if (!userEmail.test(Email.value)) {
        Email.style.border = "1px solid red";
    } else {
        Email.style.border = "1px solid green";
    }
};
Password.onchange = function () {
    if (!passwordPattern.test(Password.value)) {
        Password.style.border = "1px solid red";
    } else {
        Password.style.border = "1px solid green";
    }
};

// hold the local storage

submit.onclick = function () {
    var DummyData = {
        users: [],
        current_user: 0,
    };
    var data = JSON.parse(localStorage.getItem("data")) || DummyData;

    var current_user = {
        id: 0,
        fullName: "",
        userName: "",
        email: "",
        password: "",
        courses: [],
    };

    var id = Math.round(Math.random() * 200);
    current_user.id = id;
    current_user.fullName = Name.value;
    current_user.userName = userName.value;
    current_user.email = Email.value;
    current_user.password = Password.value;
    data.users.push(current_user);
    if (
        namePattern.test(Name.value) &&
        userPattern.test(userName.value) &&
        userEmail.test(Email.value) &&
        passwordPattern.test(Password.value)
    ) {
        
        localStorage.setItem("data", JSON.stringify(data)); //override
    }
};

function onSubmit(e){
    e.preventDefault();
    window.location.href = `../login/login.html`;
}