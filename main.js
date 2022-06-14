// tutaj rozwiązanie
const btn = document.querySelector('button');
let number = 10;
const changeLiFontSizeAndDisplay = () => {
    const li = [...document.querySelectorAll('li')];
    // for (let i = 0; i < li.length; i++) {
    //     li[i].style.display = 'block';
    //     li[i].style.fontSize = number + 'px';
    // }
    li.forEach(item => {
        item.style.display = 'block';
        item.style.fontSize = number + 'px';
    })
    number++;
}

btn.addEventListener('click', changeLiFontSizeAndDisplay);