// D = (L - S)/L * 100


var seellingPrice = 199;
var listingPrice=799;
var discountedPercent= ((listingPrice-seellingPrice)/listingPrice)*100;


console.log("Discount percentage is:" + Math.round(discountedPercent) + "% off.");

console.log(typeof seellingPrice + " " +  Math.round(discountedPercent));