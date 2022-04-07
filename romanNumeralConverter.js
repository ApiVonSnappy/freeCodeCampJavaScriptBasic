function convertToRoman(num) {
  let strNum = num.toString();
  let result = "";
  let len = strNum.length;
  switch(len) {
    case 1:
      switch(strNum[0]) {
        case "0":
          result = result + "";
          break;
        case "1":
          result = result + "I";
          break;
        case "2":
          result = result + "II";
          break;
        case "3":
          result = result + "III";
          break;
        case "4":
          result = result + "IV";
          break;
        case "5":
          result = result + "V";
          break;
        case "6":
          result = result + "VI";
          break;
        case "7":
          result = result + "VII";
          break;
        case "8":
          result = result + "VIII";
          break;
        case "9":
          result = result + "IX";
          break;
      }
      break;
    case 2:
      switch(strNum[0]) {
        case "1":
          result = result + "X";
          break;
        case "2":
          result = result + "XX";
          break;
        case "3":
          result = result + "XXX";
          break;
        case "4":
          result = result + "XL";
          break;
        case "5":
          result = result + "L";
          break;
        case "6":
          result = result + "LX";
          break;
        case "7":
          result = result + "LXX";
          break;
        case "8":
          result = result + "LXXX";
          break;
        case "9":
          result = result + "XC";
          break;
      }
      switch(strNum[1]) {
        case "0":
          result = result + "";
          break;
        case "1":
          result = result + "I";
          break;
        case "2":
          result = result + "II";
          break;
        case "3":
          result = result + "III";
          break;
        case "4":
          result = result + "IV";
          break;
        case "5":
          result = result + "V";
          break;
        case "6":
          result = result + "VI";
          break;
        case "7":
          result = result + "VII";
          break;
        case "8":
          result = result + "VIII";
          break;
        case "9":
          result = result + "IX";
          break;
      }
      break;
    case 3:
      switch(strNum[0]) {
        case "1":
          result = result + "C";
          break;
        case "2":
          result = result + "CC";
          break;
        case "3":
          result = result + "CCC";
          break;
        case "4":
          result = result + "CD";
          break;
        case "5":
          result = result + "D";
          break;
        case "6":
          result = result + "DC";
          break;
        case "7":
          result = result + "DCC";
          break;
        case "8":
          result = result + "DCCC";
          break;
        case "9":
          result = result + "CM";
          break;
      }
      switch(strNum[1]) {
        case "1":
          result = result + "X";
          break;
        case "2":
          result = result + "XX";
          break;
        case "3":
          result = result + "XXX";
          break;
        case "4":
          result = result + "XL";
          break;
        case "5":
          result = result + "L";
          break;
        case "6":
          result = result + "LX";
          break;
        case "7":
          result = result + "LXX";
          break;
        case "8":
          result = result + "LXXX";
          break;
        case "9":
          result = result + "XC";
          break;
      }
      switch(strNum[2]) {
        case "0":
          result = result + "";
          break;
        case "1":
          result = result + "I";
          break;
        case "2":
          result = result + "II";
          break;
        case "3":
          result = result + "III";
          break;
        case "4":
          result = result + "IV";
          break;
        case "5":
          result = result + "V";
          break;
        case "6":
          result = result + "VI";
          break;
        case "7":
          result = result + "VII";
          break;
        case "8":
          result = result + "VIII";
          break;
        case "9":
          result = result + "IX";
          break;
      }
      break;
    case 4:
      switch(strNum[0]) {
        case "0":
          result = result + "";
          break;
        case "1":
          result = result + "M";
          break;
        case "2":
          result = result + "MM";
          break;
        case "3":
          result = result + "MMM";
          break;
        case "4":
          result = result + "M^V";
          break;
        case "5":
          result = result + "^V";
          break;
        case "6":
          result = result + "^VM";
          break;
        case "7":
          result = result + "^VMM";
          break;
        case "8":
          result = result + "^VMMM";
          break;
        case "9":
          result = result + "M^X";
          break;
      }
      switch(strNum[1]) {
        case "1":
          result = result + "C";
          break;
        case "2":
          result = result + "CC";
          break;
        case "3":
          result = result + "CCC";
          break;
        case "4":
          result = result + "CD";
          break;
        case "5":
          result = result + "D";
          break;
        case "6":
          result = result + "DC";
          break;
        case "7":
          result = result + "DCC";
          break;
        case "8":
          result = result + "DCCC";
          break;
        case "9":
          result = result + "CM";
          break;
      }
      switch(strNum[2]) {
        case "1":
          result = result + "X";
          break;
        case "2":
          result = result + "XX";
          break;
        case "3":
          result = result + "XXX";
          break;
        case "4":
          result = result + "XL";
          break;
        case "5":
          result = result + "L";
          break;
        case "6":
          result = result + "LX";
          break;
        case "7":
          result = result + "LXX";
          break;
        case "8":
          result = result + "LXXX";
          break;
        case "9":
          result = result + "XC";
          break;
      }
      switch(strNum[3]) {
        case "0":
          result = result + "";
          break;
        case "1":
          result = result + "I";
          break;
        case "2":
          result = result + "II";
          break;
        case "3":
          result = result + "III";
          break;
        case "4":
          result = result + "IV";
          break;
        case "5":
          result = result + "V";
          break;
        case "6":
          result = result + "VI";
          break;
        case "7":
          result = result + "VII";
          break;
        case "8":
          result = result + "VIII";
          break;
        case "9":
          result = result + "IX";
          break;
      }
      break;
    default:
      return undefined;
    }
  return result;
}


console.log(convertToRoman(83));
