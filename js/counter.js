export let renderCounter = () => {

    let inputs = document.querySelectorAll('.validate-characters');
    let counter = document.querySelector('.counter');

    inputs.forEach( input => {
        
        input.addEventListener('input', () => {
            console.log(input.dataset.validation);
            console.log(input.value.length);
            counter.textContent = input.value.length;
        });
        
    });

}