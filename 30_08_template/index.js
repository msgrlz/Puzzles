const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const father = document.getElementById('father');
const textarea = document.getElementById('myTextarea');
const addArticleButton = document.getElementById('addArticleButton');

const initSearch = () => {
    let inputValue = '';

    const clickHandler = () => {
        const children = Array.from(father.childNodes);
        const callback = (el) => {
            if (el.style && el.innerHTML && el.innerHTML.includes(inputValue)) {
                el.style.display = 'block';
            } else if (el.style) {
                el.style.display = 'none';
            }
        }
        children.forEach(callback);
    }
    const inputHandler = (e) => {
        inputValue = e.target.value;
    }
    searchButton.addEventListener('click', clickHandler);
    searchInput.addEventListener('input', inputHandler);
}

initSearch();
// ---


let inputArticleText = ''
const inputArticle = (e) => {
    inputArticleText = e.target.value;
}

const addArticle = () => {
    const article = document.createElement('article');
    const articleTitle = document.createElement('span');
    const trashcan = document.createElement('button');
    const editButton = document.createElement('button');
    const editField = document.createElement('textarea');
    const saveButton = document.createElement('button');
    const editBlock = document.createElement('div');

    saveButton.innerText = 'Save changes in article';
    editField.value = 'TEST';
    articleTitle.innerText = inputArticleText;
    trashcan.innerText = '🗑️';
    editButton.innerText = '✍️';

    const deleteFucntion = () => {
        trashcan.parentNode.remove()
    }
    const hideEditor = () => {
        editField.style.display = 'none';
        saveButton.style.display = 'none';
    }
    hideEditor();

    const openEditor = () => {
        editField.style.display = 'inline-block';
        saveButton.style.display = 'inline-block';
        editField.value = articleTitle.innerText;
    }

    // Задача - добавить редактирование статьи
    // Кнопка с ✍️ должна показывать textarea
    // и кнопку Save changes. В textarea должен быть текст
    // нашей статьи которую мы редактируем.
    // При нажатии на кнопку save текст статьи должен меняться
    // А также editBlock должен скрываться.

    const saveArticle = () => {
        articleTitle.innerText = editField.value;
        hideEditor();
    }

    const searchArticle = (text) => {
      searchInput.addEventListener('click', searchButton);
      if (articleTitle.innerText == text) {

      }
    };
    searchArticle();


    editButton.addEventListener("click", openEditor);
    saveButton.addEventListener("click", saveArticle);

    trashcan.addEventListener('click', deleteFucntion);
    father.appendChild(article);
    article.appendChild(articleTitle);
    article.appendChild(trashcan);
    article.appendChild(editButton);
    article.appendChild(editBlock);
    editBlock.appendChild(editField);
    editBlock.appendChild(saveButton);
}
// CRUD - create read update delete
console.log(textarea);
textarea.addEventListener('input', inputArticle);

addArticleButton.addEventListener('click', addArticle);
