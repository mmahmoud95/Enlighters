import courses from "../coursesData.json" assert { type: "json" };

var courseID = window.location.href.split("?")[1].split("=")[1];
var courseContainer = document.getElementById("course");

var currentCourse = courses.courses.find((course) => course.id == courseID);
var content = document.createTextNode("");
courseContainer.innerHTML = `
        <div class="name">
            <h1>${currentCourse.name}</h1>
        
               <button id="enroll" class="enroll-btn" typy="submit">  <a href="../myCourses/index.html">Enroll</a></button>
       
        </div>
        <p> Created By: ${currentCourse.instructor}</p>
        <div class='des'>
            <img class="img" src="${currentCourse.image}" alt="${currentCourse.name}">
            <div class="content">
                <h2>Description</h2>
                <p>${currentCourse.description}</p>
            </div>
        </div>
`;

//////////////////////////////////////////////////////////////push course to my courses page
var data = JSON.parse(localStorage.getItem("data"));
var currentuserID = data.current_user;

var userIndex = data.users.findIndex((user) => user.id === currentuserID);
console.log(userIndex);
if (currentuserID != 0) {
    var myCourses = data.users[userIndex].courses;
}
///////////////////////
var enroll = document.getElementById("enroll");
if (data != null && currentuserID != 0) {
    enroll.addEventListener("click", () => {
        console.log(data.users);
        myCourses = data.users[userIndex].courses || [];
        myCourses.push(currentCourse.id);
        data.users[userIndex].courses = myCourses;
        localStorage.setItem("data", JSON.stringify(data)); //override
        alert("your have enrolled now - page redirect to My Courses page");
    });
} else {
    enroll.addEventListener("mouseover", () => {
        alert("you have to login");
    });
}
////////////////////////
for (const i in myCourses) {
    if (myCourses[i] == currentCourse.id) {
        enroll.classList.add("enrolled");
    }
}
