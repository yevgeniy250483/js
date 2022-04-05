// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log
// и вернуть пустой объект.

const transform = {
    output: {
        unit: 0,
        dozens: 0,
        hundreds: 0,
    },

    inputData() {
        const num = parseInt(prompt('Введите число от 0 до 999'));
        if (0 < num < 1000) {
            console.log(num)
            return num;
        } else if (isNaN(num)) {
            return false
        }
        else {
            return false
        }

    },
    assignData () {
        const num = transform.inputData()
        if (num) {
            transform.output.unit = num % 10;
            transform.output.dozens = parseInt(num/10) % 10;
            transform.output.hundreds = parseInt(num/100);
        }
        else {
            alert('Число введено неправильно')
            console.log(transform.output)
        }
    },

}

transform.assignData()
console.log(transform.output)