const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

input.addEventListener('input',changeInput)

function changeInput() {
    span.style.fontSize = `${input.value}px`
}