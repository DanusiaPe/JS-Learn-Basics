//  import User from "./06_classjs"; //now this is how it's made

const User = require("./06_classjs.js");

const danusia = new User("Danusia", "danusia.mcr@gmail.com");

console.log(danusia.getInfo());

danusia.enrollCourse("React Bootcamp");
danusia.enrollCourse("Angular Bootcamp");

console.log(danusia.getCourseList());


let courses = danusia.getCourseList();

courses.forEach((c) => console.log(c));
console.log(courses.length);