function User(name, mail) {
  this.name = name;
  this.mail = mail;

  this.showInfo = function () {
    return `${this.name}, ${this.mail}`;
  };
}

// 1. Using constructor
// const newUser = new User("Luciano", "mail@mail.com");
// console.log(newUser.showInfo());

// 2. Using object.create
// function Admin(role) {
//   User.call(this, "Luciano", "mail@mail.com");
//   this.role = role || "student";
// }

// Admin.prototype = Object.create(User.prototype);
// const newUser = new Admin("admin");
// console.log(newUser.showInfo());
// console.log(newUser.role);

// 3. using init/ object.create
const user = {
  init: function (name, mail) {
    this.name = name;
    this.mail = mail;
  },
  showInfo: function (name) {
    return this.name;
  },
};

const newUser = Object.create(user);
newUser.init("luciano", "mail@mail.com");

console.log(newUser.showInfo());

// console.log(user.isPrototypeOf(newUser));
