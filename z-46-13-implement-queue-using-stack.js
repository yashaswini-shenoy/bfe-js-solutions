// In JavaScript, we could use array to work as both a Stack or a queue.

// const arr = [1, 2, 3, 4]
// arr.push(5) // now array is [1, 2, 3, 4, 5]
// arr.pop() // 5, now the array is [1, 2, 3, 4]
// Above code is a Stack, while below is a Queue

// const arr = [1, 2, 3, 4]
// arr.push(5) // now the array is [1, 2, 3, 4, 5]
// arr.shift() // 1, now the array is [2, 3, 4, 5]
// now suppose you have a stack, which has only follow interface:

// class Stack {
//   push(element) { /* add element to stack */ }
//   peek() { /* get the top element */ }
//   pop() { /* remove the top element */}
//   size() { /* count of elements */}
// }
// Could you implement a Queue by using only above Stack? A Queue must have following interface

// class Queue {
//   enqueue(element) { /* add element to queue, similar to Array.prototype.push */ }
//   peek() { /* get the head element*/ }
//   dequeue() { /* remove the head element, similar to Array.prototype.pop */ }
//   size() { /* count of elements */ }
// }
// note

// you can only use Stack as provided, Array should be avoided for the purpose of practicing.

// SOLUTION
class Queue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  enqueue(element) {
    this.pushStack.push(element);
  }

  _move() {
    while (this.pushStack.size() > 0) {
      this.popStack.push(this.pushStack.pop());
    }
  }

  peek() {
    if (this.popStack.size() > 0) {
      return this.popStack.peek();
    }

    if (this.pushStack.size() > 0) {
      this._move();
      return this.popStack.peek();
    }

    return undefined;
  }

  size() {
    return this.pushStack.size() + this.popStack.size();
  }

  dequeue() {
    if (this.popStack.size() > 0) {
      return this.popStack.pop();
    }

    if (this.pushStack.size() > 0) {
      this._move();
      return this.popStack.pop();
    }

    return undefined;
  }
}
