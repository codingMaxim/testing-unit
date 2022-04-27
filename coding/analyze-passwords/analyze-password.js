function analyzePassword(password) {
  let obj = {
    length: password.length,
    hasNumbers: /\d/.test(password),
    hasCharacters: /[a-zA-Z]/.test(password),
  };
  return obj;
}
