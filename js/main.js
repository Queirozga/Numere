let form = document.querySelector('#form');
let input = document.querySelector('#iadv');
let tentEl = document.querySelector('.tentativa_container');
let congrats = document.querySelector('.congrats_popup');
let startBtn = document.querySelector('.again_bnt');
let howToPlayPopup = document.querySelector('.how_to_play_popup');
let howToPlayBtn = document.querySelector('.icon_Button');
let closeHTPBtn = document.querySelector('.close_popup');
let tentativas = 0;


howToPlayBtn.addEventListener('click', () => {
    howToPlayPopup.style.visibility = 'visible';
});

closeHTPBtn.addEventListener('click', () => {
    howToPlayPopup.style.visibility = 'hidden';
});

const createCorrect = () => { // cria o número correto
    let correctNum = Math.floor(Math.random() * 100);
    return correctNum;
}
let correct = createCorrect();

const criaDiv = (userInput) => { // cria a div de representação dos números na tela
    let newDiv = document.createElement('div');

    newDiv.classList.add('tentativa');
    if (userInput > correct) newDiv.innerHTML = `<i id="arrow_icon" class="fa-solid fa-arrow-down"></i> ${userInput}`;
    if (userInput < correct) newDiv.innerHTML = `<i id="arrow_icon" class="fa-solid fa-arrow-up"></i> ${userInput}`;
    
    tentEl.prepend(newDiv);
    return newDiv;
}

const divSeMaior = (userInput) => { // altera o background da div
    let div = criaDiv(userInput);
    div.style.backgroundColor = `#A64138`;
}
const divSeMenor = (userInput) => { // altera o background da div
    let div = criaDiv(userInput);
    div.style.backgroundColor = `#2F6073`;
}

function restart() { // começa o jogo novamente
    congrats.style.visibility = 'hidden';
    input.disabled = false;
    input.value = '';
    input.focus();
    tentativas = 0;
    correct = createCorrect();
    tentEl.innerHTML = '';
}
startBtn.addEventListener('click', restart);

function tentativa(e) { // verificação do número correto e resultados
    if (e) e.preventDefault();
    
    let footerTxt = document.querySelector('.footer_text');
    footerTxt.style.visibility = 'hidden';

    let userInput = parseInt(input.value); // muda o type do input para number

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


        if (tentativas == 1) attempts.innerHTML = `Você acertou em <span>${tentativas}</span> tentativa.`;
        if (tentativas != 1) attempts.innerHTML = `Você acertou em <span>${tentativas}</span> tentativas.`;

        input.value = '';
        input.disabled = true;
    }
    else if (userInput < correct) divSeMenor(userInput);
    else if (userInput > correct) divSeMaior(userInput);

    input.value = '';
    input.focus();
} 



form.addEventListener('submit', tentativa);