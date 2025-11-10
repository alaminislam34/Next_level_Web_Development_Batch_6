// object types

// const user: {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// } = {
//   firstName: "MD",
//   middleName: "Al Amin",
//   lastName: "Islam",
// };


// not allow becasue you already define lastName but value is missing
//! const user: {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// } = {
//   firstName: "MD",
//   middleName: "Al Amin",
// };

const user2: {
  firstName: string;
  middleName?: string; // optional type
  lastName?: string;
} = {
  firstName: "MD",
  middleName: "Al Amin",
};

console.log(user2)