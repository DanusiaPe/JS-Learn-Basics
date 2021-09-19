const un = () => {
    console.log("I am one");
}
const dos = () => {
    setTimeout(() => {
        console.log("Whoohoooo");
    }, 3000 );
    console.log("I am two");
}
const tres = () => {

    console.log("I am three");
}

un();
dos();
tres();