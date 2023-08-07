const container = document.getElementById("container");
const pragraph = document.createElement("p");
// const courseCard = document.createElement("div");
var courseCard;
var myCourses;
var storage = JSON.parse(localStorage.getItem("mycourses"));
if (storage !== null) {
    myCourses = JSON.parse(localStorage.getItem("mycourses"));
    for (const i in myCourses) {
        console.log(myCourses);
        courseCard = document.createElement("div");
        courseCard.innerHTML = `<img src="${myCourses[i].image}"/>
                                <h2 class="course-name">${myCourses[i].name}</h2>
                                <p class="instructor">${myCourses[i].instructor}</p>
                                <p class="rating">Rating: ${myCourses[i].rating}</p>`;
        container.appendChild(courseCard);
    }
} else {
    pragraph.innerText = "no courses added";
    pragraph.className = "no-courses";
    container.appendChild(pragraph);
}
