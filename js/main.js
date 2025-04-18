let form = document.querySelector('#form')
let submit = document.querySelector('#submit')

form.addEventListener('submit', trying)

function trying(e) {
    e.preventDefault();

    let correct = Math.random();
    console.log(correct)
}