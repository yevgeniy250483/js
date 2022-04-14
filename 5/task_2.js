// 3.1. Создать массив товаров (сущность Product);
// 3.2. При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML-код должен содержать только div id=”catalog” без вложенного кода.
// Весь вид каталога генерируется JS.

const shop = {
    products: [
        {
            id_product: 123,
            product_name: "Ноутбук",
            price: 45600,
            quantity: 1
        },
        {
            id_product: 456,
            product_name: "Мышка",
            price: 1000,
            quantity: 1
        }
    ],
    countBasketPrice() {
        return this.products.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    },

    outputToHTML() {
        const cont = document.getElementById("catalog")
        for (let i = 0; i < this.products.length; i ++) {
            let newH1 = document.createElement('h1')
            newH1.innerHTML = this.products[i].product_name;
            cont.appendChild(newH1)
            let newP = document.createElement('p')
            newP.innerHTML = this.products[i].price;
            cont.appendChild(newP)
        }
        let sumN = document.createElement('h2')
        sumN.innerHTML = "Сумма товаров составляет: ";
        cont.appendChild(sumN)
        let sum = document.createElement('h2')
        sum.innerHTML = this.countBasketPrice();
        cont.appendChild(sum)


    }
};

shop.outputToHTML()