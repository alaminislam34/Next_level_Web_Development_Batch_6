const users = [
  { id: "u-101", name: "Alamin", age: 23, city: "Dhaka" },
  { id: "u-102", name: "Sadia", age: 21, city: "Chittagong" },
  { id: "u-103", name: "Rafi", age: 25, city: "Sylhet" },
  { id: "u-104", name: "Nusrat", age: 22, city: "Rajshahi" },
  { id: "u-105", name: "Tanvir", age: 24, city: "Khulna" },
];

const lookupTable = users
  .reduce((table, user) => {
    table[user.id] = user;
    return table;
  }, {});

console.log(lookupTable);
