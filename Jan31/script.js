let person = {
  name: "Faizan",
  age: 21,
  isStudent: true,
};

let person1 = new Object();
person1.name = "Faizan";
person1.isaStudent = true;

let person2 = Object.create(null);
person2.name = "Me";

let student = {
  name: "Ali",
  age: "20",
  isStudent: true,
  registeredCourses: {
    course1: {
      title: "PF",
      isPassed: true,
    },
  },
  displayName: function () {
    return this.name;
  },
};
let course2 = {
  title: "OOP",
  isPassed: true,
};
student["registeredCourses"]["course2"] = course2;
for (key in student) {
  console.log(student[key]);
}
//Object.keys(student);
console.log(student.displayName());
