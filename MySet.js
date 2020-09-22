class MySet {
  constructor() {
    this.length = 0;
    this.storage = [];
  }

  has(data) {
    // this will return true if item is not in array. false if item in the array
    return this.storage.indexOf(data) === -1;
  }

  add(data) {
    if (this.has(data)) {
      this.storage.push(data);
      this.length++;
      return true;
    }
    return false;
  }
  remove(data) {
    if (this.length === 0) return undefined;
    if (this.has(data)) return undefined;
    const [deletedElement] = this.storage.splice(this.storage.indexOf(data), 1);
    this.length--;
    return deletedElement;
  }

  union(otherSet) {
    let unionSet = new MySet();
    let combindArray = [...this.values(), ...otherSet.values()];

    combindArray.forEach((ele) => {
      unionSet.add(ele);
    });
    return unionSet;
  }

  // this method return a array with comman element in the both sets
  intersection(otherSet) {
    let intersectionSet = new MySet();

    this.values().forEach((ele) => {
      if (!otherSet.has(ele)) {
        intersectionSet.add(ele);
      }
    });
    return intersectionSet;
  }

  // this method check if other set has all the value of first set(this.values is the first set)
  subSet(otherSet) {
    return this.values().every((ele) => !otherSet.has(ele));
  }

  values() {
    return this.storage;
  }

  get size() {
    return this.length;
  }
}

let set = new MySet();
let t = new MySet();

// set.add(100);
// set.add(200);
// set.add(300);

// t.add(200);
// t.add(100);
// t.add(300);

// console.log(t);
// console.log(set);

// console.log(t.subSet(set));
// console.log(set.intersection(t));

// console.log(set.union(t));
// set.add(300);
// console.log(set.remove(100));
// console.log(set.values());
// console.log(set.size);
// console.log(set);
