function palindrome(str) {
  str = str.replace(/\s|[^a-z0-9]/gi, '');
  // firstly, the str gets filtered out anything that's not a number or letter
  let arr = str.toLowerCase().split("")
  // then we turn all letters to lowercase, and split it into an array (this is not necessarry, but was easier to work with)
  let checkCount = 1;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr.length - i - 1;
    // loop over every index, to check if their counterpart index is the same value as them, if not, the count gets incremented by 1. this loop could be ended here, but I didn't
    if (arr[i] !== arr[temp]) {
      checkCount++;
    }
  }
  if (checkCount !== 1) {
    return false;
  } else {
    return true;
  }
  // check if checkCount is still 1, to determine it was a palindrome or not.
}

console.log(palindrome("eye"));                               // output: true
console.log(palindrome("_eye"));                              // output: true
console.log(palindrome("race car"));                          // output: false
console.log(palindrome("A man, a plan, a canal. Panama"));    // output: true
console.log(palindrome("never odd or even"));                 // output: true
console.log(palindrome("nope"));                              // output: false
console.log(palindrome("almostomla"));                        // output: false
console.log(palindrome("My age is 0, 0 si ega ym."));         // output: true
console.log(palindrome("1 eye for of 1 eye."));               // output: false
console.log(palindrome("Y0_0 (: /-\ :) 0-0y"));               // output: true
console.log(palindrome("five|\_/|four"));                     // output: false
