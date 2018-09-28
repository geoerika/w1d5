var listNum = [];

function addNumToList(num) {
  listNum.push(num);
};

function sortListNum(list){
  listNum.sort(function(a, b) {
  return a - b;
  });
}

function getSortedList() {
  sortListNum(listNum);
  return listNum;
}


module.exports = {
  addNumToList: addNumToList,
  getSortedList: getSortedList
}


// addNumToList(4);
// addNumToList(1);
// console.log(list);

