/**
 * Задание 1
 * Создать массив «Список покупок». Каждый элемент массива
 * является объектом, который содержит название продукта, необходимое количество и куплен или нет.
 * Написать несколько функций для работы с таким массивом.
 * 1. Вывод всего списка на экран таким образом, чтобы сначала
 * шли некупленные продукты, а потом – купленные.
 * 2. Добавление покупки в список. Учтите, что при добавлении
 * покупки с уже существующим в списке продуктом, необходимо увеличивать
 * количество в существующей покупке, а не добавлять новую.
 * 3. Покупка продукта. Функция принимает название продукта
 * и отмечает его как купленный.
 */

let products = [
  { name: 'bread', quantity: 1, isBought: true },
  { name: 'orange', quantity: 3, isBought: false },
  { name: 'sausage', quantity: 8, isBought: true },
  { name: 'cake', quantity: 4, isBought: true },
  { name: 'butter', quantity: 2, isBought: false },
];

function showProducts(productsList = []) {
  productsList.forEach(function(item) {
    console.log('Продукт:', item.name,  'количество:', item.quantity, 'куплен:', (item.isBought) ? 'да' : 'нет');
  });
}

function sortProducts(productsList = []) {
  return productsList.filter(item => (item.isBought === true));
}
showProducts(sortProducts(products));



// function sortProducts(productsList = []) {
//   return productsList;
//
// }
// showProducts(sortProducts(products));

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];
//
// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.id < 3);
//
// console.log(someUsers); // 2

// let someProduct = products.filter(isProductBought);
// console.log(someProduct);

// const boughtProducts = products.filter(item => {
//   if (products.isBought === 'yes') {
//     return true;
//   }
// });
// console.log(boughtProducts);

/**
 * 1. Вывод всего списка на экран таким образом, чтобы сначала
 * шли некупленные продукты, а потом – купленные.
 */


// const sortProductList = (productList = []) => {
//
//   if (products.includes(isBought === 'yes')) {
//     productList.push();
//   }
//
//
//   return productList;
// }
//
// products = sortProductList(products);
// console.log(products);


/**
 * 2. Добавление покупки в список. Учтите, что при добавлении
 * покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
 * а не добавлять новую.
 */
// function addProduct(productList, product){
//
//   return productList;
// }
//
// products = addProduct(products, 'potato');
// console.log(products);
//
// /**
//  * 3. Покупка продукта. Функция принимает название продукта
//  * и отмечает его как купленный.
//  */
//
// function buyProduct(productList, product){
//
//   return productList;
// }
//
// products = addProduct(buyProduct(products, 'potato'));
// console.log(products);

