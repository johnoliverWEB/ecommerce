export let renderCounter = () => {

    let inputs = document.querySelectorAll('.validate-characters');
    let counter = document.querySelector('.counter');

    inputs.forEach( input => {
        
        input.addEventListener('input', () => {
            counter.textContent = input.value.length;
        });
        
    });

}