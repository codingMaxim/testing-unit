describe("doubleCharacters", function () {
  it("should double all characters", function () {
    const result = doubleCharacters("a");
    chai.expect(result).to.equal("aa");
  });

  it("should double all characters case-sensitive", function () {
    const result = doubleCharacters("Ab");
    chai.expect(result).to.equal("AAbb");
  });

  it("should double spaces as well", function () {
    const result = doubleCharacters("Ab");
    chai.expect(result).to.equal("AAbb");
  });
});
