// Exercise #4 (sugerencia filter() e includes())
// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
console.log("----------------- EXCERCISE 4 ----------------- ")
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(course) {
  return student2Courses.includes(course);
}

const commonCourses = student1Courses.filter(findCommonCourses);

function printCommonCourse(commonCourses) {
  for (let i = 0; i < commonCourses.length; i++) {
    console.log("Founded course: " + commonCourses[i]);
  }
};

printCommonCourse(commonCourses);