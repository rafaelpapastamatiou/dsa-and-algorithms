export function dijkstra(edges: Array<[string, string, number]>, startNode: string, targetNode: string) {
  const graph: Record<string, Record<string, number>> = {}

  for (const edge of edges) {
    const [node1, node2, weight] = edge

    if (!graph[node1]) {
      graph[node1] = { [node2]: weight }
    }
    else {
      graph[node1][node2] = weight
    }
  }

  const distancesFromTarget = { [startNode]: 0 }

  const queue: Array<[string, number]> = [[startNode, 0]]

  while (queue.length) {
    const item = queue.pop();
    if (!item) continue

    const [node, weight] = item

    for (const neighbor in graph[node]) {
      const neighborWeight = graph[node][neighbor]
      const newWeight = weight + neighborWeight

      if (distancesFromTarget[neighbor] === undefined || newWeight < distancesFromTarget[neighbor]) {
        distancesFromTarget[neighbor] = newWeight
        queue.push([neighbor, newWeight])
      }
    }
  }

  return distancesFromTarget[targetNode]
}

(function main() {
  const distance = dijkstra(
    [
      ["A", "B", 7],
      ["A", "E", 1],
      ["B", "A", 7],
      ["B", "C", 3],
      ["B", "E", 8],
      ["C", "B", 3],
      ["C", "E", 2],
      ["C", "D", 6],
      ["D", "C", 6],
      ["D", "E", 7],
      ["E", "A", 1],
      ["E", "B", 8],
      ["E", "C", 2],
      ["E", "D", 7]
    ],
    "A",
    "C"
  )

  console.log("distance:", distance)
})()