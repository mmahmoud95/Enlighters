const coursesContainer = document.getElementById("courses");
const categories = []; // holds all the categories
const categoriesOptions = document.getElementById("categories");
const categoriesFilter = [];
const search_Course = document.getElementById("search_Course");

// this function below to minimize duplicatation of creating cards

function createCards(course) {
  let card = document.createElement("div");
  let span = document.createElement("span");
  span.innerHTML = course.categories;
  span.classList.add("category");
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
  card.appendChild(span);
}

// ajax request starts
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "./coursesData.json", true);
// here we must put all the logic that depending on the data in the onload function below
xhttp.onload = function () {
  var response = JSON.parse(this.response);

  response.courses.map((course) => {
    categoriesFilter.push(course);
    if (!categories.includes(course.categories)) {
      // push all the categories into the array if not already there
      categories.push(course.categories);
    }
    createCards(course);
  });

  // Create options from categories

  categories.map((category) => {
    let option = document.createElement("option");
    option.value = category;
    option.innerHTML = category;
    categoriesOptions.appendChild(option);
  });
};
xhttp.send();

// ajax ended successfully

// activating the filter  --
categoriesOptions.onchange = (e) => {
  coursesContainer.innerHTML = "";
  let avtiveCategory = e.target.value;
  if (avtiveCategory === "All Courses") {
    categoriesFilter.map((course) => {
      createCards(course);
    });
  }
  const filteredCategory = categoriesFilter.filter(
    (category) => category.categories === avtiveCategory
  );
  filteredCategory.map((course) => {
    createCards(course);
  });
};

//  filter ended

var logo = document.getElementById("logo");

logo.onclick = function () {
  window.location.href = "./";
};

var dropDown = document.getElementById("user");
var user_icon = document.getElementById("user_icon");
user_icon.onclick = function disp() {
  dropDown.style.display = dropDown.style.display != "flex" ? "flex" : "none";
};

//*********************** */
//start the Part of search

search_Course.addEventListener("keyup", function (course) {
  search_Course.onkeyup = (e) => {
    coursesContainer.innerHTML = "";
    let searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      categoriesFilter.map((course) => {
        createCards(course);
      });
    }
    const filteredCategory = categoriesFilter.filter((category) => {
      if (category.name.includes(searchValue)) {
        let pr = searchValue.trim();
        console.log(pr);
        let re = new RegExp(pr);
        // console.log(category.name);

        console.log(re);
        let res = category.name.replace(re, `<mark>${pr}</mark>`);
        let t1 = toString(category.name);

        console.log(typeof t1);
        return `<mark>${t1}</mark>`;
      }
    });
    filteredCategory.map((courses) => {
      // courses=courses.toLowerCase()
      createCards(courses);
    });
  };
});
console.log(categoriesFilter);

// end the part of search
