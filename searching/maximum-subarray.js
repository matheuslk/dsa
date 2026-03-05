function getMaximumSubarray(values) {
  let currentSubarray = [values[0]];
  let maximumSubarray = [values[0]];
  let sumOfCurrentSubarray = values[0]

  values.forEach((value, index) => {
    if (index === 0) {
      return;
    }

    if (value > sumOfCurrentSubarray) {
      currentSubarray = [value]
    } else {
      currentSubarray.push(value)
    }
    sumOfCurrentSubarray = currentSubarray.reduce((sum, item) => sum + item)
    const sumOfMaximumSubarray = maximumSubarray.reduce((sum, item) => sum + item);

    if (sumOfMaximumSubarray < sumOfCurrentSubarray) {
      maximumSubarray = [...currentSubarray]
    }
  });

  return maximumSubarray;
}

const values = [5, 4, -1, 7, 8]
console.log(`Maximum sum subarray: ${getMaximumSubarray(values)}`)

// current subarray: [4, -1, 2, 1, -5, 4] -> 5
// maximum subarray: [4, -1, 2, 1] -> 6
// current value: 4