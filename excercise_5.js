// Exercise #5
// For each of the exercises below, assume you are starting with the following people array.
// let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
// Write a command that prints out all of the people in the list.
// Write the command to remove "Dani" from the array.
// Write the command to remove "Juan" from the array.
// Write the command to move "Luis" to the front of the array.
// Write the command to add your name to the end of the array.
// Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
// Write the command that gives the indexOf where "Maria" is located.
// At the end of the exercise, there should be 4 people in the array.
console.log("----------------- EXCERCISE 5 ----------------- ")
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Write a command that prints out all of the people in the list.
for (let index = 0; index < people.length; index++) {
  const element = people[index];
  console.log(people.join(" "));
}

// Write the command to remove "Dani" from the array.
people.splice(1, 1); 

// Write the command to remove "Juan" from the array.

people.splice(2, 1); 

// Write the command to move "Luis" to the front of the array.
people.splice(1, 1); 
people.unshift("Luis");

// Write the command to add your name to the end of the array.
people.push("Kristian");

// Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for (let i of people) {
  console.log(i);
  if (i === "Maria") break;
}

// Write the command that gives the indexOf where "Maria" is located.

console.log("Maria is located in the index: " + people.indexOf("Maria"));

// At the end of the exercise, there should be 4 people in the array.

console.log("People in the array: " + people.join(" "))