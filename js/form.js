import {validateForm} from "./validate.js";

export let renderForm = () => {

    let sendFormButton = document.querySelector('.send-form-button');

    if(sendFormButton){

        sendFormButton.addEventListener("click", (event) => {

            event.preventDefault();

            let form = document.querySelector('form');
            let formInputs = form.elements;

            validateForm(formInputs);
            
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());
            let url = form.action;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataJson)
            }).then(response => {
                return response.json();
            }).then(data => {
                
                document.dispatchEvent(new CustomEvent('message', {
                    detail: {
                        text: 'Formulario enviado correctamente',
                        type: 'success'
                    }
                }));
        
            }).catch(error => {
                console.log(error);
            });
        });
    };
};