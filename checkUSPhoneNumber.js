function telephoneCheck(str) {
  let regex = /^\+?1?\s?\(?\d{3}\)?[-\.\s]?\d{3}[-\.\s]?\d{4}$/;
  let stack = [];
  for (let i in str) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    return regex.test(str);
  } else {
    return false;
  }
}

console.log(telephoneCheck("(555)-555-5555"));
