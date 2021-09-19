// var testArray = [2, 4, 6, 2, 1, 3, 8, 9];

// console.log(testArray.fill("h", 1, 7)); // 1 start position, 7 end position exclusive

// const myNumber = [21, 43, 12, 54, 543, 54, 17];

// const result = myNumber.filter((num) => num > 50 );

// console.log(result);


var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1, 3)); // it works like that [1,3)
console.log(users.slice(users.length -1));

users.splice(1, 2, "HI", "Bye", "ooo", "co to"); // start from 1, cut out 2 positions and put one instead with a value of "HI"
console.log(users);
