export class MinHeap {
  heap: number[]

  constructor() {
    this.heap = []
  }

  private leftChild(index: number) {
    return index * 2 + 1
  }

  private rightChild(index: number) {
    return index * 2 + 2
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2)
  }

  private heapifyUp(index: number) {
    if (index === 0) return

    const parentIndex = this.parent(index)

    if (this.heap[parentIndex] < this.heap[index]) return

    const aux = this.heap[parentIndex]
    this.heap[parentIndex] = this.heap[index]
    this.heap[index] = aux

    this.heapifyUp(parentIndex)
  }

  private heapifyDown(index: number) {
    const size = this.heap.length

    const leftChild = this.leftChild(index)
    const rightChild = this.rightChild(index)

    let smallest = index

    if (leftChild < size && this.heap[leftChild] < this.heap[smallest]) {
      smallest = leftChild
    }
    if (rightChild < size && this.heap[rightChild] < this.heap[smallest]) {
      smallest = rightChild
    }

    if (smallest === index) return

    const aux = this.heap[index]
    this.heap[index] = this.heap[smallest]
    this.heap[smallest] = aux

    this.heapifyDown(smallest)
  }

  add(value: number) {
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }

  popMin() {
    if (this.heap.length === 0) {
      throw new Error("Empty Heap!")
    }

    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    const minValue = this.heap[0]

    this.heap[0] = this.heap.pop()!
    this.heapifyDown(0)

    return minValue
  }
}

(function main() {
  const minHeap = new MinHeap()

  console.log("adding 5")
  minHeap.add(5)
  console.log(minHeap)

  console.log()

  console.log("adding 7")
  minHeap.add(7)
  console.log(minHeap)

  console.log()

  console.log("adding 3")
  minHeap.add(3)
  console.log(minHeap)

  console.log()

  console.log("adding 8")
  minHeap.add(8)
  console.log(minHeap)

  console.log()

  console.log("adding 6")
  minHeap.add(6)
  console.log(minHeap)

  console.log()

  console.log("popping min value")
  console.log("min value:", minHeap.popMin())
  console.log(minHeap)
})()