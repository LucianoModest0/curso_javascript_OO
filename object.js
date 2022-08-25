const user = {
  name: "luciano",
  mail: "mail@mail.com",
  birth: "12/02/2000",
  role: "student",
  active: true,
  showInfo: function () {
    console.log(this.name, this.mail);
  },
};

const admin = {
  name: "José",
  mail: "j@j.com",
  role: "admin",
  createCourse() {
    console.log("curso criado");
  },
};

Object.setPrototypeOf(admin, user);
admin.createCourse();
admin.showInfo();
