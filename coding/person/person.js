class Person {
  constructor(name) {
    this.name = name;
    this.hobbies = [];
  }

  introduce() {
    return "My name is " + this.name;
  }

  addHobby(newHobby) {
    return this.hobbies.push(newHobby);
  }
}
