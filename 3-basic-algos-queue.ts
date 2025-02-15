// BE SURE TO IMPORT YOUR QUEUE CLASS

import { Queue } from "./1-queue";
import { Stack } from "./2-stack";

// ==============================
// [1] Print the First `N` Numbers in Increasing Order using a Queue
// ==============================
// 📝 Problem Description:
// Given a number `N`, print the first `N` natural numbers in increasing order using a queue.
//
// ✅ Requirements:
// - Implement a function `printNumbers(n)` that returns an array of numbers from `1` to `N`.
// - Use a **queue** to generate the sequence.
// - The numbers must be printed in **increasing order**.
//
// 📌 Example Test Cases:
// console.log(printNumbers(5)); // Output: [1, 2, 3, 4, 5]
// console.log(printNumbers(3)); // Output: [1, 2, 3]
// console.log(printNumbers(1)); // Output: [1]

export function printNumbers(n: number): number[] {
  const queue = new Queue<number>();
  const arr: number[] = [];

  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.getSize() !== 0) {
    arr.push(queue.dequeue()!);
  }
  return arr;
}

// ==============================
// [2] Reverse a Queue
// ==============================
// 📝 Problem Description:
// Given a queue, write a function that reverses the order of elements using a stack.
//
// ✅ Requirements:
// - Implement a function `reverseQueue(queue)`.
// - Use a **stack** to reverse the order of elements.
// - The queue should be modified **in place**.
//
// 📌 Example Test Cases:
// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// reverseQueue(q);
// console.log(q.dequeue(), q.dequeue(), q.dequeue(), q.dequeue()); // Output: 4 3 2 1

export function reverseQueue(queue: Queue<number>): Queue<number> {
  const stack = new Stack<number>();

  while (queue.getSize() !== 0) {
    stack.push(queue.dequeue()!);
  }

  while (!stack.isEmpty()) {
    queue.enqueue(stack.pop()!);
  }
  return queue;
}

// ==============================
// [3] Generate the First N Fibonacci Numbers using a Queue
// ==============================
// 📝 Problem Description:
// Use a queue to generate the first `N` Fibonacci numbers.
//
// ✅ Requirements:
// - Implement a function `generateFibonacci(n)`.
// - Use a **queue** to generate and store the sequence.
// - Return an array of the first `n` Fibonacci numbers.
//
// 📌 Example Test Cases:
// console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
// console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

export function generateFibonacci(n: number): number[] {
  const queue = new Queue<number>();
  let arr: number[] = [];
  if (n <= 0) return [];
  queue.enqueue(0);

  if (n > 1) {
    queue.enqueue(1);
  }

  let num1 = 0,
    num2 = 1;

  for (let i = 2; i < n; i++) {
    const nextFib = num1 + num2;
    queue.enqueue(nextFib);

    num1 = num2;
    num2 = nextFib;
  }

  while (queue.getSize() > 0) {
    arr.push(queue.dequeue()!);
  }

  return arr;
}

// ==============================
// [4] Reverse Words in a Sentence Using a Queue
// ==============================
// 📝 Problem Description:
// Given a sentence (string) `s`, use a queue to reverse the order of words while keeping the words themselves unchanged.
//
// ✅ Requirements:
// - Implement a function `reverseWords(sentence)`.
// - Use a **queue** to process the words.
// - The function should return a **new sentence** with words in reverse order.
// - Assume words are **separated by a single space** and there are no leading/trailing spaces.
//
// 📌 Example Test Cases:
// console.log(reverseWords("Hello world"));       // Output: "world Hello"
// console.log(reverseWords("Queues are fun"));    // Output: "fun are Queues"
// console.log(reverseWords("Data Structures"));   // Output: "Structures Data"

export function reverseWords(sentence: string): string {
  const queue = new Queue();
  let str = "";
  const split = sentence.split(" ");

  for (let i = split.length - 1; i >= 0; i--) {
    queue.enqueue(split[i]);
  }

  while (queue.getSize()) {
    str += queue.dequeue() + " ";
  }
  return str.trim();
}
