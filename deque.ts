export class Deque<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  pushBack(item: T) {
    this.items.push(item);
  }

  popBack() {
    this.items.pop();
  }

  pushFront(item: T) {
    this.items.unshift(item);
  }

  popFront() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  back() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
