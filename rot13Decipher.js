function rot13(str) {
  let regexp = /\w/i; //regexp to check if letter
  let obj = {
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z",
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M",
  };
  for (let i = 0; i < str.length; i++) {
    //Check if it's a letter, then if it is, make a copy of the start until i -1, plus it with the deciphered letter, and then put the rest of the str onto the str
    if (regexp.test(str[i])) {
      str = str.slice(0, i) + obj[str[i]] + str.slice(i+1)
    }
  };
  return str;
}
