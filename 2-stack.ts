// Step 1: Create a Stack class
// - Define a class named Stack.
// - Look into the private keyword. Make sure we can initialize a stack of any input type.
// - Initialize the stack in the constructor. Remember, we may need to utilize other data structures here to create the behavior we are looking for.
class StackNode<T> {
  value: T;
  next: StackNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Stack<T> {
  private top: StackNode<T> | null;
  private size: number;

  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Step 2: Implement push method
  // - Create a method to add an element to the stack.
  // - Add the element to the end of the array (top of the stack).

  push(val: T) {
    const newNode = new StackNode(val);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Step 3: Implement pop method
  // - Create a method to remove the last element (top of the stack).
  // - If the stack is empty, return null.
  // - Otherwise, remove and return the last item.

  pop() {
    if (this.isEmpty() || this.top === null) {
      return null;
    }
    const poppedVal = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedVal;
  }

  // Step 4: Implement peek method
  // - Create a method to return the last element without removing it.
  // - If the stack is empty, return null.

  peek() {
    return this.isEmpty() ? null : this.top?.value;
  }

  // Step 5: Implement isEmpty and size methods
  // - Create a method to check if the stack is empty.
  // - Create a method to return the number of elements in the stack.

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Step 6: Implement print method
  // - Create a method to display the stack elements.
  // - Print elements in order, separated by " | " with the top of the stack on the right.

  print() {
    let current = this.top;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr.reverse().join(" | "));
  }
}

// Uncomment The Code Below to See If It Works! Feel free to write more code to test and examine the functionality of the stack.
// const stack = new Stack<number>(); // Create a stack that stores numbers
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.print(); // Output: 10 | 20 | 30
// console.log(stack.pop()); // 30
// console.log(stack.peek()); // 20
// console.log(stack.getSize()); // 2
// console.log(stack.isEmpty()); // false
