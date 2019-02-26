// Poppin' Bottles

// You've just been hired at Lighthouse Markets, a reputable (and thoroughly fictional) grocery store chain. One of the primary features of Lighthouse Markets is their recycling program on pop bottles. Here is how the program works:

//     For every two empty bottles, you can get one free (full) bottle of pop
//     For every four bottle caps, you can get one free (full) bottle of pop
//     Each bottle of pop costs $2 to purchase

// Given these parameters, write a program so that you can figure out how many total bottles of pop can be redeemed given a customer investment.

const amount = parseInt(process.argv[2]);

const purchasePop = (amount) => { //returns nr of pop bottles bought with an amount of money or empty bottles
  return Math.floor(amount / 2);
}

const capPop = (amount) => { //returns nr of pop bottles bought with empty caps
  return Math.floor(amount / 4);
}

let result = {};
result.total = 0;
result.recycled = 0;
result.caps = 0;
result.remainingBottles = 0;
result.remainingCaps = 0;

const ultPop = (amount, emptyBottles, caps) => {

  if ((amount + emptyBottles < 2) && (amount + caps < 4 )) {
    result.remainingBottles = amount + emptyBottles;
    result.remainingCaps = amount + caps;
    return result;
  }

  let int = purchasePop(amount + emptyBottles) + capPop(amount + caps);
  result.total = result.total + int;
  result.recycled = result.recycled + purchasePop(amount + emptyBottles);
  result.caps = result.caps + capPop(amount + caps);
  emptyBottles = (amount + emptyBottles) % 2;
  caps = (amount + caps) % 4;
  amount = int;
  ultPop(amount, emptyBottles, caps);
  return result;
}


const totalPop = (amount) => {

  let total = purchasePop(amount);
  result = ultPop(total, 0, 0);
  result.total = total + result.total;
  return result;
}

totalPop(amount);

console.log('TOTAL BOTTLES: ', result.total,'\n',
            'REMAINING BOTTLES: ', result.remainingBottles,'\n',
            'REMAINING CAPS: ', result.remainingCaps,'\n',
            'TOTAL EARNED: ' + '\n',
            '  BOTTLES: ' + result.recycled + '\n',
            '  CAPS: ', result.caps);