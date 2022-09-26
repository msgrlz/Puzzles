let bread = {
  name: 'rye bread',
  quantity: 1,
  isBought: true
};

let orange = {
  name: 'moroccan orange',
  quantity: 3,
  isBought: false
};

let sausage = {
  name: 'meat sausage',
  quantity: 8,
  isBought: true
};

let cake = {
  name: 'carrot cake',
  quantity: 4,
  isBought: true
};

let butter = {
  name: 'butter',
  quantity: 2,
  isBought: false
};

const shoppingList = [ bread, orange, sausage, cake, butter ];


// 1. Вывод списка продуктов: сначала купленные, потом нет.

const outputList = () => {

  if (shoppingList[i].isBought == true) {
    shoppingList.unshift(i);
  } else {
    shoppingList.push(i);
  }
  console.log(outputList.length);
};
outputList();
// const outputList = shoppingList.filter(i => i.isBought == true);

// 2. Добавление покупки в список. При добавлении покупки с уже существующим в списке продуктом,
//  необходимо увеличивать количество в существующей покупке, а не добавлять новую.



// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

const buyProduct = () => {

}
