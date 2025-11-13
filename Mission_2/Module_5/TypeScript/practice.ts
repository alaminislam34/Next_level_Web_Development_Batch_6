// basic problem

// 1 Sum of Two Numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}

// console.log(addNumbers(2, 3));
// output 5

// 2. String Length Checker
function getLength(str: string): number {
  return str.length;
}

// console.log(getLength("alamin"))
// output 6

// 3. Even or Odd
function checkEvenOdd(num: number): string {
  if (num % 2 === 0) {
    return "Even";
  } else return "Odd";
}

// console.log(checkEvenOdd(112));
// output Even

// 4. Object Type Practice
type Person = {
  name: string;
  age: number;
};

function showPersonInfo(person: Person): void {
  console.log(person);
}
// showPersonInfo({ name: "alamin", age: 24 });
// output { name: "alamin", age: 24 }

// 5. Array Sum
function sumArray(numbers: number[]): number {
  const NumberSum = numbers.reduce((sum, num) => sum + num);
  return NumberSum;
}
// console.log(sumArray([1,3,4,5,24]))
// output 37

// 6. Reverse String
function reverseString(str: string): string {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
}

// console.log(reverseString("alamin"));
// output 'nimala'

// 7. Greeting Function
function greet(name: string): string {
  return `Hello! ${name}, Welcome to Typescript.`;
}
// console.log(greet("Alamin"))
// output "Hello! Alamin, Welcome to Typescript."

// 8. Find Max Value
function findMax(arr: number[]): number {
  let max = 0;
  for (let i of arr) {
    if (max < i) {
      max = i;
    }
  }
  return max;
}
// console.log(findMax([2, 34, 53, 6, 3, 36]));
// output 53

// 9. Optional Parameter Practice
function introduce(name: string, age?: number): string {
  if (age) {
    return `I am ${name} and I am ${age} years old.`;
  } else return `I am ${name}.`;
}

// console.log(introduce("alamin"));
// output "I am alamin."
// console.log(introduce("alamin", 24));
// output "I am alamin and I am 24 years old."

// 10. Tuple Practice
function showTuple(data: [string, number]): void {
  console.log(data);
}
// showTuple(["Age", 22]);
// output ['Age', 22]

// Advanced problem

// 1️⃣ Union Type Challenge

/**
 * Write a function that takes two parameters.
 * Each parameter can be a number or string.
 * If both are numbers → return the sum.
 * If both are strings → concatenate them.
 * If mixed → return "Invalid input".
 */
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    return "Invalid input";
  }
}
// console.log(combine(2, 3));
// console.log(combine("Hello", "World"));
// console.log(combine(2, "Hi"));
// output
/**
 * combine(2, 3);       // 5
 * combine("Hello", "World"); // "HelloWorld"
 * combine(2, "Hi");    // "Invalid input"
 */

// 2️⃣ Tuple to Object

// Write a function that takes a tuple [string, number] and returns it as an object {name: string, age: number}.
// function tupleToObject(data: [string, number]): { name: string; age: number } {
//   const obj = {
//     name: "",
//     age: 0,
//   };

//   data.forEach((value) => {
//     if (typeof value === "string") {
//       obj.name = value;
//     } else obj.age = value;
//   });
//   return obj;
// }

function tupleToObject(data: [string, number]): { name: string; age: number } {
  const [name, age] = data;
  return { name, age };
}

// console.log(tupleToObject(["Al Amin", 22]));
// { name: "Al Amin", age: 22 }

// 3️⃣ Optional & Default Parameters
// Write a function that takes a name and an optional age.
// If age is provided → "Name is X and age is Y"
// If age is not provided → "Name is X and age is unknown"
function introduce2(name: string, age?: number): string {
  if (!age) {
    return `Name is ${name} and age is unknown`;
  } else return `Name is ${name} and age is ${age}`;
}

// console.log(introduce2("Al Amin")); // "Name is Al Amin and age is unknown"
// console.log(introduce2("Al Amin", 22)); // "Name is Al Amin and age is 22"

// 4️⃣ Array of Objects

// Write a function that takes an array of students and returns names of students older than 18.

type Student = { name: string; age: number };

function adultStudents(students: Student[]): string[] {
  const older = [];
  for (let student of students) {
    if (student.age > 18) {
      older.push(student.name);
    }
  }
  return older;
}

// console.log(
//   adultStudents([
//     { name: "Ali", age: 17 },
//     { name: "Sara", age: 20 },
//   ])
// );

// ["Sara"]

// 5️⃣ Generic Function

// Write a generic function that takes an array and returns the first element.

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// console.log(firstElement([1, 2, 3])); // 1
// console.log(firstElement(["a", "b"])); // "a"
// console.log(firstElement([])); // undefined

export function duplicateCount(text: string): number {
  const textArr = text.toLowerCase().split("");

  const duplicate: string[] = [];
  for (let s of textArr) {
    if (!duplicate.includes(s)) {
      duplicate.push(s);
    }
  }
  return duplicate.length - 1;
}

console.log(duplicateCount("alamin"));
['a','s', 'd','j','f']