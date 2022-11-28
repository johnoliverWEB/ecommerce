import {validateForm} from "./validate.js";

export let renderForm = () => {

    let form = document.querySelector('form');
    let formInputs = form.elements;
    let sendFormButton = document.querySelector('.send-form-button');

    if(sendFormButton){

        sendFormButton.addEventListener("click", (event) => {

            event.preventDefault();

            validateForm(formInputs);

            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));
        });
    };
};