// BE SURE TO IMPORT YOUR STACK CLASS
import { Stack } from "./2-stack";
// ==============================
// 1️⃣ Reverse a String Using a Stack
// ==============================
// Write a function that takes a string as input and returns the reversed string using a stack.
// You may only use stack operations (`push`, `pop`, `isEmpty`).

export const reverseString = (str: string): string => {
  const stack = new Stack();
  let string = "";
  for (let word of str) {
    stack.push(word);
  }

  for (let i = 0; i < str.length; i++) {
    string += stack.pop();
  }

  return string;
};

// Example Test Cases:
// reverseString("hello") // "olleh"
// reverseString("world") // "dlrow"
// reverseString("") // ""
// reverseString("abcd") // "dcba"

// ==============================
// 2️⃣ Check for Balanced Parentheses
// ==============================
// Given a string containing only the characters `()`, `{}`, and `[]`,
// write a function to determine if the string is valid.
// A string is valid if brackets are closed in the correct order. Use a stack to track open brackets.

export const isValidParentheses = (str: string): boolean => {
  const stack = new Stack();
  const set = new Set(["(", "[", "{"]);
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let char of str) {
    if (set.has(char)) {
      stack.push(char);
    } else if (map.has(char)) {
      if (stack.isEmpty() || stack.pop() !== map.get(char)) {
        return false;
      }
    }
  }
  return stack.isEmpty();
};

// Example Test Cases:
// isValidParentheses("({[]})") // true
// isValidParentheses("({[)]}") // false
// isValidParentheses("()") // true
// isValidParentheses("{[()]}") // true
// isValidParentheses("(((") // false

// ==============================
// 3️⃣ Evaluate a Postfix Expression
// ==============================
// Write a function that evaluates a mathematical expression in **postfix notation** (Reverse Polish Notation).
// The function should use a stack to process numbers and operators.
// Assume the input is a space-separated string of numbers and `+`, `-`, `*`, or `/` operators.

export const evaluatePostfix = (str: string): number => {
  const stack = new Stack<number>();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === " ") {
      continue;
    }

    if (char >= "0" && char <= "9") {
      let num = 0;
      while (char >= "0" && char <= "9") {
        num = num * 10 + (char.charCodeAt(0) - "0".charCodeAt(0));
        i++;
        char = str[i];
      }
      i--;
      stack.push(num);
    } else {
      let val1: number = stack.pop() ?? 0;
      let val2: number = stack.pop() ?? 0;

      switch (char) {
        case "+":
          stack.push(val2 + val1);
          break;
        case "-":
          stack.push(val2 - val1);
          break;
        case "*":
          stack.push(val2 * val1);
          break;
        case "/":
          stack.push(val2 / val1);
          break;
      }
    }
  }
  return stack.pop() ?? 0;
};

// Example Test Cases:
// evaluatePostfix("3 4 +") // 7
// evaluatePostfix("5 1 2 + 4 * + 3 -") // 14
// evaluatePostfix("10 2 8 * + 3 -") // 23
// evaluatePostfix("6 2 /") // 3
// evaluatePostfix("4 5 * 2 /") // 10

// ==============================
// 4️⃣ Next Greater Element
// ==============================
// Given an array of integers, find the **next greater element** for each element.
// The next greater element of an element **x** is the first element to the right that is greater than **x**.
// If none exists, return `-1` for that element. Use a stack for efficiency.

export const nextGreaterElement = (arr: number[]): number[] => {
  let stack = new Stack<number>();
  let result = new Array(arr.length).fill(-1);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.getSize() > 0 && stack.peek()! <= arr[i]) {
      stack.pop();
    }

    if (stack.getSize() > 0) {
      result[i] = stack.peek();
    }

    stack.push(arr[i]);
  }

  return result;
};

// Example Test Cases:
// nextGreaterElement([4, 5, 2, 10, 8]) // [5, 10, 10, -1, -1]
// nextGreaterElement([3, 2, 1]) // [-1, -1, -1]
// nextGreaterElement([1, 3, 2, 4]) // [3, 4, 4, -1]

// ==============================
// 5️⃣ Daily Temperatures
// ==============================
// Given an array `temperatures` where `temperatures[i]` is the temperature on day `i`,
// return an array **answer** where `answer[i]` is the number of days you have to wait after the `i-th` day
// to get a warmer temperature. If there is no future day with a warmer temperature, return `0`.

export const dailyTemperatures = (arr: number[]): number[] => {
  const stack = new Stack<number>();
  let result = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    while (stack.getSize() > 0 && arr[i] > arr[stack.peek()!]) {
      const prev = stack.pop();
      if (prev !== null) {
        result[prev] = i - prev;
      }
    }
    stack.push(i);
  }
  return result;
};

// Example Test Cases:
// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]) // [1, 1, 4, 2, 1, 1, 0, 0]
// dailyTemperatures([30, 40, 50, 60]) // [1, 1, 1, 0]
// dailyTemperatures([30, 20, 10]) // [0, 0, 0]
