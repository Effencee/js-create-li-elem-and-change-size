const btn = document.querySelector('button');
let number = 10;
const changeLiFontSizeAndDisplay = () => {
    const li = [...document.querySelectorAll('li')];
    li.forEach(item => {
        item.style.display = 'block';
        item.style.fontSize = number + 'px';
    })
    number++;
}

btn.addEventListener('click', changeLiFontSizeAndDisplay);
