// Execution context
// Variable Object      Scope Chain         this
// Function declarations are scanned and made available
// Variable declarations are scanned and made undefined


tipper("20");

function tipper(a){
    var bill =parseInt(a);
    console.log(bill + 5);
}

// function bigTipper(a){
//     var bill=parseInt(a);
//     console.log(bill + 15);
// }

var bigTipper = function (a){
    var bill=parseInt(a);
    console.log(bill + 15);
}
sayName();
bigTipper("80");


console.log(name);
var name = "Danusia"

function sayName(){
    var name= "Mr. H";
    console.log(name);
}

console.log(name);