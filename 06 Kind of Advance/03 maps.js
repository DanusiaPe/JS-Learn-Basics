var myMaps = new Map();

myMaps.set(1, "Un");
myMaps.set(2, "Dos");
myMaps.set(3, "Tres");
myMaps.set(4, "Cuatro");

console.log(myMaps);

// for( let key of myMaps.keys()){
//     console.log(`Key is ${key}`);
// }

// for( let value of myMaps.values()){
//     console.log(`Values is ${value}`);
// }

for( let [key, value] of myMaps){
    console.log(`Key is: ${key}  and Value is ${value}`);
}

myMaps.forEach((value, key) =>  console.log(`value: ${value} key: ${key}`));

myMaps.delete(2);
console.log(myMaps);