import courses from "../coursesData.json" assert { type: "json" };

var courseID = window.location.href.split("?")[1].split("=")[1];
var courseContainer = document.getElementById("course");

var currentCourse = courses.courses.find((course) => course.id == courseID);

courseContainer.innerHTML = `
<div class="name">
<h1>${currentCourse.name}</h1>

<button class="${
    currentCourse.userEnrolled ? "enrolled" : " enroll"
}" id="enroll">${currentCourse.userEnrolled ? "Enrolled" : " Enroll"}</button>

</diV>
<p> Created By: ${currentCourse.instructor}</p>
<div class='des'>
<img class="img" src="${currentCourse.image}" alt="${currentCourse.name}">
<div class="content">
<h2>Description</h2>
<p>${currentCourse.description}</p>
</div>
</div>
`;

var enroll = document.getElementById("enroll");

enroll.addEventListener("click", () => {
    var data = JSON.parse(localStorage.getItem("data"));
    var currentuserID = data.current_user;
    var userIndex = data.users.findIndex((user) => user.id === currentuserID);
    var myCourses = data.users[userIndex].courses || [];

    myCourses.push(currentCourse.id);
    data.users[userIndex].courses = myCourses;

    localStorage.setItem("data", JSON.stringify(data)); //override
    // console.log(data.users[userIndex]);
});

var storage = JSON.parse(localStorage.getItem("data"));

if (storage !== null) {
    var myCourses = JSON.parse(localStorage.getItem("data"));
    // console.log(myCourses);
}
