var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};


User.prototype.getFirstName = function(){
    console.log(`Your first name is ${this.firstName}`);
};


var danusia = new User("Danusia", 2);
var semih = new User("Sam", 1);
danusia.getCourseCount();
semih.getCourseCount();
// console.log(danusia);
// console.log(semih);
if(danusia.hasOwnProperty("firstName")){
    danusia.getFirstName();
};
semih.getFirstName();
