describe("analyizePassword", function () {
  it("should return detailed info about password", function () {
    const result = analyzePassword("a");
    chai.expect(result.length).to.equal(1);
    chai.expect(result.hasNumbers).to.equal(false);
    chai.expect(result.hasCharacters).to.equal(true);
  });

  it("should return detailed info about password", function () {
    const result = analyzePassword("a1");
    chai.expect(result.length).to.equal(2);
    chai.expect(result.hasNumbers).to.equal(true);
    chai.expect(result.hasCharacters).to.equal(true);
  });

  it("should return detailed info about password", function () {
    const result = analyzePassword("555");
    chai.expect(result.length).to.equal(3);
    chai.expect(result.hasNumbers).to.equal(true);
    chai.expect(result.hasCharacters).to.equal(false);
  });
});
