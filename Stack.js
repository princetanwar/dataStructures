class Stack {
  constructor() {
    this.length = 0;
    this.storage = {};
  }

  push(data) {
    this.storage[this.length] = data;
    this.length++;
    return;
  }
  pop() {
    if (this.length === 0) return undefined;
    let result = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return result;
  }
  peek() {
    return this.storage[this.length - 1];
  }
  size() {
    return this.length;
  }
  clear() {
    this.storage = {};
    this.length = 0;
  }
}

const s = new Stack();
s.push(100);
s.push(200);
// s.pop();
console.log(s.peek());
s.push(300);
console.log(s.size());
console.log(s.peek());
// s.clear();
// console.log(s);
