function binarySearch(values, searchValue) {
  let lowIndex = 0;
  let highIndex = values.length - 1;
  while (lowIndex <= highIndex) {
    let midIndex = Math.trunc((lowIndex + highIndex) / 2)
    const midValue = values[midIndex]
    if (midValue === searchValue) {
      return midIndex
    } else if (midValue > searchValue) {
      highIndex = midIndex - 1
    } else {
      lowIndex = midIndex + 1
    }
  }
  return -1;
}

const values = [1, 2, 5, 11, 36, 92, 99, 101];
const searchValue = 36

const elementPosition = binarySearch(values, searchValue)
console.log(`Element ${searchValue} found in position ${elementPosition}`)