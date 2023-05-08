const rest = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
    
}
console.log(rest);

rest.input.addEventListener('input',onInputChange)

function onInputChange(event) {
    rest.span.textContent = event.currentTarget.value;
    if (rest.input.textContent = '') {
        rest.span.textContent === rest.input.textContent;
}
}
console.log(rest);