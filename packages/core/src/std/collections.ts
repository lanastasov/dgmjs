/**
 * A size-limited stack.
 * Delete the last inserted item if overflow.
 */
export class Stack<T> {
  maxSize: number;
  stack: T[];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  /**
   * Clear stack.
   */
  clear() {
    this.stack = [];
  }

  /**
   * Push an item
   */
  push(item: T) {
    this.stack.push(item);
    if (this.stack.length > this.maxSize) {
      this.stack.splice(0, 1);
    }
  }

  /**
   * Pop an item from the top
   */
  pop(): T | undefined {
    return this.stack.pop();
  }

  /**
   * Return size of stack
   */
  size(): number {
    return this.stack.length;
  }
}
