var user = {
    firstName: "Danusia",
    lastName: "Pezda",
    role: "Admin",
    loginCount: 32,
    fbSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info: function () {
        console.table(this);
    },
}

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());
user.info();