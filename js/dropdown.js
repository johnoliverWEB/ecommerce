export let renderDropdown = () => {

    let drowpdownElements =  document.querySelectorAll('.drowpdown-element');

    drowpdownElements.forEach( drowpdownElement => {

        drowpdownElement.addEventListener('click', () => {

            drowpdownElement.querySelector('.drowpdown-element-button').classList.toggle('active');
            drowpdownElement.querySelector('.drowpdown-related').classList.toggle('active');
            classList.toggle ('item-animated');
        });
    });
}
