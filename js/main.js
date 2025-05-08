let form = document.querySelector('#form');
let input = document.querySelector('#iadv');
let tentEl = document.querySelector('.tentativa_container');
let congrats = document.querySelector('.congrats_popup');
let startBtn = document.querySelector('.again_bnt');
let tentativas = 0;


const createCorrect = () => { // cria o número correto
    let correctNum = Math.floor(Math.random() * 100);
    return correctNum;
}
let correct = createCorrect();

const criaDiv = (el) => { // cria a div de representação dos números na tela
    let newDiv = document.createElement('div');

    newDiv.classList.add('tentativa');
    if (el.value > correct) newDiv.innerHTML = `<i id="arrow_icon" class="fa-solid fa-arrow-down"></i> ${el.value}`;
    if (el.value < correct) newDiv.innerHTML = `<i id="arrow_icon" class="fa-solid fa-arrow-up"></i> ${el.value}`;
    
    tentEl.prepend(newDiv);
    return newDiv;
}

const divSeMaior = () => { // altera o background da div
    let div = criaDiv(input);
    div.style.backgroundColor = `#A64138`;
}
const divSeMenor = () => { // altera o background da div
    let div = criaDiv(input);
    div.style.backgroundColor = `#2F6073`;
}

function restart() { // começa o jogo novamente
    congrats.style.visibility = 'hidden';
    input.disabled = false;
    input.value = '';
    input.focus();
    tentativas = 0;
    correct = createCorrect();
    console.log('New correct number: ', correct);
    tentEl.innerHTML = '';
    console.log(`Tentativas restart: ${tentativas}`);
}
startBtn.addEventListener('click', restart);

function tentativa(e) { // verificação do número correto e resultados
    if (e) e.preventDefault();
    
    let userInput = parseInt(input.value); // muda o type do input para number
    console.log(`Tentativas começo: ${tentativas}`);

    if (isNaN(userInput) || userInput > 100) { // verifica se o input é válido
        input.value = '';
        input.focus();
        return;
    }

    tentativas++;

    if (userInput === correct) { // verifica se o input é correto e mostra tela de congrats
        let correctText = document.querySelector('.numero');
        let attempts = document.querySelector('.tentativas');
        congrats.style.visibility = 'visible';
        correctText.innerText = correct;

        if (tentativas == 1) attempts.innerText = `Você acertou em ${tentativas} tentativa.`;
        if (tentativas != 1) attempts.innerText = `Você acertou em ${tentativas} tentativas.`;

        input.value = '';
        input.disabled = true;
    }
    else if (userInput < correct) divSeMenor();
    else if (userInput > correct) divSeMaior();

    input.value = '';
    input.focus();
    console.log(`Correct: ${correct}, User input: ${userInput}`);
    console.log(`Tentativas final: ${tentativas}`);
} 

const checaEnter = (e) => { // envia o input ao apertar 'Enter'
    if (e.key === 'Enter') {
        tentativa();
    };
}

input.addEventListener('keyup', checaEnter);
form.addEventListener('submit', tentativa);