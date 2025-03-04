function bubblesort(arr: number[]) {
  for (const _ of arr) {
    let isSorted = true

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const aux = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = aux
        isSorted = false
      }
    }

    if (isSorted) break
  }
}

function runBubblesort() {
  const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  bubblesort(arr)
  console.log("sorted", arr)
}
runBubblesort()