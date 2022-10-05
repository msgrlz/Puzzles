/**
 * Задание 1
 * Создать массив «Список покупок». Каждый элемент массива
 * является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
 * 1. Вывод всего списка на экран таким образом, чтобы сначала
 * шли некупленные продукты, а потом – купленные.
 * 2. Добавление покупки в список. Учтите, что при добавлении
 * покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
 * а не добавлять новую.
 * 3. Покупка продукта. Функция принимает название продукта
 * и отмечает его как купленный.
 */

let products = [
  { name: 'bread', quantity: 1, isBought: 'yes' },
  { name: 'orange', quantity: 3, isBought: 'no' },
  { name: 'sausage', quantity: 8, isBought: 'yes' },
  { name: 'cake', quantity: 4, isBought: 'yes' },
  { name: 'butter', quantity: 2, isBought: 'no' }
];

/**
 * 1. Вывод всего списка на экран таким образом, чтобы сначала
 * шли некупленные продукты, а потом – купленные.
 */
function sortProductList(productList){

  return productList;
}

products = sortProductList(products);
console.log(products);


/**
 * 2. Добавление покупки в список. Учтите, что при добавлении
 * покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
 * а не добавлять новую.
 */
function addProduct(productList, product){

  return productList;
}

products = addProduct(products, 'potato');
console.log(products);

/**
 * 3. Покупка продукта. Функция принимает название продукта
 * и отмечает его как купленный.
 */

function bayProduct(productList, product){

  return productList;
}

products = addProduct(bayProduct(products, 'potato'));
console.log(products);
