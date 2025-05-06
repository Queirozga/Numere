let form = document.querySelector('#form')
let submit = document.querySelector('#submit')
let input = document.querySelector('#iadv')

form.addEventListener('submit', tentativa)

function tentativa(e) {
    e.preventDefault();
    
    let correct = (Math.random() * 100).toFixed(0);
    console.log(correct)
}

input.addEventListener('Keyup', checaEnter);

const checaEnter = (e) => {
    if (e.key === 'Enter') tentativa();
}
