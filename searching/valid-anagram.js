// INCORRECT SOLUTION

function isValidAnagram(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) {
    return false;
  }
  const wordLength = firstWord.length

  let firstWordAsciiSum = 0;
  let secondWordAsciiSum = 0;
  for (let i = 0; i < wordLength; i++) {
    firstWordAsciiSum += firstWord.charCodeAt(i);
    secondWordAsciiSum += secondWord.charCodeAt(i);
  }

  return firstWordAsciiSum === secondWordAsciiSum;
}

const firstWord = "anagram"
const secondWord = "nagaram"
console.log(`'${firstWord}' and '${secondWord}' are an anagram: ${isValidAnagram(firstWord, secondWord)}`);


