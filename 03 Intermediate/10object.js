var user  = {
    firstName : "Danusia",
    lastName : "Pezda",
    role : "Admin",
    loginCount: 32,
    fbSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

user.loginCount=44;
console.log(user.loginCount);

console.log(user);
console.table(user);
