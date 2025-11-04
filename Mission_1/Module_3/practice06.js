//* Linked-list - A Visual Representation

// type of linked list: 
// 1. Singly linked list
// 2. Doubly linked list
// 3. Circular linked list

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

const head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)
console.log(head)

let temp = head
while(temp !== null){
    console.log(temp.value, " ")
    temp = temp.next;
}


