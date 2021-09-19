// var max = Math.max(1, 4, 6, 1, 7, 90, 32, 32, 54323, 4343, 43534, 63090,434, 43, 543,);

// console.log(max);

// var myObj = {};
// Object.assign(myObj, {a: 1, b: 2, c: 3}, {z: 9, y:8, x:7});
// console.log(myObj);

function sumOne (a, b){
    return a+b;
}

var myA = [5, 4, 1, 5];
console.log(sumOne(...myA)); // spread operator

function sumTwo(...args){
    console.log(args);
    let sum = 0;
    for (const arg of args){
    sum += arg;
    }
    return sum;
}

console.log(sumTwo(...myA));
// console.log(sumTwo(1, 2, 4, 5));

function sumTwoX(a, b, ...args){
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args){
    sum += arg;
    }
    return [ multi, sum];
}
console.log(sumTwoX(...myA));
console.log(sumTwoX(1,1,2,3,4));