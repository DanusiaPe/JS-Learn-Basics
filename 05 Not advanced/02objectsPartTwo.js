var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`);
    },
};


var danusia = Object.create(User);
console.log(danusia);

danusia.name = "Danusia";
danusia.getUserName();

var semih = Object.create(User, {
    name: {value: "Semih"},
    courseCount: { value: 3},
});
console.log(semih.courseCount);