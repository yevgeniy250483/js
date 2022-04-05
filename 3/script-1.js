// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


let i = 2;
let natural_n = [];

while (i <= 100) {
  let flag = 1;
  if (i > 2 && i % 2 !== 0) {
    let j = 3;
    while (j * j <= i) {
      if (i % j === 0) {
        flag = 0;
        break;
      }
      j = j + 2;
    }
  }
  else if (i !== 2) flag = 0;
  if (flag === 1) {
    natural_n.push(i);
  }
  i ++ ;
}

console.log(natural_n)
