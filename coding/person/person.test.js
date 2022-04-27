describe("Person Class", function () {
  it("should have a name property", function () {
    const person = new Person();
    chai.expect(person).to.have.property("name");
  });

  it("should pass the name in the constructor", function () {
    const person = new Person("Hans");
    chai.expect(person).to.have.property("name");
    chai.expect(person.name).to.equal("Hans");
  });

  it("should have a introduce() method that returns a introduction", function () {
    const person = new Person("Hans");
    chai.expect(person).to.have.property("introduce");
    chai.expect(person.introduce()).to.equal("My name is Hans");
  });

  it("should have a hobbies property", function () {
    const person = new Person();
    chai.expect(person).to.have.property("hobbies");
  });

  it("should have a hobbies property initialized as empty array", function () {
    const person = new Person();
    chai.expect(person.hobbies).to.be.a("Array");
    chai.expect(person.hobbies.length).to.equal(0);
  });

  it("should have an addHobby method", function () {
    const person = new Person("Hans");
    chai.expect(person).to.have.property("addHobby");
  });

  it("should have an addHobby method that adds a hobby to the hobbies array", function () {
    const person = new Person("Hans");
    const oldLength = person.hobbies.length;
    person.addHobby("Tennis");
    chai.expect(person.hobbies.length).to.equal(oldLength + 1);
    chai.expect(person.hobbies[oldLength]).to.equal("Tennis");
  });
});
