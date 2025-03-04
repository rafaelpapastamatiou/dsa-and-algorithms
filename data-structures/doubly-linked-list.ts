export class ListNode {
  val: number | null;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(val: number | null) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  log() {
    let currNode = this.head

    while (currNode) {
      console.log("Node val:", currNode.val)
      currNode = currNode.next
    }
  }

  addToStart(val: number) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
  }

  addToEnd(val: number) {
    const newNode = new ListNode(val);

    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode
    this.tail = newNode
  }
}