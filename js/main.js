let form = document.querySelector('#form');
let input = document.querySelector('#iadv');
let tentEl = document.querySelector('.tentativa_container');
let congrats = document.querySelector('.congrats_popup');
let startBtn = document.querySelector('.again_bnt');
let tentativas = 0;

const createCorrect = () => {
    let correctNum = Math.floor(Math.random() * 100);
    return correctNum;
}
let correct = createCorrect();

const criaDiv = (el) => {
    let newDiv = document.createElement('div');

    newDiv.classList.add('tentativa');
    newDiv.innerText = `${el.value}`;
    tentEl.append(newDiv);
    return newDiv;
}

const divSeMaior = () => {
    let div = criaDiv(input);
    div.style.backgroundColor = `#A64138`;
}
const divSeMenor = () => {
    let div = criaDiv(input);
    div.style.backgroundColor = `#2F6073`;
}

function restart() { // Começa o jogo novamente
    congrats.style.visibility = 'hidden';
    input.disabled = false;
    input.value = '';
    input.focus();
    tentativa = 0;
    correct = createCorrect();
    console.log('New correct number: ', correct);
    tentEl.innerHTML = '';
}
startBtn.addEventListener('click', restart);

function tentativa(e) {
    if (e) e.preventDefault();
    tentativas++;

    let userInput = parseInt(input.value);

    if (isNaN(userInput) || userInput > 100) {
        input.value = '';
        input.focus();
        return;
    }

    if (userInput === correct) {
        let correctText = document.querySelector('.numero');
        let attempts = document.querySelector('.tentativas');
        congrats.style.visibility = 'visible';
        correctText.innerText = correct;
        attempts.innerText = tentativas;

        input.value = '';
        input.disabled = true;
    }
    else if (userInput < correct) divSeMenor()
    else if (userInput > correct) divSeMaior();
    

    input.value = '';
    input.focus();
    console.log(`Correct: ${correct}, User input: ${userInput}`);
} 

const checaEnter = (e) => {
    if (e.key === 'Enter') tentativa();
}

input.addEventListener('keyup', checaEnter);
form.addEventListener('submit', tentativa);