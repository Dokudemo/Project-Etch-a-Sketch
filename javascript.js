const input = document.querySelector('input');
const generateBtn = document.querySelector('button');
const gameBoard = document.querySelector('.gameBoard');
const formContainer = document.querySelector('.formContainer');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    gameBoard.replaceChildren();

    const userInput = Number(input.value.trim());
    input.value = '';
    if(userInput > 100) {
        input.value = 'Enter number < 100'
        setTimeout(() => input.value = '', 900);
        return;
    }

    const sizePercent = 100 / userInput;
    const sizePx = 600 / userInput;

    for (let i = 0; i < userInput * userInput; i++) {
        const block = document.createElement('div');
        block.classList.add('gameBlock');

        block.style.flex = `0 0 ${sizePercent}%`;
        block.style.height = `${sizePx}px`;
        block.dataset.opacity = '0.1';
        
        gameBoard.appendChild(block);
    }
});


gameBoard.addEventListener('mouseover', (e) => {
     if (!e.target.classList.contains('gameBlock')) return;

    const block = e.target;

    let opacity = Number(block.dataset.opacity); // читаем у этого блока
    opacity += 0.1;

    if (opacity >= 1) {
        opacity = 1;
        block.style.backgroundColor = 'black';
    } else {
        block.style.backgroundColor = getRandomColor();
    }

    block.style.opacity = opacity;
    block.dataset.opacity = opacity; 
});
