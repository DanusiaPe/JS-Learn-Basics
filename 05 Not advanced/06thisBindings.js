const danusia = {
    firstName: "Danusia",
    lastName: "Pezda",
    role: "Admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and she is studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName: "Rock",
    lastName:  "DJ",
    role: "Sub-Admin",
    courseCount: 4,
}


// dj.getInfo();

// danusia.getInfo.bind(dj)();

var djInfo = danusia.getInfo.bind(dj);
djInfo();

danusia.getInfo();