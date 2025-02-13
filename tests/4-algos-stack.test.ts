import { describe, expect, it } from "vitest";
import {
  dailyTemperatures,
  evaluatePostfix,
  isValidParentheses,
  nextGreaterElement,
  reverseString,
} from "../4-algos-stack";

describe("test reverseString", () => {
  it("it should return olleh", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });

  it("it should return dlrow", () => {
    expect(reverseString("world")).toEqual("dlrow");
  });

  it("it should return ''", () => {
    expect(reverseString("")).toEqual("");
  });

  it("it should return dcba", () => {
    expect(reverseString("abcd")).toEqual("dcba");
  });

  // reverseString("hello") // "olleh"
  // reverseString("world") // "dlrow"
  // reverseString("") // ""
  // reverseString("abcd") // "dcba"
});

describe("test isValidParentheses", () => {
  it("it should return true", () => {
    expect(isValidParentheses("({[]})")).toEqual(true);
  });

  it("it should return false", () => {
    expect(isValidParentheses("({[)]}")).toEqual(false);
  });

  it("it should return false", () => {
    expect(isValidParentheses("()")).toEqual(true);
  });

  it("it should return false", () => {
    expect(isValidParentheses("{[()]}")).toEqual(true);
  });

  it("it should return false", () => {
    expect(isValidParentheses("(((")).toEqual(false);
  });

  // isValidParentheses("({[]})") // true
  // isValidParentheses("({[)]}") // false
  // isValidParentheses("()") // true
  // isValidParentheses("{[()]}") // true
  // isValidParentheses("(((") // false
});

describe("test evaluatePostfix", () => {
  it("should return 7", () => {
    expect(evaluatePostfix("3 4 +")).toEqual(7);
  });

  it("should return 14", () => {
    expect(evaluatePostfix("5 1 2 + 4 * + 3 -")).toEqual(14);
  });

  it("should return 23", () => {
    expect(evaluatePostfix("10 2 8 * + 3 -")).toEqual(23);
  });

  it("should return 3", () => {
    expect(evaluatePostfix("6 2 /")).toEqual(3);
  });

  it("should return 10", () => {
    expect(evaluatePostfix("4 5 * 2 /")).toEqual(10);
  });

  // evaluatePostfix("3 4 +") // 7
  // evaluatePostfix("5 1 2 + 4 * + 3 -") // 14
  // evaluatePostfix("10 2 8 * + 3 -") // 23
  // evaluatePostfix("6 2 /") // 3
  // evaluatePostfix("4 5 * 2 /") // 10
});

describe("test nextGreaterElement", () => {
  it("should return [5, 10, 10, -1, -1]", () => {
    expect(nextGreaterElement([4, 5, 2, 10, 8])).toEqual([5, 10, 10, -1, -1]);
  });

  it("should return [-1, -1, -1]", () => {
    expect(nextGreaterElement([3, 2, 1])).toEqual([-1, -1, -1]);
  });

  it("should return [3, 4, 4, -1]", () => {
    expect(nextGreaterElement([1, 3, 2, 4])).toEqual([3, 4, 4, -1]);
  });

  // nextGreaterElement([4, 5, 2, 10, 8]) // [5, 10, 10, -1, -1]
  // nextGreaterElement([3, 2, 1]) // [-1, -1, -1]
  // nextGreaterElement([1, 3, 2, 4]) // [3, 4, 4, -1]
});

describe("test dailyTemperatures", () => {
  it("should return [1, 1, 4, 2, 1, 1, 0, 0]", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
  });

  it("should return [1, 1, 1, 0]", () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
  });

  it("should return [0, 0, 0]", () => {
    expect(dailyTemperatures([30, 20, 10])).toEqual([0, 0, 0]);
  });

  // dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]) // [1, 1, 4, 2, 1, 1, 0, 0]
  // dailyTemperatures([30, 40, 50, 60]) // [1, 1, 1, 0]
  // dailyTemperatures([30, 20, 10]) // [0, 0, 0]
});
