/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const givenAlphabetList = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  const alphabetMap = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((result, code, index) => {
    result[code] = givenAlphabetList[index]
    return result;
  }, {});
  const morseWords = words.map(word => 
    word.split('').reduce((morseWord, letter) => {
      morseWord += alphabetMap[letter]
      return morseWord;
    }, ''));

  const diffMorseWordMap = {};

  for (let i = 0; i < morseWords.length; i++) {
    const morseWord = morseWords[i];
    if (diffMorseWordMap[morseWord]) {
      diffMorseWordMap[morseWord]++;
    } else {
      diffMorseWordMap[morseWord] = 0;
    }
  }

  return Object.keys(diffMorseWordMap).length;
};

// test
// const ans = uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']);