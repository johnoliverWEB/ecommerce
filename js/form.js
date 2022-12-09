import {validateForm} from "./validate.js";

export let renderForm = () => {

    let form = document.querySelector('form');
    let formInputs = form.elements;
    let sendFormButton = document.querySelector('.send-form-button');

    if(sendFormButton){

        sendFormButton.addEventListener("click", (event) => {

            event.preventDefault();

            validateForm(formInputs);
            
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());
            let url = form.dataset.url;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': sessionStorage.getItem('accessToken')
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