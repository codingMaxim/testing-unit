describe("randomLottoTicket", function () {
  it("should return an array", function () {
    const lottoTicket = randomLottoTicket();
    chai.expect(lottoTicket).to.be.a("Array");
  });

  it("should return an array containing 6 numbers", function () {
    const lottoTicket = randomLottoTicket();
    chai.expect(lottoTicket).to.be.a("Array");
    chai.expect(lottoTicket.length).to.equal(6);
  });

  it("should return an array containing 6 unique numbers", function () {
    const lottoTicket = randomLottoTicket();
    const numbers = new Set(lottoTicket);
    chai.expect(numbers.size).to.equal(lottoTicket.length);
  });

  it("should return only numbers between (inclusive) 1 and 49", function () {
    const lottoTicket = randomLottoTicket();
    const lowest = Math.min(...lottoTicket);
    const highest = Math.max(...lottoTicket);
    chai.expect(lowest).to.be.above(0);
    chai.expect(highest).to.be.below(50);
  });

  it("should return random numbers", function () {
    const lottoTicket = randomLottoTicket();
    const lottoTicket2 = randomLottoTicket();
    const lottoTicketStr = lottoTicket.sort((a, b) => a - b).join("");
    const lottoTicket2Str = lottoTicket2.sort((a, b) => a - b).join("");
    chai.expect(lottoTicketStr === lottoTicket2Str).to.equal(false);
  });
});
