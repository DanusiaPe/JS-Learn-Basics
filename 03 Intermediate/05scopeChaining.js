
var name = "danusia";

console.log("Line number 3", name);

function sayName(){
    var name = "Ms. D"
    console.log("Line number 7", name);

    sayNameTwo();

    function sayNameTwo(){
        console.log("Line number 12", name);
    }
}

sayName();