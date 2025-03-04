import { log } from "console";
import { DoublyLinkedList, ListNode } from "../data-structures/doubly-linked-list";

function findMiddle(head: ListNode) {
  let slow = head
  let fast = head.next

  while (fast?.next) {
    slow = slow.next!
    fast = fast.next.next
  }

  return slow
}

function merge(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const newHead = new ListNode(null)
  let newTail = newHead

  let l1: ListNode | null = list1
  let l2: ListNode | null = list2

  while (l1 && l2) {
    if (l1.val! < l2.val!) {
      newTail.next = l1
      l1 = l1.next
    }
    else {
      newTail.next = l2
      l2 = l2.next
    }

    newTail = newTail.next
  }

  if (l1 && !l2) {
    newTail.next = l1
  }
  else if (l2 && !l1) {
    newTail.next = l2
  }

  return newHead.next
}

function mergesort(head: ListNode | null) {
  if (!head?.next) {
    return head
  }

  const mid = findMiddle(head)
  const afterMid = mid.next
  mid.next = null

  const left = mergesort(head)
  const right = mergesort(afterMid)

  const sortedList = merge(left, right)

  return sortedList
}

function runMergeSort() {
  const list = new DoublyLinkedList()
  list.addToEnd(6)
  list.addToEnd(3)
  list.addToEnd(7)
  list.addToEnd(2)
  list.addToEnd(10)
  list.addToEnd(1)
  list.addToEnd(5)
  list.addToEnd(9)
  list.addToEnd(8)
  list.addToEnd(4)

  if (!list.head) return

  console.log("before sorting")
  list.log()

  const newListHead = mergesort(list.head)

  console.log("after sorting")
  list.head = newListHead
  list.log()
}
runMergeSort()