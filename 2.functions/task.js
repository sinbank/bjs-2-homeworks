function getArrayParams(arr){
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg = 0;
  for (let i = 0 ; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } if (min > arr[i] ) {
      min = arr[i];
    }
    sum += arr [i];
  }
  avg = +(sum / arr.length).toFixed(2);
  console.log(`мин: ${min}, макс: ${max}, avg: ${avg}`);
  return { min: min, max: max, avg: avg };
};
getArrayParams([1, -2, 3, 10, 10]);

// Задание 2

function worker(arr) {
  let summ = 0;
   for (let j = 0; j < arr.length; j++){
     summ += arr[j];
   }
   return summ;
};
function makeWork(arrOfArr, func) {
 let summ1 = 0;
 let max = 0;
  for (let i = 0; i < arrOfArr.length; i++){
  summ1 = func(arrOfArr [i]);
  if (summ1 > max) max = summ1;
  }
  return max;
};
//makeWork ([[8, 2, 3], [2, 2, 1]], worker);

// Задание 3

function worker2(arr) {
   let difference = 0;
   difference = Math.abs(Math.max(...arr) - Math.min(...arr));
  return difference;
};

let arrOfArr = [[0, 0, 0], [-1, -99]];
makeWork(arrOfArr, worker2);
