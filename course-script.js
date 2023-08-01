import courses from './coursesData.json' assert { type: 'json' };

var courseID = window.location.href.split('?')[1].split('=')[1]

var courseContainer = document.getElementById('course')

var currentCourse = courses.courses.find((course)=>course.id == courseID)

courseContainer.innerHTML = `
<h1>${currentCourse.name}</h1>
<img src="${currentCourse.image}" alt="${currentCourse.name}">
<p>${currentCourse.longDescription}</p>`