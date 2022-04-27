function speedDatingList(persons) {
  let result = [];
  for (let i = 0; i < persons.length; i++) {
    for (let j = 0; j < persons.length; j++) {
      if (i < j) {
        result.push([persons[i], persons[j]]);
      }
    }
  }
  return result;
}
