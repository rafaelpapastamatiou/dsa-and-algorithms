function partition(arr: number[], left: number, right: number): number {
  const pivot = arr[left]

  let i = left

  for (let j = left + 1; j <= right; j++) {
    if (arr[j] < pivot) {
      i++
      const aux = arr[i]
      arr[i] = arr[j]
      arr[j] = aux
    }
  }

  arr[left] = arr[i]
  arr[i] = pivot

  return i
}

function quicksort(arr: number[], left: number, right: number) {
  if (left < right) {
    const pivot_index = partition(arr, left, right)
    quicksort(arr, left, pivot_index - 1)
    quicksort(arr, pivot_index + 1, right)
  }
}

function runQuicksort() {
  const arr = [6, 3, 7, 2, 10, 1, 5, 9, 8, 4]
  quicksort(arr, 0, arr.length - 1)
  console.log("sorted", arr)
}
runQuicksort()