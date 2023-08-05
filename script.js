var coursesContainer = document.getElementById("courses");

const xhttp = new XMLHttpRequest();
xhttp.open("GET", "./coursesData.json", true);
xhttp.onload = function() {
    var response = JSON.parse(this.response)
    response.courses.map((course) => {
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
  }
xhttp.send();




var logo = document.getElementById('logo')

logo.onclick = function () {
    window.location.href = './'
}

var dropDown = document.getElementById('user')
var user_icon = document.getElementById('user_icon')
user_icon.onclick = function disp(){
  
    dropDown.style.display = ((dropDown.style.display!='flex') ? 'flex' : 'none')

}


