import { describe, expect, it } from "vitest";
import {
  generateFibonacci,
  printNumbers,
  reverseQueue,
  reverseWords,
} from "../3-basic-algos-queue";
import { Queue } from "../1-queue";

describe("test printNumbers", () => {
  it("it should return [1, 2, 3, 4, 5]", () => {
    expect(printNumbers(5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("it should return [1, 2, 3]", () => {
    expect(printNumbers(3)).toEqual([1, 2, 3]);
  });

  it("it should return [1]", () => {
    expect(printNumbers(1)).toEqual([1]);
  });

  // console.log(printNumbers(5)); // Output: [1, 2, 3, 4, 5]
  // console.log(printNumbers(3)); // Output: [1, 2, 3]
  // console.log(printNumbers(1)); // Output: [1]
});

describe("test reverseQueue", () => {
  it("should return 4, 3, 2, 1", () => {
    const q = new Queue<number>();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    reverseQueue(q);
    expect(q.dequeue()).toEqual(4);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(1);
  });
});

describe("test generateFibonacci", () => {
  it("should return [0, 1, 1, 2, 3]", () => {
    expect(generateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  it("should return [0, 1, 1, 2, 3, 5, 8]", () => {
    expect(generateFibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  // console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
  // console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
});

describe("test reverseWords", () => {
  it("should return world Hello", () => {
    expect(reverseWords("Hello world")).toEqual("world Hello");
  });

  it("should return fun are Queues", () => {
    expect(reverseWords("Queues are fun")).toEqual("fun are Queues");
  });

  it("should return Structures Data", () => {
    expect(reverseWords("Data Structures")).toEqual("Structures Data");
  });

  // console.log(reverseWords("Hello world"));       // Output: "world Hello"
  // console.log(reverseWords("Queues are fun"));    // Output: "fun are Queues"
  // console.log(reverseWords("Data Structures"));   // Output: "Structures Data"
});
