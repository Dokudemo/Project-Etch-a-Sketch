const input = document.querySelector('input');
const generateBtn = document.querySelector('button');
const gameBoard = document.querySelector('.gameBoard');
const formContainer = document.querySelector('.formContainer');

formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const userInput = Number(input.value.trim());
    input.value = '';

    const sizePercent = 100 / userInput;
    const sizePx = 500 / userInput;

    for (let i = 0; i < userInput * userInput; i++) {
        const block = document.createElement('div');
        block.classList.add('gameBlock');

        block.style.flex = `0 0 ${sizePercent}%`;
        block.style.height = `${sizePx}px`;
        
        gameBoard.appendChild(block);
    }
});
