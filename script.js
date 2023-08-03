import courses from "./coursesData.json" assert { type: "json" };

var coursesContainer = document.getElementById("courses");

courses.courses.map((course) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.onclick = function () {
        window.location.href = `./course/course.html?id=${course.id}`;
    };
    card.id = course.id;
    card.innerHTML = `
    <div class="img">
        <img src="${course.image}" alt="">

</div>
<div class="text">
    <h4>${course.name}</h4>
    <div class="details">
        <p>Created by ${course.instructor}</p>
        <p>${course.rating}/5 <i class="fa-solid fa-star"></i></p>
        
    </div>
</div>`;

    coursesContainer.appendChild(card);
});


var logo = document.getElementById('logo')

logo.onclick = function () {
    window.location.href = './'
}

