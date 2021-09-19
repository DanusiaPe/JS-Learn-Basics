class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
     
    #courseList = []; // private variable
    
    getInfo(){  // method (same as function but inside the class)
        return {name: this.name, email: this.email};
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourseList(){
        return this.#courseList;
    }

    static login(){ //static - prywatna matoda
        return "You are logged in";
    }

}

class SubAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }
    login(){ // overwrite
        return "login for admin only";
    }
}

module.exports = User;


const rock = new User("rock", "rock@rock.com");

// console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom = new SubAdmin("Semih", "sm@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());