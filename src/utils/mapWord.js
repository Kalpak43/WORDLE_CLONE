function mapWord(word) {
  const wordMap = {};

  for (let w of word) {
    if (wordMap[w]) {
      wordMap[w]++;
    } else {
      wordMap[w] = 1;
    }
  }

  return wordMap;
}


export { mapWord };