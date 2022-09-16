const input = document.getElementById('input');
const button = document.getElementById('myButton');
const father = document.getElementById('father');
const textarea = document.getElementById('myTextarea');
const addArticleButton = document.getElementById('addArticleButton');
let inputValue = '';

const clickHandler = () => {
    const children = Array.from(father.childNodes);
    const callback = (el) => {
        if(el.style && el.innerHTML && el.innerHTML.includes(inputValue)){
            el.style.display='block';
        } else if (el.style) {
            el.style.display='none';
        }
    }
    children.forEach(callback);

}
const inputHandler = (e) => {
    inputValue = e.target.value;
}
button.addEventListener('click',clickHandler);

input.addEventListener('input',inputHandler);
let inputArticleText = ''
const inputArticle = (e) => {
    inputArticleText = e.target.value;
}

const addArticle = () => {
    let article = document.createElement('article');
    let trashcan = document.createElement('button');
    let editButton = document.createElement('button');
    let editField = document.createElement('textarea');
    let saveButton = document.createElement('button');
    let editBlock = document.createElement('div');
    saveButton.innerText = 'Save changes in article';
    editField.value = 'TEST';
    article.innerText = inputArticleText;
    trashcan.innerText = '🗑️';
    editButton.innerText = '✍️';
    const deleteFucntion = () => {
        trashcan.parentNode.remove()
    }
    // Задача - добавить редактирование статьи
    // Кнопка с ✍️ должна показывать textarea
    // и кнопку Save changes. В textarea должен быть текст
    // нашей статьи которую мы редактируем.
    // При нажатии на кнопку save текст статьи должен меняться
    // А также editBlock должен скрываться.

    trashcan.addEventListener('click',deleteFucntion);
    father.appendChild(article);
    article.appendChild(trashcan);
    article.appendChild(editButton);
    article.appendChild(editBlock);
    editBlock.appendChild(editField);
    editBlock.appendChild(saveButton);
}
// CRUD - create read update delete
console.log(textarea);
textarea.addEventListener('input',inputArticle);

addArticleButton.addEventListener('click',addArticle);
