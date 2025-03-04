export function numberOfIslands(matrix: Array<Array<0 | 1>>): number {
  const visitedNodes = new Set<string>()
  let count = 0

  function getKey(i: number, j: number): string {
    return `${i}-${j}`
  }

  function dfs(i: number, j: number) {
    const nodeKey = getKey(i, j)

    if (visitedNodes.has(nodeKey)) return
    if (i < 0 || i >= matrix.length) return
    if (j < 0 || j >= matrix[i].length) return
    if (matrix[i][j] !== 1) return

    visitedNodes.add(nodeKey)

    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 1 || visitedNodes.has(getKey(i, j))) continue

      count++
      dfs(i, j)
    }
  }

  return count
}

(function main() {
  const map: Array<Array<0 | 1>> = [
    [1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1]
  ]

  const totalIslands = numberOfIslands(map)

  console.log("number of islands:", totalIslands)
})()