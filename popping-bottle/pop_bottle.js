
const purchasePop = (amount) => {
  return Math.floor(amount / 2);
}

const capPop = (amount) => {
  return Math.floor(amount / 4);
}

const ultPop = (amount, emptyBottles, caps) => {
  if ((amount + emptyBottles < 2) && (amount + caps < 4 )) {
    return 0;
  }

  let popBottles = purchasePop(amount + emptyBottles) + capPop(amount + caps);
  emptyBottles = (amount + emptyBottles) % 2;
  caps = (amount + caps) % 4;
  amount = popBottles;
  popBottles = popBottles + ultPop(amount, emptyBottles, caps );

  return popBottles;
}

const totalPop = (amount) => {

  let total = purchasePop(amount);
  let intPop = ultPop(total, 0, 0);
  return total + intPop;
}

console.log(totalPop(0));
console.log(totalPop(1));
console.log(totalPop(2));
console.log(totalPop(4));
console.log(totalPop(6));
console.log(totalPop(10));
console.log(totalPop(20));