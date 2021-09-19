function init(){
    var firstName = "danusia";

    function sayFirstName(){
        console.log(firstName);
        console.log(this.firstName);
    }
    sayFirstName();
}

init();
