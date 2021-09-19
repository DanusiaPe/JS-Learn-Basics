// var isEven = function (element){
//     // if(element % 2 === 0){
//     //     return true;
//     // }
//     // return false;

//     return element % 2 === 0;
// }

// var isEven2 = function (element){   
//         return element % 2 === 0;
//     }

// function isEven3(element){   
//         return element % 2 === 0;
//     }

var isEven = (elemnt) => { 
   return elemnt % 2 === 0;
}

// console.log(isEven(3));

// var result = [2, 4, 6, 8].every(isEven); // pass reference of the function not run it so without ()
// console.log(result);

// var sayName = (counter) => {
//     console.log(counter);
//     return 1;
// }

// var result2 = [2, 4, 6, 8].every(sayName);; // pass reference of the function not run it so without ()

// console.log(result2);

// CALLBACK functions
// var result = [2, 3, 6, 8].every((e) => {
//     return e % 2 === 0;
// });

var result = [2, 3, 6, 8].every((e) =>  e % 2 === 0);
console.log(result);