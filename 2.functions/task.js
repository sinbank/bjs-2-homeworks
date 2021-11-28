function getArrayParams(arr){
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg = 0;
  for (let i = 0 ; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else {
      min = arr[i];
    }
    sum = sum + arr [i];
    avg = (sum / arr.length).toFixed(2);
  }
 console.log(`мин: ${min}, макс: ${max}, avg: ${avg}`);
 return
};
getArrayParams([1, 2, 3, -100, 10]);

// Задание 2

function worker(arr) {
  let summ = 0;
   for (j = 0; j < arr.length; j++){
     summ += arr[j];
   }
   return summ;
};
 let summ1 = [];
function makeWork(arrOfArr, func) {
  for (i = 0; i < arrOfArr.length; i++){
  summ1 [i] = func(arrOfArr [i]);
//return summ1;
  }
  let min = summ1[0];
  max = min;
  for (i = 1; i < summ1.length; ++i) {
      if (summ1[i] > max) max = summ1[i];
      if (summ1[i] < min) min = summ1[i];
  }
  console.log(`Максимум:  ${max}`);
};
makeWork ([[8, 2, 3], [2, 2, 1]], worker);

// Задание 3
let difference = 0;
function worker2(arr) {
   difference = Math.abs(Math.max(...arr) - Math.min(...arr));
  return difference;
};
//console.log(worker2([-10, -20, -40]));
function makeWork2(arrOfArr, func) {
  for (i = 0; i < arrOfArr.length; i++){
  result = func(arrOfArr [i]);
  }
  return result;
}
let arrOfArr = [[0, 0, 0], [-1, -99]];
makeWork2(arrOfArr, worker2);
