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
const map1 = firstArry.map(i=> ({userId: i}))
const endTime1 = performance.now();

const startTime2 = performance.now();
const map2 = secondArry.map(i=> ({userId: i}))
const endTime2 = performance.now();

console.log("firstArry",firstArry.length);
console.log("secondArry",secondArry.length);


console.log(`first array map look time: ${endTime1 - startTime1} and Second array map look time: ${endTime2 - startTime2}`)
