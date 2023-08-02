import courses from '../coursesData.json' assert { type: 'json' };

var courseID = window.location.href.split('?')[1].split('=')[1]

var courseContainer = document.getElementById('course')

var currentCourse = courses.courses.find((course)=>course.id == courseID)

courseContainer.innerHTML = `
<div class="name">
<h1>${currentCourse.name}</h1>
<button class="${currentCourse.userEnrolled ? "enrolled" : " enroll"}">${currentCourse.userEnrolled ? "Enrolled" : " Enroll"}</button>
</diV>
<p> Created By: ${currentCourse.instructor}</p>
<div class='des'>
<img class="img" src="${currentCourse.image}" alt="${currentCourse.name}">
<div class="content">
<h2>Description</h2>
<p>${currentCourse.description}</p>
</div>
</div>
`