function f1() {
  console.log("I am invoked");
}

let greet = function (name) {
  return `Welcome ${name}`;
};

function findDuplicates(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].exists(arr)) {
      console.log(arr[i]);
    }
  }
}

//Arrow Functions

let namelss = (name) => "Hello";

let printDup = (key, arr) => {
    if(key.exists(arr))
        console.log(key);//return krna hai multiple ko aik hi line me likhna hai
}

