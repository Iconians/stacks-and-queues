import { describe, expect, it } from "vitest";
import {
  counter,
  firstUniqChar,
  maxSlidingWindow,
  myStack,
  orangesRotting,
} from "../3-algos-queue";

describe("test recent call counter", () => {
  it("should return ", () => {
    expect(counter.ping(1)).toEqual(1);
    expect(counter.ping(100)).toEqual(2);
    expect(counter.ping(3001)).toEqual(3);
    expect(counter.ping(3002)).toEqual(3);
  });
});

describe("test firstUnigChar", () => {
  it("should return 0", () => {
    expect(firstUniqChar("leetcode")).toEqual(0);
  });
  it("should return 2", () => {
    expect(firstUniqChar("loveleetcode")).toEqual(2);
  });
  it("should return -1", () => {
    expect(firstUniqChar("aabb")).toEqual(-1);
  });

  // firstUniqChar("leetcode") // 0
  // firstUniqChar("loveleetcode") // 2
  // firstUniqChar("aabb") // -1
});

describe("test myStack", () => {
  const stack = new myStack();
  stack.push(1);
  stack.push(2);

  it("should return 2", () => {
    expect(stack.top()).toEqual(2);
  });

  it("should return 2", () => {
    expect(stack.pop()).toEqual(2);
  });

  it("should return false", () => {
    expect(stack.isEmpty()).toEqual(false);
  });

  // myStack.push(1);
  // myStack.push(2);
  // myStack.top();    // returns 2
  // myStack.pop();    // returns 2
  // myStack.isEmpty(); // returns false
});

describe("test orangesRotting", () => {
  it("it should return 4", () => {
    expect(
      orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ])
    ).toEqual(4);
  });

  it("it should return -1", () => {
    expect(
      orangesRotting([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ])
    ).toEqual(-1);
  });

  it("it should return 0", () => {
    expect(orangesRotting([[0, 2]])).toEqual(0);
  });

  // orangesRotting([[2,1,1],[1,1,0],[0,1,1]]) // 4
  // orangesRotting([[2,1,1],[0,1,1],[1,0,1]]) // -1
  // orangesRotting([[0,2]]) // 0
});

describe("test maxSlidingWindow", () => {
  it("it should return [3,3,5,5,6,7]", () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ]);
  });

  it("it should return [1]", () => {
    expect(maxSlidingWindow([1], 1)).toEqual([1]);
  });

  it("it should return [11]", () => {
    expect(maxSlidingWindow([9, 11], 2)).toEqual([11]);
  });

  // maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3) // [3,3,5,5,6,7]
  // maxSlidingWindow([1], 1) // [1]
  // maxSlidingWindow([9, 11], 2) // [11]
});
