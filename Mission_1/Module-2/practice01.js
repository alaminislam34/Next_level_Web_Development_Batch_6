// ? input

const products = [
  {
    id: "p-101",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 89.99,
    discount: 15, // percent
    rating: 4.6,
    totalReviews: 240,
    stock: 35,
    brand: "SoundMax",
    sold: 560,
    image: "https://images.example.com/products/headphones.jpg",
  },
  {
    id: "p-102",
    name: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 129.0,
    discount: 10,
    rating: 4.8,
    totalReviews: 430,
    stock: 22,
    brand: "KeyCraft",
    sold: 890,
    image: "https://images.example.com/products/keyboard.jpg",
  },
  {
    id: "p-103",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 259.99,
    discount: 20,
    rating: 4.3,
    totalReviews: 190,
    stock: 18,
    brand: "ComfySeat",
    sold: 320,
    image: "https://images.example.com/products/chair.jpg",
  },
  {
    id: "p-104",
    name: "Smart Watch Series 7",
    category: "Wearables",
    price: 199.99,
    discount: 5,
    rating: 4.5,
    totalReviews: 510,
    stock: 50,
    brand: "TimeTek",
    sold: 1150,
    image: "https://images.example.com/products/smartwatch.jpg",
  },
  {
    id: "p-105",
    name: "4K LED TV 43-inch",
    category: "Electronics",
    price: 499.0,
    discount: 12,
    rating: 4.7,
    totalReviews: 760,
    stock: 12,
    brand: "ViewPlus",
    sold: 980,
    image: "https://images.example.com/products/tv.jpg",
  },
  {
    id: "p-106",
    name: "Running Shoes",
    category: "Fashion",
    price: 79.99,
    discount: 25,
    rating: 4.2,
    totalReviews: 150,
    stock: 60,
    brand: "SpeedX",
    sold: 670,
    image: "https://images.example.com/products/shoes.jpg",
  },
  {
    id: "p-107",
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 139.99,
    discount: 18,
    rating: 4.4,
    totalReviews: 210,
    stock: 30,
    brand: "BrewMaster",
    sold: 480,
    image: "https://images.example.com/products/coffeemaker.jpg",
  },
  {
    id: "p-108",
    name: "Leather Wallet",
    category: "Fashion",
    price: 49.99,
    discount: 10,
    rating: 4.1,
    totalReviews: 75,
    stock: 100,
    brand: "UrbanEdge",
    sold: 230,
    image: "https://images.example.com/products/wallet.jpg",
  },
];

// * process
// Todo filter by category
// Todo sort by = discount
// Todo slice by = top 3
//  todo map show data

const topDiscountProducts = products
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => b.discount - a.discount)
  .slice(0, 4)
  .map((item) => ({ name: item.name, discount: item.discount }));
console.log(topDiscountProducts);


const topSoldProducts = products
  .sort((a, b) => b.sold - a.sold)
  .slice(0, 4)
  .map((item) => ({ name: item.name, discount: item.sold }));
console.log(topSoldProducts);

// top review
const topReviews = products
  .sort((a, b) => b.totalReviews - a.totalReviews)
  .slice(0, 4)
  .map((item) => ({ name: item.name, reviews: item.totalReviews }));
console.log(topReviews);

// ? output [{name: "phone"}, {name: "phone"}]
