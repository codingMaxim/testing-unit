// TODO: add tests
// hint: analyze the existing tests for the coding katas
// the docs for chai bdd can be found here: https://www.chaijs.com/api/bdd/

describe("speedDatingList", function () {
  it("should return an array", function () {
    const speedDating = speedDatingList("[]");
    chai.expect(speedDating).to.be.a("Array");
  });

  it("should return the array in an array", function () {
    const speedDating = speedDatingList(["Peter", "Paul"]);
    chai.expect(speedDating).to.deep.equal([["Peter", "Paul"]]);
  });

  it("should return an array", function () {
    const speedDating = speedDatingList(["Peter", "Paul", "Mary"]);
    chai.expect(speedDating).to.deep.equal([
      ["Peter", "Paul"],
      ["Peter", "Mary"],
      ["Paul", "Mary"],
    ]);
  });
});
