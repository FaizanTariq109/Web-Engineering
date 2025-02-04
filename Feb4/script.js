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
  if (key.exists(arr)) console.log(key); //return krna hai multiple ko aik hi line me likhna hai
};

function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let increment = counter();

let counter1 = () => {
  let count = 0;
  return () => {
    return count++;
  };
};

let increment1 = counter1();

function mul(...val) {
  return val.reduce((val1, res) => res * val1, 1);
}

async function mul2(...val) {
  await val1.openfile(file);
  return val.reduce((val1, res) => res * val1, 1);
}

myTimeout = setTimeout(mul2, 2000);
