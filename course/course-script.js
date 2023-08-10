import courses from "../coursesData.json" assert { type: "json" };

var courseID = window.location.href.split("?")[1].split("=")[1];
var courseContainer = document.getElementById("course");

var currentCourse = courses.courses.find((course) => course.id == courseID);
var content = document.createTextNode("Enroll");
courseContainer.innerHTML = `
        <div class="name">
            <h1>${currentCourse.name}</h1>
             <form action="../mycourses/index.html">
               <button id="enroll" class="enroll-btn" type="submit">${content.nodeValue}</button>
             </form>
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
var data = JSON.parse(localStorage.getItem("data"));
var currentuserID = data.current_user;
var userIndex = data.users.findIndex((user) => user.id === currentuserID);
var coursesUser = data.users[userIndex].courses;
console.log(coursesUser);
var enroll = document.getElementById("enroll");
for (const i in coursesUser) {
    if (coursesUser[i] == currentCourse.id) {
        enroll.classList.add("enrolled");
        content.nodeValue = "s";
        console.log(content.nodeValue);
    }
}

enroll.addEventListener("click", () => {
    var myCourses = data.users[userIndex].courses || [];
    myCourses.push(currentCourse.id);
    data.users[userIndex].courses = myCourses;
    localStorage.setItem("data", JSON.stringify(data)); //override
});
