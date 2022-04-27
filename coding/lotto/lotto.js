function randomLottoTicket() {
  let arr = [];
  let min = Math.ceil(1);
  let max = Math.floor(49);
  while (arr.length < 6) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (arr.indexOf(randomNumber) === -1) {
      arr.push(randomNumber);
    }
  }
  return arr;
}
