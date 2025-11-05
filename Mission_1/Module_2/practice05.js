const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Electronics",
    brand: "Apple",
    price: 1300,
    quantity: 15,
  },
  {
    id: 2,
    name: "Galaxy S23",
    category: "Electronics",
    brand: "Samsung",
    price: 1100,
    quantity: 12,
  },
  {
    id: 3,
    name: "MacBook Air",
    category: "Electronics",
    brand: "Apple",
    price: 1800,
    quantity: 8,
  },
  {
    id: 4,
    name: "Nike Air Max",
    category: "Fashion",
    brand: "Nike",
    price: 250,
    quantity: 30,
  },
  {
    id: 5,
    name: "Adidas Ultraboost",
    category: "Fashion",
    brand: "Adidas",
    price: 220,
    quantity: 25,
  },
  {
    id: 6,
    name: "Levi’s Jeans",
    category: "Fashion",
    brand: "Levi’s",
    price: 120,
    quantity: 40,
  },
  {
    id: 7,
    name: "Wooden Dining Table",
    category: "Home",
    brand: "Ikea",
    price: 600,
    quantity: 10,
  },
  {
    id: 8,
    name: "Office Chair",
    category: "Home",
    brand: "Ikea",
    price: 350,
    quantity: 18,
  },
  {
    id: 9,
    name: "Sony Headphones",
    category: "Electronics",
    brand: "Sony",
    price: 300,
    quantity: 28,
  },
  {
    id: 10,
    name: "Puma T-shirt",
    category: "Fashion",
    brand: "Puma",
    price: 80,
    quantity: 3,
  },
];

// ? grouping and aggregating practice

const CountByPriceQuantity = products.reduce((group, product) => {
  const { category, price, quantity } = product;

  if (!group[category]) {
    group[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }
  (group[category].totalRevenue += price * quantity),
    (group[category].itemCount += quantity);

  return group;
}, {});
console.log(CountByPriceQuantity);
