// Step 1: Create a Queue class
// - Define a class named Queue.
// - Look into the private keyword. Make sure we can initialize a queue of any input type.
// - Initialize the queue in the constructor. Remember, we may need to utilize other data structures here to create the behavior we are looking for.
class QueueNode<T> {
  data: T;
  next: QueueNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Queue<T> {
  private front: QueueNode<T> | null;
  private rear: QueueNode<T> | null;
  private size: number;

  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Step 2: Implement enqueue method
  // - Create a method to add an element to the queue.
  // - Add the element to the end of the array.

  enqueue(data: T) {
    const newNode = new QueueNode(data);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      if (this.rear !== null) {
        this.rear.next = newNode;
      }
      this.rear = newNode;
    }
    this.size++;
  }

  // Step 3: Implement dequeue method
  // - Create a method to remove the first element.
  // - If the queue is empty, return null.
  // - Otherwise, remove and return the first item.

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removeNode = this.front;

    if (removeNode !== null) {
      this.front = this.front!.next;
      if (this.front === null) {
        this.rear = null;
      }
      this.size--;
      return removeNode.data;
    }
    return null;
  }

  // Step 4: Implement front method
  // - Create a method to return the first element without removing it.
  // - If the queue is empty, return null.

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front?.data;
  }

  // Step 5: Implement isEmpty and size methods
  // - Create a method to check if the queue is empty.
  // - Create a method to return the number of elements in the queue.

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Step 6: Implement print method
  // - Create a method to display the queue elements.
  // - Print elements in order, separated by "<-".

  print() {
    let current = this.front;
    const arr: T[] = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr.join(" <- "));
  }
}

// Uncomment The Code Below to See If It Works! Feel free to write more code to test and examine the functionality of the queue.
const queue = new Queue<number>(); // Create a queue that stores numbers
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10 <- 20 <- 30
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.getSize()); // 2
console.log(queue.isEmpty()); // false
