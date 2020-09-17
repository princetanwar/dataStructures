class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // insert at head
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.length++;
    return "added at first";
  }

  // insert at index
  insertAt(data, index) {
    //if index is out of range
    if (index > this.length) {
      this.insertLast(data);
      return;
    }
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previos;

    // set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previos = current; // node before index
      count++;
      current = current.next; // node after index
    }
    previos.next = node;
    node.next = current;
    this.length++;
  }

  // get at index
  getAt(index) {
    // index > length
    if (index > this.length) return "invalid index";

    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (index === i) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // add item at last
  insertLast(data) {
    let current = this.head;

    // if list empty then added to head
    if (current === null) {
      this.insertFirst(data);
      return "added at last";
    }
    while (current) {
      if (current.next === null) {
        current.next = new Node(data);
        this.length++;
        return "added at last";
      }
      current = current.next;
    }
  }

  //remove at index
  removeAt(index) {
    if (index > this.length) {
      throw new Error("out of range");
    }

    let current = this.head;
    let previos;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previos = current;
        current = current.next;
      }
      previos.next = current.next;
    }
    this.length--;
  }

  // print node data of each
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
// ll.insertFirst(100);

ll.insertLast(100);
ll.insertLast(300);
ll.insertLast(400);
ll.insertAt(200, 1);
ll.insertAt(250, 20);
ll.insertFirst(50);
// console.log(ll);
// console.log("printing data");
// ll.removeAt(43);
ll.printListData();
// console.log(ll.getAt(4));
