// const products = [
//   { name: 'bread', quantity: 1, isBought: 'yes' },
//   { name: 'orange', quantity: 3, isBought: 'no' },
//   { name: 'sausage', quantity: 8, isBought: 'yes' },
//   { name: 'cake', quantity: 4, isBought: 'yes' },
//   { name: 'butter', quantity: 2, isBought: 'no' }
// ];


// // 1 way
// const productsAvailable = [];

// for (const product of products) {
//   if (product.isBought == 'yes') {
//     productsAvailable.push(product)
//   }
// }
// console.log(productsAvailable);

// // 2 way

// const productsAvailable = products.filter(item => {
//   if (item.isBought === 'yes') {
//     return true;
//   }
// });
// console.log(productsAvailable);

// //1. сложить объекты в массив
// //foreach
// // 1. Вывод списка продуктов: сначала купленные, потом нет.


// // const outputList = shoppingList.filter(i => i.isBought == true);

// // 2. Добавление покупки в список. При добавлении покупки с уже существующим в списке продуктом,
// //  необходимо увеличивать количество в существующей покупке, а не добавлять новую.



// // 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

// const buyProduct = () => {

// }


// Сортировка слов по глпсным буквам.



const sortVowels = (arrWords = []) => {
  const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  const preparedWords = arrWords.map((word) => {
    return word.toLowerCase();
  });
  return preparedWords.sort((wordA, wordB) => {

    const firstLetterA = wordA[0];
    const firstLetterB = wordB[0];

    // const upperVowels = vowels.toUpperCase();// создаю новую переменную

      if (vowels.includes(firstLetterA)) {
        return 1;
      }

      if (vowels.includes(firstLetterB)) {
        return -1;
      }

        return -1;
  });

};

const words = ['Коробка', 'Яблоко', 'Йод', 'апельсин', 'Работа', 'Театр', 'Ёжик', 'Урна','Облако', 'Собака', 'Енот'];

console.log(sortVowels(words));

