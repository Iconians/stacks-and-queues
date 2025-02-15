// BE SURE TO IMPORT YOUR QUEUE CLASS
import { Queue } from "./1-queue";
import { Deque } from "./deque";
// ==============================
// 1️⃣ Implement a Recent Calls Counter
// ==============================
// Write a function that counts the number of requests received in the past 3000 milliseconds.
// Use a queue to efficiently track the timestamps of requests.
class recentCounter<T> {
  private queue: Queue<number>;
  constructor() {
    this.queue = new Queue<number>();
  }

  ping(num: number): number {
    this.queue.enqueue(num);
    while (this.queue.peek() !== null && this.queue.peek()! < num - 3000) {
      this.queue.dequeue();
    }
    return this.queue.getSize();
  }
}
// Example Test Cases:
export const counter = new recentCounter<number>();
// console.log(counter.ping(1)); // returns 1
// console.log(counter.ping(100)); // returns 2
// console.log(counter.ping(3001)); // returns 3
// console.log(counter.ping(3002)); // returns 3

// ==============================
// 2️⃣ First Unique Character in a String
// ==============================
// Given a string `s`, find the **first unique character** and return its index.
// If no unique character exists, return `-1`. Use a queue to efficiently track character order.

export const firstUniqChar = (str: string): number => {
  const queue = new Queue();
  const map = new Map();
  const indexMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
      indexMap.set(str[i], i);
    }
    queue.enqueue(str[i]);
  }

  while (!queue.isEmpty()) {
    const letter = queue.dequeue();
    if (map.get(letter) === 1) {
      return indexMap.get(letter);
    }
  }

  return -1;
};

// Example Test Cases:
// firstUniqChar("leetcode") // 0
// firstUniqChar("loveleetcode") // 2
// firstUniqChar("aabb") // -1

// ==============================
// 3️⃣ Implement a Stack Using Queues
// ==============================
// Implement a stack using only two queues.
// The implemented stack should support `push`, `pop`, `top`, and `isEmpty` operations.

export class myStack<T> {
  queue1: Queue<unknown>;
  queue2: Queue<unknown>;
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }

  push(val: T) {
    this.queue2.enqueue(val);
    while (!this.queue1.isEmpty()) {
      this.queue2.enqueue(this.queue1.dequeue());
    }
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }

  pop() {
    return this.queue1.dequeue();
  }

  top() {
    return this.queue1.peek();
  }

  isEmpty() {
    return this.queue1.isEmpty();
  }
}

// Example Test Cases:
// myStack.push(1);
// myStack.push(2);
// myStack.top();    // returns 2
// myStack.pop();    // returns 2
// myStack.isEmpty(); // returns false

// ==============================
// 4️⃣ Rotting Oranges
// ==============================
// Given a 2D grid where `0` is an empty cell, `1` is a fresh orange, and `2` is a rotten orange,
// determine the minimum number of minutes needed for all fresh oranges to rot. Use BFS with a queue.

export const orangesRotting = (grid: number[][]) => {
  const n = grid.length;
  const m = grid[0].length;
  const queue = new Queue<number[]>();
  let time = 0;
  let freshOranges = 0;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        queue.enqueue([i, j]);
      } else if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  const isSafe = (i: number, j: number, n: number, m: number): boolean => {
    return i >= 0 && i < n && j >= 0 && j < m;
  };

  while (!queue.isEmpty() && freshOranges > 0) {
    const size = queue.getSize();
    let rotted = false;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.dequeue()!;
      for (let [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (isSafe(nx, ny, n, m) && grid[nx][ny] === 1) {
          grid[nx][ny] = 2;
          queue.enqueue([nx, ny]);
          freshOranges--;
          rotted = true;
        }
      }
    }
    if (rotted) {
      time++;
    }
  }
  return freshOranges === 0 ? time : -1;
};

// Example Test Cases:
// orangesRotting([[2,1,1],[1,1,0],[0,1,1]]) // 4
// orangesRotting([[2,1,1],[0,1,1],[1,0,1]]) // -1
// orangesRotting([[0,2]]) // 0

// ==============================
// 5️⃣ Sliding Window Maximum
// ==============================
// Given an array `nums` and an integer `k`, return the maximum values in every window of size `k`.
// Use a deque (double-ended queue) to efficiently track the max values.

export const maxSlidingWindow = (arr: number[], num: number) => {
  if (!arr.length) return [];
  const result = [];
  const deque = new Deque();

  for (let i = 0; i < arr.length; i++) {
    if (!deque.isEmpty() && (deque.front() as number) < i - num + 1) {
      deque.popFront();
    }

    while (!deque.isEmpty() && arr[deque.back() as number] < arr[i]) {
      deque.popBack();
    }

    deque.pushBack(i);

    if (i >= num - 1) {
      result.push(arr[deque.front() as number]);
    }
  }
  return result;
};

// Example Test Cases:
// maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3) // [3,3,5,5,6,7]
// maxSlidingWindow([1], 1) // [1]
// maxSlidingWindow([9, 11], 2) // [11]
