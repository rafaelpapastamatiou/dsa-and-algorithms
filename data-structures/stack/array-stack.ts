export class ArrayStack<T> {
  items: T[] = []
  pointer: number
  originalCapacity: number
  currentCapacity: number

  constructor(capacity = 1000) {
    this.items = new Array(capacity)
    this.pointer = -1
    this.originalCapacity = capacity
    this.currentCapacity = this.originalCapacity
  }

  push(item: T) {
    if (this.pointer + 1 >= this.items.length) {
      this.items = this.items.concat(new Array(this.originalCapacity))
      this.currentCapacity = this.currentCapacity + this.originalCapacity
    }

    console.log()

    console.log("stack before push", this.items)
    console.log("pointer before push", this.pointer)

    this.pointer++
    this.items[this.pointer] = item

    console.log("stack after push", this.items)
    console.log("pointer after push", this.pointer)

  }

  pop() {
    if (!this.items.length) {
      throw new Error("Empty stack!")
    }

    const item = this.items[this.pointer]
    this.pointer--
    return item
  }

  peek() {
    if (!this.items.length) {
      throw new Error("Empty stack!")
    }

    return this.items.at(-1)
  }

  size() {
    return this.items.length
  }
}

(function main() {
  const arrayStack = new ArrayStack(5)
  arrayStack.push(1)
  arrayStack.push(2)
  arrayStack.push(3)
  arrayStack.push(4)
  arrayStack.push(5)
  arrayStack.push(6)
})()