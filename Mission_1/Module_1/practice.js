// practice order of (n)(1)

const firstArry = [];
const secondArry = [];

for (let i = 0; i < 500000; i++) {
  if (i < 250000) {
    firstArry.push(i);
  }
  secondArry.push(i);
}

const startTime1 = performance.now();
const map1 = firstArry.map((i) => ({ userId: i }));
const endTime1 = performance.now();

const startTime2 = performance.now();
const map2 = secondArry.map((i) => ({ userId: i }));
const endTime2 = performance.now();

console.log("firstArry", firstArry.length);
console.log("secondArry", secondArry.length);

console.log(
  `first array map look time: ${
    endTime1 - startTime1
  } and Second array map look time: ${endTime2 - startTime2}`
);

// 1-------- --------------------------------------O(1)
const arr2 = [];
const started_order_of_1 = performance.now();
function Order_of_1() {
  for (let i = 0; i < 4; i++) {
    arr2.push(i);
  }
}
Order_of_1();
const end_order_of_1 = performance.now();
console.log(
  "Order of 1:",
  arr2.length,
  "took time:",
  end_order_of_1 - started_order_of_1
);

// 1--------------------------------------------------- O(1)

//2------------ ----------------------------------------O(n)
const arr1 = [];
const started_order_of_n = performance.now();
function Order_of_n(n) {
  for (let i = 0; i < n; i++) {
    arr1.push(i);
  }
}
Order_of_n(9920000);
const end_order_of_n = performance.now();
console.log(
  "Order of n:",
  arr1.length,
  "took time:",
  end_order_of_n - started_order_of_n
);
//2------------ -----------------------------------------O(n)




// 3. --------------------------------------------------O(n^2)


const ar = []
const ar1 = []
const started_order_of_n2 = performance.now()
function Order_of_n2(n) {
    for(let i=0; i<500; i++){
        if(i<250){
            ar.push(i)
        }
        for(let i = 0; i < 122; i++){
            ar1.push(i)
        }
    }
}
Order_of_n2(5000)
const end_order_of_n2 = performance.now()

console.log(
  "Order of n2:",
  ar.length,
  "took time:",
  end_order_of_n2 - started_order_of_n2
);
console.log(
  "Order of n2:",
  ar1.length,
  "took time:",
  end_order_of_n2 - started_order_of_n2
);