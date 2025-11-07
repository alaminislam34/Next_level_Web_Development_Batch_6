//  practice binnary search

const binnarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return mid;
    } else if (guess < target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

console.log(binnarySearch([3, 5, 7, 9, 11], 7))