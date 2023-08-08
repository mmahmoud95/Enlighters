import courses from "../coursesData.json" assert { type: "json" };

const container = document.getElementById("container");
const pragraph = document.createElement("p");
// const courseCard = document.createElement("div");
var courseCard;

var data = JSON.parse(localStorage.getItem("data"));
var users = data.users;
// var userCourse = storage.users[0].courses;

if (data) {
    for (const i in users) {
        if (users[i].id == data.current_user) {
            var userCourses = data.users[i].courses;
            for (const courseId in userCourses) {
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
        } else {
            pragraph.innerText = "no courses added";
            pragraph.className = "no-courses";
            container.appendChild(pragraph);
        }
    }
}
