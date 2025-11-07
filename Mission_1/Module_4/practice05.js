// practice binary search (corrected) with step-by-step console output
// Searching for 7 in [3,5,7,9,11]
// low=0, high=4, mid=2, guess=7
// Found at index 2
// Result index: 2

const binarySearch = (arr, target) => {
  // নিশ্চিত করো: arr অবশ্যই ascending (ছোট থেকে বড়) sorted থাকতে হবে
  let low = 0;
  let high = arr.length - 1;

  console.log("Searching for", target, "in", arr);
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    // print current state
    console.log(`low=${low}, high=${high}, mid=${mid}, guess=${guess}`);

    if (guess === target) {
      console.log("Found at index", mid);
      return mid;
    } else if (guess < target) {
      // guess ছোট, তাই target ডান দিকে
      console.log(`${guess} < ${target}  => move low to mid + 1`);
      low = mid + 1;
    } else {
      // guess বড়, তাই target বাম দিকে
      console.log(`${guess} > ${target}  => move high to mid - 1`);
      high = mid - 1;
    }
  }

  console.log("Not found");
  return -1;
};

// Example run
console.log("Result index:", binarySearch([3, 5, 7, 9, 11], 7));

// Searching for 10 in [3,5,7,9,11]
// low=0, high=4, mid=2, guess=7
// 7 < 10  => move low to mid + 1
// low=3, high=4, mid=3, guess=9
// 9 < 10  => move low to mid + 1
// low=4, high=4, mid=4, guess=11
// 11 > 10 => move high to mid - 1
// Not found
// Result index: -1
