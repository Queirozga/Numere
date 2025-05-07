let form = document.querySelector('#form');
let submit = document.querySelector('#submit');
let input = document.querySelector('#iadv');
let tentEl = document.querySelector('.tentativa_container');
let tentativas = 0;

const createCorrect = () => {
    let correctNum = (Math.random() * 100).toFixed(0);
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

function tentativa(e) {
    e.preventDefault();
    tentativas++;
    console.log(correct); // só p testar

    if (isNaN(input.value) || input.value > 100) {
        input.value = '';
        input.focus();
        return;
    }

    if (input.value === correct) {
        let congrats = document.querySelector('.congrats_popup');
        let correctText = document.querySelector('.numero');
        let tryes = document.querySelector('.tentativas');
        congrats.style.visibility = 'visible';
        correctText = correct;
        tryes = tentativas;
    } else if (input.value < correct) {
        divSeMenor()
    } else if (input.value > correct) {
        divSeMaior();
    }

    input.value = '';
    input.focus();
} 

const checaEnter = (e) => {
    if (e.key === 'Enter') tentativa();
}


input.addEventListener('Keyup', checaEnter);
form.addEventListener('submit', tentativa);