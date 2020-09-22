class Queue {
  constructor() {
    this.length = 0;
    this.storage = [];
  }

  enqueue(data) {
    this.storage.push(data);
    this.length++;
    return true;
  }
  dequeue() {
    this.length--;
    return this.storage.shift();
  }
  front() {
    return this.storage[0];
  }
  size() {
    return this.length;
  }
  empty() {
    return this.length === 0;
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

q.dequeue();
console.log(q.empty());
console.log(q);
