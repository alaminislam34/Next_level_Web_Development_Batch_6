// const products = [
//   {
//     id: 1,
//     name: "iPhone 15",
//     category: "Electronics",
//     brand: "Apple",
//     price: 1300,
//   },
//   {
//     id: 2,
//     name: "Galaxy S23",
//     category: "Electronics",
//     brand: "Samsung",
//     price: 1100,
//   },
//   {
//     id: 3,
//     name: "MacBook Air",
//     category: "Electronics",
//     brand: "Apple",
//     price: 1800,
//   },
//   {
//     id: 4,
//     name: "Nike Air Max",
//     category: "Fashion",
//     brand: "Nike",
//     price: 250,
//   },
//   {
//     id: 5,
//     name: "Adidas Ultraboost",
//     category: "Fashion",
//     brand: "Adidas",
//     price: 220,
//   },
//   {
//     id: 6,
//     name: "Levi’s Jeans",
//     category: "Fashion",
//     brand: "Levi’s",
//     price: 120,
//   },
//   {
//     id: 7,
//     name: "Wooden Dining Table",
//     category: "Home",
//     brand: "Ikea",
//     price: 600,
//   },
//   { id: 8, name: "Office Chair", category: "Home", brand: "Ikea", price: 350 },
//   {
//     id: 9,
//     name: "Sony Headphones",
//     category: "Electronics",
//     brand: "Sony",
//     price: 300,
//   },
//   {
//     id: 10,
//     name: "Puma T-shirt",
//     category: "Fashion",
//     brand: "Puma",
//     price: 80,
//   },
// ];

// // ? grouping data practice

// const categooryGrouping = products.reduce((group, product) => {
//   if (!group[product.category]) {
//     group[product.category] = [];
//   }
//   group[product.category].push(product);

//   return group;
// }, {});
// // console.log(categooryGrouping);

// const brandGrouping = products.reduce((group, product) => {
//   if (!group[product.brand]) {
//     group[product.brand] = [];
//   }

//   group[product.brand].push(product);

//   return group;
// }, {});

// console.log(brandGrouping);

// console.log(brandGrouping['Apple'])

const strings = [
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "C",
  "D",
  "C",
  "D",
];

// ? GROUPING SAME STRING

const group = strings.reduce((group, string) => {
  if (!group[string]) {
    group[string] = 0;
  }
  group[string] += 1;

  return group;
}, {});

console.log(group);
