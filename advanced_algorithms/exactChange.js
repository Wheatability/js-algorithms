  const denominations = [
    { name: 'ONE HUNDRED', val: 100.00 },
    { name: 'TWENTY', val: 20.00 },
    { name: 'TEN', val: 10.00 },
    { name: 'FIVE', val: 5.00 },
    { name: 'ONE', val: 1.00 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.10 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 }
  ];

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  // Turn given CID array into a register objectwith a total value
  let registerChange = cid.reduce((acc, cur) => {
    acc.total += cur[1];
    acc[cur[0]] = cur[1];
  }, {total: 0});

  // handle some insufficient funds cases
  if (registerChange.total < change) {
    return 'Insufficient Funds';
  } else if (registerChange.total === change) {
    return 'Closed';
  } 

  // loop through denominations and see if we have enough change of each denominations and calculate change
  let changeDue = denominations.reduce((acc, cur) => {

  }, []);

  return changeDue;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, 
  [["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.10], 
  ["QUARTER", 4.25], 
  ["ONE", 90.00], 
  ["FIVE", 55.00], 
  ["TEN", 20.00], 
  ["TWENTY", 60.00], 
  ["ONE HUNDRED", 100.00]]);