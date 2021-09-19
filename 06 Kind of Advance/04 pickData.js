// const user = ["danusia", 3, "user"];

// // var role = user[2];
// // var name = user[0];
// var [name, courseCount, role] = user;

// console.log(role);

const MyUser = {
    name: "danusia",
    courseCount: 3,
    role: "user",

};

console.log(MyUser.courseCount);

const {name, courseCount, role} = MyUser;

console.log(role);