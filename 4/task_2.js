const shop = {
    brand: ['Стул', 'Стол', 'Шкаф',],
    price: [2, 2, 2,],
    quantity: [2, 2, 2,],



    countBasketPrice() {
        let sum = 0
        for(let i = 0; i < shop.price.length; i ++) {
           sum += shop.price[i] * shop.quantity[i];
       }
       return sum
    },


}

alert('Сумма корзины составляет:  ' + shop.countBasketPrice());