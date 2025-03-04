export function fibonacci(n: number): Array<number> {
  if (n === null || n === undefined) return []
  if (n <= 0) return []
  if (n === 1) return [1]

  const numbers = new Array(n)
  numbers[0] = 1
  numbers[1] = 1

  for (let i = 2; i < n; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2]
  }

  return numbers
}

(function main() {
  const sequence = fibonacci(10)
  console.log("fibonacci (10)", sequence)
})()