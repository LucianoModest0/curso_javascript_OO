// Class Inheritance
import User from "./User.js";

export default class Admin extends User {
  constructor(name, mail, birth, role = "admin", active = true) {
    super(name, mail, birth, role, active);
  }
  createCourse(courseName, vacancies) {
    return `o curso de ${courseName} foi criado com ${vacancies} vagas`;
  }
}

// const newAdmin = new Admin("Jose", "j@j.com", "12/01/1999");
// console.log(newAdmin);
// // method from user
// console.log(newAdmin.showInfo());
// // new method specific to admin
// console.log(newAdmin.createCourse("js", 20));
