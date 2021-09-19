/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

// function standard
function getUserRole(name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
            break;      
        case "user":
            return `${name} is user with access to consume content`;
            break;               
        default:
            return `${name} is trial user`;
            break;
    }
}

// variable with assigned function
var getUserRole2 = function (name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
            break;      
        case "user":
            return `${name} is user with access to consume content`;
            break;               
        default:
            return `${name} is trial user`;
            break;
    }
}

console.log(getUserRole("Danusia", "user"));
console.log(getUserRole2("Semih", "admin"));