const un = () => {
    return "I am one";
};
// const dos = async () => {
//     setTimeout(() => {
//         return "I am two";
//     }, 3000 );
// }

const dos =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two");
        }, 3000);
    });
};
const tres = () => {

        return "I am three";

};


const callMe = async () => {
    let valOne = un();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();