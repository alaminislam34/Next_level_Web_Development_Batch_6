// explore non primitive types

// 1. object
const obj: { name: string; email: string; phone: number } = {
  name: "alamin",
  email: "alamin@gmail.com",
  phone: 1234245245,
};

// define type separately
type User = {
  name: string;
  email: string;
  phone: number;
  role?: string; // option type define
};

const obj2: User = {
  name: "alamin",
  email: "alamin@gmail.com",
  phone: 1234245245,
  role: "admin", // if I do not declare this property typescript has no error show
};

// array type

const array: Array<number> = [12, 3, 4, 5, 23, 5135, 135];
const arr: number[] = [12, 3, 4, 5, 23, 5135, 135];

// define separately
type Result = number[];
const arr2: Result = [12, 3, 4, 5, 23, 5135, 135];

// 3. function type

const add = (num1: number, num2: number) => {
  num1 * num2;
};

// define separtely
type Add = (num1: number, num2: number) => number;

const add2: Add = (num1, num2) => {
  return num1 * num2;
};

//  how to declare a function in the objects

const user = {
  name: "alamin",
  email: "alamin@gmail.com",
  balance: 0,
  addBalance(num: number): number {
    const newBalance = this.balance + num;
    return newBalance;
  },
};

user.addBalance(24024)