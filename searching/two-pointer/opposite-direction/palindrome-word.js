// Check if the given word is a palindrome
function isPalindrome(word) {
  let leftIndex = 0
  let rightIndex = word.length - 1;

  while (leftIndex < rightIndex) {

    if (word[leftIndex] !== word[rightIndex]) {
      return false
    }

    leftIndex++;
    rightIndex--;
  }
  return true
}

const word = 'level'
console.log(`Word '${word}' is a palindrome: ${isPalindrome(word)}`)