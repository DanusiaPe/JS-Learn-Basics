// Create an application with  following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "user";

switch (user){
    case "admin":
        return console.log ("you get full access");
        break;
    case "subadmin":
        return console.log ("you get access to create/delete courses");
        break;
    case "testprep":
        return console.log ("you get access to create/delete tests");
        break;
    case "user":
        return console.log ("you get access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}