function doubleCharacters(word) {
  let resultWord = "";
  for (let i = 0; i < word.length; i++) {
    resultWord += word.charAt(i) + word.charAt(i);
  }
  return resultWord;
}
