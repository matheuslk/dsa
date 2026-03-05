function linearSearch(values, searchValue) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

const values = [1, 7, 2, 0, 100, 92, 12];
const searchValue = 12

const elementPosition = linearSearch(values, searchValue)
console.log(`Element ${searchValue} found in position ${elementPosition}`)