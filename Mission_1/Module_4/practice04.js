// Palindrome Checker

const CheckPalindrome = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  console.log(reversed);
  if (reversed === normalized) {
    return true;
  }
  return false;
};
// A man, a plan, a canal: Panama
// console.log(CheckPalindrome("A man, a plan, a canal: Panama"));

// two pointer palindrome checker
const isPalindrome = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
    left++;
    right--;

    return true;
  }
};

console.log(isPalindrome("level"));
