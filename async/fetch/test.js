class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      alert(resolve);
      // resolve with this.num*2 after 1000ms
      setTimeout((() => {
          resolve() => {
            let howLong = this.num * 2;
            return `I waited ${howLong} seconds`;
            }
    }), 1000); // (*)
    }
  }
  
  async function f() {
    // waits for 1 second, then result becomes 2
    let result = await new Thenable(1);
    alert(result);
  }
  
  f();


  class Thenable1 {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      alert(resolve);
      // resolve with this.num*2 after 1000ms
      setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
  }
  
  async function f1() {
    // waits for 1 second, then result becomes 2
    let result = await new Thenable1(1);
    alert(result);
  }
  
  f1();

 (() => {

    let a = 2;
    a = a + 2;

    console.log(a);
    // return a;
  })();