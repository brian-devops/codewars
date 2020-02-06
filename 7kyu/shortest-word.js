function findShort(str) {
  var words = str.split(" ");
  var shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length
      ? currentWord
      : shortestWord;
  }, words[0]);
  return shortest.length;
}
