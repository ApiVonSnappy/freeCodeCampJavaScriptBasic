function checkCashRegister(price, cash, cid) {
  let result = {
    status: "",
    change: []
  }
  let change = cash - price;
    while (change > 0) {
      console.log(change)
      if (change >= 100) {
        change = change - 100;
      } else if (change >= 20 && change < 100) {
        change = change - 20
      } else if (change >= 10 && change < 20) {
        change = change - 10
      } else if (change >= 1 && change < 10) {
        change = change - 1
      } else if (change >= 0.25 && change < 1) {
        change = change - 0.25
      } else if (change >= 0.05 && change < 0.25) {
        change = change - 0.05
      } else if (change >= 0.01 && change < 0.05) {
        change = change - 0.1
      } 
      console.log(change)
    }

  return change;
}

console.log(checkCashRegister(19.5, 100.5, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
