import courses from "../coursesData.json" assert { type: "json" };

const container = document.getElementById("container");
const pragraph = document.createElement("p");

var courseCard;
var userCourses;
var data = JSON.parse(localStorage.getItem("data"));
if (data != null) {
  var users = data.users;
  for (var i in users) {
    userCourses = data.users[i].courses;
    if (users[i].id == data.current_user && userCourses.length !== 0) {
      for (var courseId in userCourses) {
        var currentCourse = courses.courses.find(
          (course) => course.id === userCourses[courseId]
        );

        courseCard = document.createElement("div");
        courseCard.innerHTML = `<img src="${currentCourse.image}"/>
                                    <h2 class="course-name">${currentCourse.name}</h2>
                                    <p class="instructor">${currentCourse.instructor}</p>
                                    <p class="rating">Rating: ${currentCourse.rating}</p>`;
        container.appendChild(courseCard);
      }
    } else if (users[i].id == data.current_user && userCourses.length == 0) {
      pragraph.innerText = "no courses added";
      pragraph.className = "no-courses";
      container.appendChild(pragraph);
    }
  }
} else {
  pragraph.innerHTML = `<p>no courses added you aren't log in please <a href="../login/login.html">log in</a>`;
  pragraph.className = "no-courses";
  container.appendChild(pragraph);
}

// addition for nav

var logo = document.getElementById("logo");

logo.onclick = function () {
  window.location.href = "./";
};

var dropDown = document.getElementById("user");
var user_icon = document.getElementById("user_icon");
user_icon.onclick = function disp() {
  dropDown.style.display = dropDown.style.display != "flex" ? "flex" : "none";
};

// log in and out

var localstorageData = JSON.parse(localStorage.getItem("data")) || {
  current_user: 0,
  users: [],
};
localStorage.setItem("data", JSON.stringify(localstorageData));

var data = JSON.parse(localStorage.getItem("data"));
var isloggedIn = data.current_user || 0;
var register = document.getElementById("Profile_Page");
var log = document.getElementById("log");
if (isloggedIn === 0) {
  register.innerHTML = `<i  class="fa-solid fa-circle-user"></i> Register`;
  register.setAttribute("href", "../singup/index.html");
  log.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Login`;
  log.setAttribute("href", "../login/login.html");
} else {
  register.innerHTML = `<i  class="fa-solid fa-circle-user"></i> Profile`;
  register.setAttribute("href", "../profile page/index.html");
  log.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Logout`;
  log.setAttribute("href", "../login/login.html");
}
