// Valid Parentheses
class Stack {
  constructor() {
    this.items = [];
  }
  push(x) {
    this.items.push(x);
  }
  pop() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

const bracketChecker = (str) => {
  const stack = new Stack();
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty() || bracketMap[char] !== stack.pop()) {
        console.log("expected:", bracketMap[char], "got:", stack.pop());
        return false;
      }
    }
  }

  // Stack empty means fully valid
  return stack.isEmpty();
};

console.log(bracketChecker("({[]})")); // ✅ true
console.log(bracketChecker("({[]})")); // ✅ true
console.log(bracketChecker("((){}[])")); // ✅ true
console.log(bracketChecker("({[})")); // ❌ false
console.log(bracketChecker("((({}[])))")); // ✅ true
