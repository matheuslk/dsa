// Find a pair of values in a sorted array that sums up to a target value
function getPairOfValues(values, target) {
  let leftIndex = 0
  let rightIndex = values.length - 1;

  while (leftIndex < rightIndex) {
    const leftValue = values[leftIndex]
    const rightValue = values[rightIndex]
    const sum = leftValue + rightValue

    if (sum === target) {
      return [leftValue, rightValue]
    }

    if (sum > target) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }

  return []
}

const values = [1, 2, 3, 4, 6, 8, 9]
const searchValue = 7;

const pairOfValues = getPairOfValues(values, searchValue)
console.log(`Pair of values that sums up to ${searchValue}: ${pairOfValues}`)
