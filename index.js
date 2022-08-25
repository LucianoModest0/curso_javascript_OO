import User from "./User.js";
import Admin from "./Admin.js";
import Instructor from "./Instructor.js";

// const newUser = new User("Luciano", "l@l.com", "15/02/2001");
// console.log(newUser.showInfo());

// const newAdmin = new Admin("Jose", "j@j.com", "12/01/1999");
// console.log(newAdmin.name);
// newAdmin.name = "marivas";
// console.log(newAdmin.name);

const newUser = new User("Juliana", "Souza", "j@j.com", "2021-01-01");
console.log(newUser.name); //'Juliana'
newUser.name = "Juliana Silva Souza";
console.log(newUser.name); //'Juliana'
console.log(newUser.surname); //'Silva Souza'
console.log(newUser.allName);
