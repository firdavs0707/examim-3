let arrayWords = [];

let arrayWordsResult = [];

function wordsDouble(word) {
  arrayWords = word.split('');

  for (let i = 0; i < arrayWords.length; i++) {
    arrayWordsResult.push(arrayWords[i], arrayWords[i]);
  }

  let resultWord = arrayWordsResult.join('');
}

wordsDouble('salom');

console.log(resultWord);