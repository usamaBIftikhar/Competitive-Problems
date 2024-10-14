class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(data) {
    this.data[this.length] = data;
    this.length += 1;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    delete this.data[this.length - 1];
    this.length -= +1;
  }
  shift() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  deleteByIndex(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

let myArray = new MyArray();
myArray.push("apple");
myArray.push("orange");
myArray.push("banana");
myArray.push("pineapple");
console.log(myArray.get(2));
myArray.deleteByIndex(1);
console.log(myArray);
