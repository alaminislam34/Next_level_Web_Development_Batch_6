//*  Queue Implementation using Array

// an queue / dequeue
// which is use to implement this [array, linked list, ]

// array implementation

class Queue {
  constructor() {
    this.items = [];
  }

// O(1)
  enqueue(value) {
    this.items.push(value);
  }

// O(n)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  // O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
//   O(n)
  print() {
    console.log("Start -->", this.items.join("-->"), "End--->");
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

console.log(queue.peek())
queue.dequeue();
queue.print();
