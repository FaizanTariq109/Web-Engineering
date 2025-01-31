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
    courses: {
      title: "PF",
      isPassed: true,
    },
  },
};
console.log(student.registeredCourses.courses);
