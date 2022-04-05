// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве.
// Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let arr = {};
let product = '';
let price = 0;
let sum = 0;

while (true) {
  product = prompt("prod");
  price = 0;
  if (product) {
    while (price === 0) {
      price = Number(prompt("price"));
      if (isNaN(price)) {
        price = 0;
      }
    }
    arr[product] = price
  }
  else {
    break
  }
}


function countBasketPrice() {
  for (const key in arr) {
    sum += arr[key]
  }
  return sum;

}

alert('Сумма корзины составляет:  ' + countBasketPrice());