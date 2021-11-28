alert(`Задача №1: `);
const compareArrays = (a, b) => a.length === b.length && a.every((n, i) => n === b[i]);
console.log (compareArrays([8, 9], [6]));
alert(`Задача №2: `);
let arr = [];
function advancedFilter(arr) {
 let result = arr.filter((n) => n > 0).filter((n) => !(n % 3)).map((n) => n * 10);
 return result;
}
console.log (advancedFilter ([-1,6,-9,3]));
