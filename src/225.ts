class MyQueue {
  queue: any[];
  constructor() {
    this.queue = [];
  }

  push(n: number) {
    this.queue.push(n);
  }

  peek() {
    return this.queue[0];
  }

  pop() {
    let r = this.peek();
    this.queue.shift();
    return r;
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

class MyStack {
  public Q: MyQueue;
  constructor() {
    this.Q = new MyQueue();
  }

  push(x: number): void {
    let l = this.Q.queue.length;
    this.Q.push(x);
    for (let i = 1; i <= l; i++) {
      let r = this.Q.pop();
      this.Q.push(r);
    }
  }

  pop(): number {
    return this.Q.pop();
  }

  top(): number {
    return this.Q.peek();
  }

  empty(): boolean {
    return this.Q.isEmpty();
  }
}
