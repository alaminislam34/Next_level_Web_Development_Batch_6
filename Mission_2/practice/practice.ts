// class Animal {
//   constructor(
//     public name: string,
//     public species: string,
//     public sound: string
//   ) {}
//   makeSound() {
//     console.log(`The ${this.name} make sound ${this.sound}`);
//   }
// }

// const cat = new Animal("Cat", "cat", "mew mew");
// console.log(cat.name);

// Problem 1 — Find Users Above Age 25

type User1 = {
  name: string;
  age: number;
};

const getUserAbove25 = (users: User1[]) => {
  const above25age: User1[] = [];
  // users.forEach((user) => console.log(user));
  for (let u of users) {
    if (u.age > 25) {
      above25age[above25age.length] = u;
    }
  }
  return above25age;
};
const user = [
  { name: "Rakib", age: 22 },
  { name: "Asha", age: 27 },
  { name: "Rumi", age: 30 },
];

// console.log(getUserAbove25(user));

// Problem 2 — Convert Product Names to Slugs

// input
const arr = ["Red Shirt", "Blue Jeans", "Smart Watch"];

const convertSlugs = (arr: string[]): string[] => {
  const slugArr: string[] = [];
  for (let str of arr) {
    const slugs = str.split(" ").join("-").toLocaleString().toLowerCase();
    slugArr[slugArr.length] = slugs;
  }
  return slugArr;
};
// console.log(convertSlugs(arr));

// output
// ["red-shirt", "blue-jeans", "smart-watch"]

// Problem 3 — Sort Objects By Score (Descending)
// Input:

const players = [
  { player: "A", score: 10 },
  { player: "B", score: 45 },
  { player: "C", score: 30 },
];

// Output:

// [
//   { player: "B", score: 45 },
//   { player: "C", score: 30 },
//   { player: "A", score: 10 }
// ]
type Player = {
  player: string;
  score: number;
};

const sortByScore = (arr: Player[]) => {
  const sortArr: Player[] = [];
  for (let player of arr) {
    let inserted = false;
    for (let i = 0; i < sortArr.length; i++) {
      if (player.score > sortArr[i].score) {
        sortArr.splice(i, 0, player);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      sortArr[sortArr.length] = player;
    }
  }
  return sortArr;
};

// console.log(sortByScore(players));

/*

Problem 4 — Find Total Salary

Input:

[
  { name: "Rahim", salary: 20000 },
  { name: "Karim", salary: 30000 },
  { name: "Salma", salary: 25000 }
]


Output:

75000
*/
type Employee = {
  name: string;
  salary: number;
};

const findTotalSalary = (arr: Employee[]): number => {
  let totalSalary = 0;
  for (let em of arr) {
    totalSalary = totalSalary + em.salary;
  }
  return totalSalary;
};

const empolyee = [
  { name: "Rahim", salary: 20000 },
  { name: "Karim", salary: 30000 },
  { name: "Salma", salary: 25000 },
];

// console.log(findTotalSalary(empolyee));

/*
Problem 5 — Remove "isActive: false" Users

Input:

[
  { name: "A", isActive: true },
  { name: "B", isActive: false },
  { name: "C", isActive: true }
]


Output:

[
  { name: "A", isActive: true },
  { name: "C", isActive: true }
]
*/

type U = {
  name: string;
  isActive: boolean;
};

const removeInActiveUser = (users: U[]): U[] => {
  const activeUsers: U[] = [];
  for (let user of users) {
    if (user.isActive) {
      activeUsers[activeUsers.length] = user;
    }
  }
  return activeUsers;
};
const users = [
  { name: "A", isActive: true },
  { name: "B", isActive: false },
  { name: "C", isActive: true },
];
// console.log(removeInActiveUser(users));


