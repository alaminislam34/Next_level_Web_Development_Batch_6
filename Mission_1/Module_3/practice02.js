// * stateless vs stateful
// let count = 0;

// const counter = (amount) => {
//   count = count + amount;
//   return count;
// };
// console.log(counter(3));
// console.log(counter(2));

// *closer

// const createCounter = () => {
//   let count = 0;
//   return (amount) => {
//     count = count + amount
//     return count
//   };
// };

// const counter = createCounter()
// console.log(counter(3));
// console.log(counter(8));

class Counter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0)
counter1.add(50)
counter1.add(20)
counter1.print()