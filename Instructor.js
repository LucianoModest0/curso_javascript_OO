import User from "./User.js";

export default class Instructor extends User {
  constructor(name, mail, birth, role = "Instrutor", active = true) {
    super(name, mail, birth, role, active);
  }

  aprovesStudent(student, course) {
    return `Estudante ${student} foi aprovad@ em ${course}`;
  }
}

// const newInstructor = new Instructor("Marival", "m@m.com", "21/05/1990");
// console.log(newInstructor);
// // method from user
// console.log(newInstructor.showInfo());
// // new method specific to instructor
// console.log(newInstructor.aprovesStudent("luciano", "JS-OO"));
