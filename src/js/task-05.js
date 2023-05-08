const rest = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
    
}


rest.input.addEventListener('input',onInputChange)

function onInputChange(event) {
    event.preventDefault();
    rest.span.textContent = rest.input.value
        ? rest.input.value : rest.span.textContent;

}

