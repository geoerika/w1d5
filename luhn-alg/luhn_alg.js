const check = (num) => {
  if (num === 0) {
    return false;
  } else {
    num = numToArray(num);
    for (let i = num.length - 2; i >= 0; i =  i - 2) {
      num[i] = num[i] * 2;
      if (num[i] > 9) {
        let numArray = numToArray(num[i]);
        num[i] = numArray[0] + numArray[1];
      }
    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return num.reduce(reducer) % 10 === 0;
  }
}

const numToArray = (num) => {
  let numLuhn = num.toString().split('');
  return numLuhn.map(n => Number(n));
}

console.log(check(79927398710));
console.log(check(79927398713));
console.log(check(0));


