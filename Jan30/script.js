let car = ["BMW", "GMC", "Aston Martin"];

let fruits = new Array("Apple", "Banana", "Orange");
//console.log(fruits);

//fruits.splice(1, 4, "Apple", "Guava", "Apricot", "Orange");
//console.log(fruits);

//console.log(fruits.indexOf("Apple"));

//fruits.forEach((value) => value.toUpperCase());

// fruits.filter((val) => val === "Apple");
// let htmllistitems = fruits.map((val) => "<li>" + val + "</li>");
// console.log(htmllistitems);

//!!reduce ke parameters: result, curr val, definition, default val
// let values = [3, 7, 1, 4];
// let output = values.reduce((res, val) => res + "<li>" + val + "</li>", "<ul>");
// output += "</ul>";
// console.log(output);

// let val2 = [1, 2, 3, 5, 6, 1];
// let output2 = val2.reduce((max, val) => (val > max ? val : max), val2[0]);
// console.log(output2);

// let val3 = [
//   [1, 2, 3, 4, 5],
//   [9, 10],
// ];
// let output3 = val3.reduce((result, val) => result.push(val), 0);

// let valueet = new Set(1, 3, 5, 1);
// console.log(valueet); //ERROR

// let value = 3;
// let displayMessage = "Hello " + value;
// console.log(displayMessage);

// let display = `Hello ${value}`;
// console.log(display);

// let vaal = "class";
// console.log(vaal.slice(-3, -2));
// console.log(vaal.replace("c", "a"));

let value = [1, 2, 3];
console.log(value.join("-"));
