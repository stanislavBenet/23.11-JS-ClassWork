function MyArrayPrototype() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastItem;
  };
}
function MyArray() {
  this.length = 0;
  if (arguments.length === 1) {
    for (let i = 0; i < arguments[0]; i++) {
      this.push(undefined);
    }
    return;
  }
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
MyArray.prototype = new MyArrayPrototype();
const myArr = new MyArray(4, 5, 5, 8);
myArr.push(12, 14, 12);
myArr.push(56);
