import {API_URL} from "../config/config.js";

class formBook extends HTMLElement {

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
		this.elementId = null;
		
	}

	static get observedAttributes() { return ["url"]; }

	connectedCallback() {
		document.addEventListener("newUrl",( event =>{
			this.setAttribute('url', event.detail.url);
		}));

		document.addEventListener("showElement",( event =>{
			this.elementId = event.detail.id;
			this.showElement(event.detail.id);
		}));

		document.addEventListener("notification", (event) => {
			const notificationElement = document.createElement("div");
			notificationElement.textContent = event.detail.text;
			notificationElement.classList.add(event.detail.type);
			document.body.appendChild(notificationElement);
		});

	}

	attributeChangedCallback(name, oldValue, newValue){
		this.render();
	}

  	async render() {
    	this.shadow.innerHTML = `
			<style>
			* {
				box-sizing:border-box;
			}
			ul{
				margin:0;
				padding: 0;
			}
			h1, h2, h3, h4, h5, h6, a, p {
				font-family: "Raleway", sans-serif;
				font-weight: 300;
				color: hsl(28deg, 25%, 49%);
			}
			h1, h2, h3, h4 {
				font-family: "Raleway", sans-serif;
				font-weight: 600;
				color: hsl(208deg, 100%, 97%);
			}
			h1, h2, h3, h4, h5, h6, p, a {
				margin: 0;
				font-size: 2rem;
				text-decoration: none;
			}
			h5, h6 {
				font-family: "Raleway", sans-serif;
			}
			a, p, span, label, li {
				font-family: "Raleway", sans-serif;
				color: hsl(0deg, 0%, 63%);
				font-weight: 300;
				font-size: 1.5rem;
			}
			input, select, textarea {
				color: hsl(0deg, 0%, 0%);
				font-family: "Raleway", sans-serif;
				font-size: 1.5rem;
			}
			td, th {
				font-family: "Raleway", sans-serif;
				color: hsl(0deg, 0%, 100%);
				font-size: 2rem;
			}
			h1 {
				font-family: "Raleway", sans-serif;
				font-size: 2.5rem;
				font-weight: 300;
				text-decoration: none;
			}
			h2 {
				font-size: 2rem;
				font-weight: 300;
				text-decoration: none;
			}
			h4 {
				font-weight: 600;
				text-decoration: none;
			}
			a {
				-webkit-transition: 300ms;
				-moz-transition: 300ms;
				-o-transition: 300ms;
				font-weight: 600;
				text-decoration: none;
				transition: 300ms;
				}
				a:hover, a:focus {
				outline: none;
				text-decoration: none;
				outline-offset: 0;
			}
			.div form{
				height: max-content;
			}
			.form {
				background-color: hsl(227deg, 37%, 22%);
			}
			.tabs-items{
				display: flex;
				justify-content: left;
				width:100%;
				flex-grow:1;
			}
			.tab-item {
				display: flex;
				cursor: pointer;
				margin-right: 0.5rem;
				padding: 1rem;
				background-color: rgba(173, 173, 173, 0.242);
				list-style-type: none;
			}
			.tab-item.active {
				background-color: hsl(208deg, 100%, 97%);
			}
			.tabs-contents {
				background-color: hsl(208deg, 100%, 97%);
				padding: 2rem;
				width: 100%;
				height: 80%;
			}
			.tab-panel {
				display: none;
			}
			.tab-panel.active {
				display: block;
			}
			.row{
				justify-content: space-between;
				display: flex;
				gap: 1rem;
			}
			.row .form-element {
				margin-bottom: 2rem;
				width: 100%;
			}
			.form-element-input {
				width: 100%;
			}
			#color{
				height: 2.9rem;
			}
			input, select, textarea {
				padding: 0.5rem;
				width: 100%;
			}
			textarea{
				height: 20vh;
			}
			.checkbox-container{
				border: solid;
				border-color: rgba(173, 173, 173, 0.242);
				padding: 1rem;
			}
			.checkbox-container label{
				width: 50%;
				font-size: 17px;
			}
			.checkbox-container input{
				width: 10%;
			}
			.radio-container{
				border: solid;
				border-color: rgba(173, 173, 173, 0.242);
				padding: 1rem;
			}
			.radio-container label{
				font-size: 17px;
			}
			input[type="radio"]{
				width: 10%;
			}
			input[class="invalid"]{
				border-color: red;
			}
			.form-button {
				width: 100%;
			}
			.form-button-send{
				font-family: "Raleway", sans-serif;
				color: hsl(0deg, 0%, 63%);
				border-radius: 2rem;
				font-size: 1.5rem;
				background-color: hsl(227deg, 37%, 22%);
				padding: 0.5rem 1.5rem;
				border-color: hsl(29deg, 79%, 85%);
				border-style: solid;
				box-shadow: 5px 5px hsla(0deg, 0%, 0%, 0.137);
				width: 20%;
				float: right;
			}
			.panel .workplace .form .display-section .display-section-items .tabs-contents .tab-content.active .form-element .form-button button {
				cursor: pointer;
				background: transparent;
			}
			</style>
			<div class="form-table">
				<div class="display-section">
					<div class="display-section-items">
						<ul class="tabs-items">

						</ul>
						<div class="tabs-contents">
							<form>

							</form>
							<div id="notification"> 
					
						  </div>
						</div>
					</div>
				</div>
			</div>
		`;

    	let formStructure = await this.setFormStructure();
		let tabsItems = this.shadow.querySelector("ul");
		let form = this.shadow.querySelector("form");
		let formButton = document.createElement ("div");
		formButton.classList.add("form-button");
		let sendFormButton = document.createElement ("button");
		sendFormButton.classList.add ("form-button-send", "custom-button", "send-form-button");
		sendFormButton.innerHTML = "Guardar";
			// Aquí escribirás el código para enviar el formulario

      	Object.keys(formStructure.tabs).forEach(key => {

			let tabItem = document.createElement("li");
			tabItem.classList.add("tab-item");
			tabItem.textContent = formStructure.tabs[key].label;
			tabItem.dataset.tab = key;
			tabsItems.append(tabItem);

			let tabPanel = document.createElement ("div");
			tabPanel.classList.add("tab-panel");
			tabPanel.dataset.tab = key;
			form.append(tabPanel);

			// Buscas la key de formStructure que se encuentre en tabsContent y por cada una
			Object.keys(formStructure.tabsContent[key].rows).forEach(row => {

				let rowContainer = document.createElement("div");
				rowContainer.classList.add("row");
				
				for (let field in formStructure.tabsContent[key].rows[row].formElements){
					
					let formElement = formStructure.tabsContent[key].rows[row].formElements[field];

					let formEl = document.createElement ("div");
					formEl.classList.add("form-element");

					let formElLabel = document.createElement ("div");
					formElLabel.classList.add("form-element-label");

					let formElInput = document.createElement ("div");
					formElInput.classList.add("form-element-input");
					formEl.append(formElLabel, formElInput);

					if(formElement.label){
						const label = document.createElement("label");
						label.innerText = formElement.label;
						label.setAttribute('for', field);
						formElLabel.append(label);
					}

					if (formElement.element === 'input') {

						switch (formElement.type) {

							case 'hidden': {
								const input = document.createElement('input');
								input.type = formElement.type;
								input.name = field;
								input.value = formElement.value || '';

								form.append(input);
								continue;
							}

							case 'number':
							case 'date':
							case 'time':
							case 'datetime-local':
							case 'month':
							case 'week': {
								const input = document.createElement('input');
								input.id = field;
								input.type = formElement.type;
								input.name = field;
								input.min = formElement.min || '';
								input.max = formElement.max || '';
								input.step = formElement.step || '';
								input.placeholder = formElement.placeholder || '';
								input.value = formElement.value || '';
								input.readOnly = formElement.readOnly || false;
								input.dataset.validate = formElement.validate || '';

								formElInput.append(input);
							
								break;
							}

							default: {
								
								const input = document.createElement('input');
								input.id = field;
								input.type = formElement.type;
								input.name = field;
								input.value = formElement.value || '';
								input.placeholder = formElement.placeholder || '';
								input.dataset.validate = formElement.validate || '';
								
								if(formElement.maxLength){

									input.maxLength = formElement.maxLength || '';
									const counter = document.createElement('span');
									formElLabel.append(counter);

									input.addEventListener('input', () => {
										if(input.value.length > 0){
											counter.textContent = input.value.length + ' / ' + input.maxLength;                            
										}else{
											counter.textContent = '';
										}
									});
								}
			
								formElInput.append(input);

								break;
							}
						}
					}

					if (formElement.element === 'textarea') {

						const textarea = document.createElement('textarea');
						textarea.id = field;
						textarea.name = field;
						textarea.disabled = formElement.disabled || false;
						textarea.readOnly = formElement.readOnly || false;
						textarea.value = formElement.value || '';
						textarea.cols = formElement.cols || '';
						textarea.rows = formElement.rows || '';
						textarea.wrap = formElement.wrap || '';
						textarea.placeholder = formElement.placeholder || '';
						textarea.dataset.validate = formElement.validate || '';

						if(formElement.maxLength){

							textarea.maxLength = formElement.maxLength || '';
							const counter = document.createElement('span');
							formElLabel.append(counter);

							textarea.addEventListener('input', () => {
								if(textarea.value.length > 0){
									counter.textContent = textarea.value.length + ' / ' + textarea.maxLength;                            
								}else{
									counter.textContent = '';
								}
							});
						}

						formElInput.append(textarea);
					}

					rowContainer.append(formEl);
                };
				
                tabPanel.append(rowContainer);
        	})
    	});

		formButton.append(sendFormButton);
		form.append(formButton);

		this.shadow.querySelector(".tab-item").classList.add('active');
        this.shadow.querySelector(".tab-panel").classList.add('active');

		this.renderTabs();
		this.renderSubmitButton();
	}

	validateForm(formInputs) {

		let validForm = true;
	
		const validators = {
		  "only-letters": /^[a-zA-Z\s]+$/g,
		  "only-numbers": /\d/g,
		  "telephone": /^\d{9}$/g,
		  "email": /\w+@\w+\.\w+/g,
		  "web": /^(http|https):\/\/\w+\.\w+/g,
		  "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
		  "date": /^\d{4}-\d{2}-\d{2}$/g,
		  "time": /^\d{2}:\d{2}$/g
		};
	
		for (let i = 0; i < formInputs.length; i++) {

		  const input = formInputs[i];
	
		  if (input.dataset.validate && input.value.match(validators[input.dataset.validate]) == null) {
			input.classList.add('invalid');
			validForm = false;
		  } else {
			input.classList.remove('invalid');
		  }
	
		  if (input.dataset.minrequired && input.value.length < input.dataset.minrequired) {
			input.classList.add('invalid');
			validForm = false;
		  }
		}
	
		if (!validForm) {
		  const errorEvent = new CustomEvent("notification", {
			detail: {
			  text: "La entrada es inválida. Por favor, inténtelo de nuevo.",
			  type: "error"
			}
		  });
		  document.dispatchEvent(errorEvent);
		  return false;
		}
	
		return validForm;
	}

	renderSubmitButton = () => {

		const sendFormButton = this.shadow.querySelector('.send-form-button');
	
		if (sendFormButton) {

			sendFormButton.addEventListener('click', (event) => {

				event.preventDefault();
		
				const form = this.shadow.querySelector('form');
				const formInputs = form.elements;

				if(!this.validateForm(formInputs)){
					return;
				}

				const formData = new FormData(form);
				const formDataJson = Object.fromEntries(formData.entries());
				const url = this.elementId ?  `${API_URL}${this.getAttribute('url')}/${this.elementId}` : `${API_URL}${this.getAttribute('url')}`;
				let method = this.elementId ? 'PUT':'POST';

				fetch(url, {
				headers: {
					Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
					'Content-Type': 'application/json',
				},
				method: method,
				body: JSON.stringify(formDataJson),
				})
				.then((response) => response.json())
				.then(() => {

					this.render();

					document.dispatchEvent(
						new CustomEvent('message', {
							detail: {
								text: 'Formulario enviado correctamente',
								type: 'success',
							},
						})
					);

					document.dispatchEvent(new CustomEvent('refreshTable'));
				})
				.catch((error) => {
					console.log(error);
				});
			});
		}
	};

	renderTabs = () => {
		let tabItems = this.shadow.querySelectorAll('.tab-item');
		let tabsContents = this.shadow.querySelectorAll(".tab-panel");
		tabItems.forEach(tabItem => {
			tabItem.addEventListener("click", () => {
				tabItems.forEach(tabsItem => {
					tabsItem.classList.remove("active");
				});
				tabItem.classList.add("active");
				tabsContents.forEach(tabContent => {
					if(tabContent.dataset.tab == tabItem.dataset.tab){
						tabContent.classList.add ("active");
					}else{
						tabContent.classList.remove("active");
					}
				});
			});
		});
	}

	showElement(id){
		let url = `${API_URL}${this.getAttribute('url')}/${id}`;
		fetch(url, {
			headers: {
				Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
				'Content-Type': 'application/json',
			},
		})
		.then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error("Error fetching data");
		})
		.then(data => {
			for (let key in data) {
				const formElInput = this.shadow.querySelector(`input[name=${key}]`);
				if (formElInput) {
					formElInput.value = data[key];
				}
			}
		})
		.catch(error => {
		console.error(error);
		});
	}

	setFormStructure = async () => {

		let url = this.getAttribute('url');
		switch (url) {
			case '/api/admin/books':
			return {
				tabs:{
					main: {
						label: 'Nueva entrada'
					}
				},
				tabsContent: {
					main: {
						rows:{
							row1: {
								formElements:{
									title: {
										label: 'Título',
										element: 'input',
										maxLength: '20',
										type: 'text',
										placeholder: '',
										required: true,
										validate: 'only-letters'
									},
									author: {
										label: 'Autor',
										element: 'input',
										type: 'text',
										placeholder: '',
										required: true,
										validate: 'only-letters'
									}
								}
							},
							row2: {
								formElements:{
									description: {
										label: 'Descripción',
										element: 'textarea',
										maxLength: 100,
										placeholder: '',
										required: true
									}
								}
							},
							row2: {
								formElements:{
									isbn: {
										label: 'ISBN',
										element: 'input',
										type: 'number',
										placeholder: '',
										required: true
									},
									pageCount: {
										label: 'Número de páginas',
										element: 'input',
										type: 'number',
										placeholder: '',
										required: true
									},
									publishedDate: {
										label: 'Fecha de publicación',
										element: 'input',
										type: 'date',
										placeholder: '',
										required: true,
										validate: 'date'
									},

								}
							}

						}
					}
				}
			};
						
		}
	}
}

customElements.define("form-book", formBook);