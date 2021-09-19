// const cards = document.querySelectorAll(".card");
// console.log(cards);

// //variables
// var isFlipped = false;
// var firstCard;
// var secondCard;

// cards.forEach((card) => card.addEventListener("click", flip));

// function flip() {
//   //   console.log("Card flipped");
//   // console.log(this);
//   this.classList.add("flip");
//   if (!isFlipped) {
//     isFlipped = true;
//     firstCard = this;
//   } else {
//     secondCard = this;
//     console.log(firstCard);
//     console.log(secondCard);

//     checkIt();
//   }
// }

// function checkIt() {
//   //   console.log("Checking...");
//   if (firstCard.dataset.image === secondCard.dataset.image) {
//     success();
//   } else {
//     fail();
//   }
// }

// function success() {
//   //   console.log("Success");
//   firstCard.removeEventListener("click", flip);
//   secondCard.removeEventListener("click", flip);
//   reset();
// }

// function fail() {
//   //   console.log("Failed");
//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");
//     reset();
//   }, 1000);
// }

// function reset() {
//   isFlipped = false;
//   firstCard = null;
//   secondCard = null;
// }

// //TODO: shuffle

// (function shuffle() {
//   cards.forEach((card) => {
//     var index = Math.floor(Math.random() * 16);
//     card.style.order = index;
//   });
// })();

var isFlipped = false;
var firstCard;
var secondCard;
// var count = 0;
// var attempts = 0;

const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => card.addEventListener("click", flip))


function flip(){
    this.classList.add("flip");
    if(!isFlipped){
        isFlipped= true;
        firstCard = this;
    } else {
        if (this!==firstCard){
        secondCard = this;
        checkIt();}
    }
}


var checkIt = function () {
        firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
    }

function success(){
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
    // count += 2;
}

function fail(){   
    setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
    }, 1000);
}

function reset(){
   [isFlipped, firstCard, secondCard] = [false, null, null];
}


function shuffle(){
    cards.forEach((card) => {
        var index = Math.floor(Math.random()*16);
        card.style.order = index;
    });
}

window.onload(shuffle());