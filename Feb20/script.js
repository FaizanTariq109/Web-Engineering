// async function getGitData() {
//   const gitData = fetch("api.github.com/users/hashimaliii");
//   const profile = (await gitData).json();
//   console.log(profile);
// }
// getGitData();

localStorage.setItem("gitURL", "https://api.github.com/users/hashimaliii");
console.log(localStorage.getItem("gitURL"));
const user = [
  {
    name: "Hashim",
    age: 52,
  },
  {
    name: "Faizan",
    age: 26,
  },
];
console.log(user);
console.log(JSON.stringify(user));
localStorage.setItem("classStudents", JSON.stringify(user));
console.log(localStorage.getItem("classStudents"));
console.log(JSON.parse(localStorage.getItem("classStudents")));
