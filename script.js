const coursesContainer = document.getElementById("courses");
const categories = []; // holds all the categories
const categoriesOptions = document.getElementById("categories");
const categoriesFilter = [];
const search_Course=document.getElementById('search_Course');

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
search_Course.addEventListener('keyup',function(course){

  search_Course.onkeyup = (e) => {
    coursesContainer.innerHTML = "";
    let searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      categoriesFilter.map((course) => {
        createCards(course);
      });
    }
    const filteredCategory = categoriesFilter.filter(
      (category) => category.name.includes(searchValue)
    );
// for( let i =0 ; i<categoriesFilter.length; i++){
//   let pr=document.getElementById("search_Course").value.trim();
//   let re=new RegExp(pr)
//  categoriesFilter[i].name.replace(re,`<mark>${pr}</mark>`)
// }   
    filteredCategory.map((course) => {
      createCards(course);
    });
  };
})
console.log(categoriesFilter);
// end the part of search


// Start the part of profile page 
let Profile_Page=document.getElementById('Profile_Page');
let container=document.getElementById('container')
console.log(container);
let list_Obj=[];
let trs=``;
Profile_Page.addEventListener('click',function(){
  if(localStorage.getItem('data')===null){
    list_Obj=[];
  }else{
    list_Obj=JSON.parse(localStorage.getItem('data'));
  }
  if(user){
    console.log('hiii');
    data.current_user = user.id
    console.log('authorized')
    trs+=`
    <form action="" method="post">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="fname" disabled vlaue='${user.name}'/>
    <br />
    <label for="Lname">Last Name</label>
    <input type="text" id="Lname" name="lname" value= '${user.name}'/>
    <br />
    <label for="age">Age</label>
    <input type="number" id="age" name="age" value="25" />
    <br />
    <label for="edu">Education</label>
    <input type="text" id="edu" name="edu" value='Backlory of medicine' />
    <br />
    <label for="university">University</label>
    <input type="text" id="university" name="university" value='Suhaj' />
    <br />
  </form>`;
  console.log('hi from end profile');
container.innerHTML=trs;
}
  
})


// end the part of profile page

