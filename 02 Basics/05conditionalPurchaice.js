// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - valid
// If any of them is missing, stop purchase

var isLoggedIn = true;
var isemailVerified=true;
var cardInfo=true;

if (isLoggedIn){
    console.log("Logged IN Success");
    if (isemailVerified){
        console.log("Email is verified");
        if (cardInfo){
            console.log("You can make a purchase");
        }
    }
}

if (isLoggedIn && isemailVerified && cardInfo){
    console.log("Dupa biskupa, you've been robbed!");
} else {
    console.log("blablalva");
}