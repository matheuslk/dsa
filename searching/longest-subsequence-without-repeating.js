function findLongestSubsequenceWithoutRepeating(str) {
  let minimumIndex = 0;
  let maximumIndex = 0;

  const longestSubstringWithoutRepeating = new Set([str.charAt(0)]);

  let leftIndex = 0;
  let rightIndex = 1;

  while (rightIndex <= str.length - 1) {
    const char = str.charAt(rightIndex);

    if (longestSubstringWithoutRepeating.has(char)) {

      if (rightIndex === str.length - 1) {
        break
      }

      longestSubstringWithoutRepeating.delete(str.charAt(leftIndex))
      leftIndex++;
    } else {
      longestSubstringWithoutRepeating.add(char)

      if (maximumIndex - minimumIndex < rightIndex - leftIndex) {
        minimumIndex = leftIndex;
        maximumIndex = rightIndex
      }

      rightIndex++;
    }


    if (leftIndex === rightIndex) {
      rightIndex++;
    }
  }

  return str.slice(minimumIndex, maximumIndex + 1);

}

const value = findLongestSubsequenceWithoutRepeating('abba')
console.log(`Longest subsequence without repeating characters: ${value}`)