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
  // Создаем стрелочную функцию sortVowels, принимающую как аргумент пустой массив arrWords.
  const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  // Внутри функции создаем массив vowels, состоящий из гласных букв русского алфавита.
  // Также создаем еще одну функцию preparedWords, в которой применим к пустому массиву arrWords метод map()
  // для формирования нового массива путем вызова переданной функции один раз для каждого элемента.
  // Аргумент word = item.
    // Возвращает элемент word в нижнем регистре.
  const preparedWords = arrWords.map((word) => {
    const resultItem = {
      word,
      lowerWord: word.toLowerCase()
    };

    return resultItem;
  });

  const otherWords = [];

  const vowelsWords = preparedWords.map((word) => {
    const firstLetter = word.lowerWord[0];
    if (vowels.includes(firstLetter)) {
      return word;
    }
    otherWords.push(word.word);
    return undefined;
  }).filter(item => Boolean(item)).sort((wordA, wordB) => (
      wordA.lowerWord[0] > wordB.lowerWord[0] ? 1 : -1
  )).map(({ word }) => word);

  return [
    ...vowelsWords,
    ...otherWords
  ];
}

const words = ['Коробка', 'Яблоко', 'яйца', 'Йод', 'апельсин', 'Работа', 'Театр', 'Ёжик', 'Урна', 'Облако', 'Собака', 'Енот'];

console.log(sortVowels(words)); // Выводим в консоль отсортированный массив words и любуемся результатом!