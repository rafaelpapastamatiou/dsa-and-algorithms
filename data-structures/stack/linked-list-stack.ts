class ListNode<T> {
  value: T
  next: ListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export class LinkedListStack<T> {
  private head: ListNode<T> | null;
  private _size: number;

  constructor() {
    this.head = null
    this._size = 0
  }

  push(value: T) {
    const node = new ListNode<T>(value)
    node.next = this.head
    this.head = node
    this._size++
  }

  pop(): T {
    if (!this.head) {
      throw new Error("Empty Stack!");
    }

    const node = this.head
    this.head = this.head.next
    this._size--
    return node.value
  }

  peek(): T {
    if (!this.head) {
      throw new Error("Empty Stack!");
    }

    return this.head.value
  }

  size(): number {
    return this._size
  }
}

(function main() {
  const stack = new LinkedListStack<number>()
  console.log("pushing 1")
  stack.push(1)
  console.log("peek", stack.peek())
  console.log("size", stack.size())

  console.log()

  console.log("pushing 2")
  stack.push(2)
  console.log("peek", stack.peek())
  console.log("size", stack.size())
  console.log("pushing 3")
  stack.push(3)
  console.log("peek", stack.peek())
  console.log("size", stack.size())

  console.log()

  console.log("popping...")
  console.log("popped", stack.pop())
  console.log("peek", stack.peek())
  console.log("size", stack.size())
})()