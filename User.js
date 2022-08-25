// Using class to create an user
export default class User {
  #name;
  #surname;
  #mail;
  #birth;
  #role;
  #active;

  constructor(name, surname, mail, birth, role, active = true) {
    this.#name = name;
    this.#surname = surname;
    this.#mail = mail;
    this.#birth = birth;
    this.#role = role || "estudante";
    this.#active = active;
  }

  get name() {
    return this.#name;
  }

  get surname() {
    return this.#surname;
  }

  get mail() {
    return this.#mail;
  }

  get birth() {
    return this.#birth;
  }

  get role() {
    return this.#role;
  }

  get active() {
    return this.#active;
  }

  get allName() {
    return `${this.#name} ${this.#surname}`;
  }

  set name(newName) {
    if (newName === "") {
      throw new Error("Formato não válido");
    }
    this.#name = newName;
  }

  set name(completedName) {
    if (completedName === "") {
      throw new Error("formato não válido");
    }
    let [name, ...surname] = completedName.split(" ");
    surname = surname.join(" ");
    this.#name = name;
    this.#surname = surname;
  }

  showInfo() {
    return `${this.name}, ${this.surname} ${this.mail}, ${this.birth}, ${this.role}, ${this.active}`;
  }
}

// const newUser = new User("Luciano", "l@l.com", "15/02/2001");

// console.log(newUser);
// console.log(newUser.showInfo());

// console.log(User.prototype.isPrototypeOf(newUser)); //true
