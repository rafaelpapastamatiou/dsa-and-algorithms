export class BinaryTreeNode {
  value: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinaryTree {
  root: BinaryTreeNode | null;

  constructor() {
    this.root = null;
  }

  add(value: number) {
    if (!this.root) {
      this.root = new BinaryTreeNode(value)
      return
    }

    return this.addRecursive(value, this.root)
  }

  private addRecursive(value: number, node: BinaryTreeNode): void {
    if (value < node.value && !node.left) {
      node.left = new BinaryTreeNode(value)
      return
    }

    if (value < node.value && node.left) {
      return this.addRecursive(value, node.left)
    }

    if (value >= node.value && !node.right) {
      node.right = new BinaryTreeNode(value)
      return
    }

    if (value >= node.value && node.right) {
      return this.addRecursive(value, node.right)
    }
  }

  search(value: number): boolean {
    return this.searchRecursive(this.root, value)
  }

  private searchRecursive(node: BinaryTreeNode | null, value: number): boolean {
    if (!node) return false;
    if (value === node.value) return true

    if (value > node.value && !node.right) return false
    if (value < node.value && !node.left) return false

    if (value > node.value) return this.searchRecursive(node.right, value)
    if (value < node.value) return this.searchRecursive(node.left, value)

    return false
  }

  preorderTraversal(): number[] {
    const result: number[] = []
    this.preorderTraversalRecusrive(this.root, result)
    return result
  }

  private preorderTraversalRecusrive(node: BinaryTreeNode | null, result: number[]) {
    if (!node) return
    result.push(node.value)
    this.preorderTraversalRecusrive(node.left, result)
    this.preorderTraversalRecusrive(node.right, result)
  }

  inorderTraversal(): number[] {
    const result: number[] = []
    this.inorderTraversalRecursive(this.root, result)
    return result
  }

  private inorderTraversalRecursive(node: BinaryTreeNode | null, result: number[]) {
    if (!node) return
    this.inorderTraversalRecursive(node.left, result)
    result.push(node.value)
    this.inorderTraversalRecursive(node.right, result)
  }

  postOrderTraversal(): number[] {
    const result: number[] = []
    this.postOrderTraversalRecursive(this.root, result)
    return result
  }

  private postOrderTraversalRecursive(node: BinaryTreeNode | null, result: number[]) {
    if (!node) return
    this.postOrderTraversalRecursive(node.left, result)
    this.postOrderTraversalRecursive(node.right, result)
    result.push(node.value)
  }

  depthFirstSearch(value: number): boolean {
    console.log(`Running depth-first search on value ${value}`)
    return this.depthFirstSearchRecursive(this.root, value)
  }

  private depthFirstSearchRecursive(node: BinaryTreeNode | null, value: number): boolean {
    console.log("DFS Current node: ", node?.value, node?.value === value)

    if (!node) return false;
    if (value === node.value) return true
    if (!node.left && !node.right) return false

    return this.depthFirstSearchRecursive(node.left, value) || this.depthFirstSearchRecursive(node.right, value)
  }

  breadthFirstSearch(value: number): boolean {
    console.log(`Running breadth-first search on value ${value}`)
    if (!this.root) return false;

    const queue: BinaryTreeNode[] = []
    queue.push(this.root)

    while (queue.length) {
      const node = queue.shift()
      console.log('BFS Current node: ', node?.value, node?.value === value)

      if (node?.value === value) return true

      if (node?.left) queue.push(node.left)
      if (node?.right) queue.push(node.right)
    }

    return false
  }
}

function main() {
  const tree = new BinaryTree()

  tree.add(5)
  tree.add(3)
  tree.add(1)
  tree.add(10)
  tree.add(15)
  tree.add(7)

  console.log(tree)

  console.log()

  console.log("search 8", tree.search(8))
  console.log("search 5", tree.search(5))

  console.log()

  console.log("preorder", tree.preorderTraversal())
  console.log("inorder", tree.inorderTraversal())
  console.log("postorder", tree.postOrderTraversal())

  console.log("depth-first search")
  console.log(tree.depthFirstSearch(15))

  console.log()

  console.log("breadth-first search")
  console.log(tree.breadthFirstSearch(15))
}
main()