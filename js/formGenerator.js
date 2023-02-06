class formGenerator extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(name, oldValue, newValue){
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
			width: 100%;
			}
			.tab-content {
			display: none;
			padding: 1rem;
			}
			.tab-content.active {
			display: block;
			}
			.form-element {
			padding-top: 2rem;
			}
			.form-element input {
			width: 100%;
			padding: 0.5rem;
			}
			.form-element-input textarea {
			width: 100%;
			height: 30vh;
			margin-bottom: 2rem;
			}
			.form-button {
			font-family: "Raleway", sans-serif;
			border-radius: 2rem;
			font-size: 1.5rem;
			background-color: hsl(227deg, 37%, 22%);
			padding: 0.5rem 1.5rem;
			border-color: hsl(29deg, 79%, 85%);
			border-style: solid;
			box-shadow: 5px 5px hsla(0deg, 0%, 0%, 0.137);
			width: 9%;
			}
			.panel .workplace .form .display-section .display-section-items .tabs-contents .tab-content.active .form-element .form-button button {
			cursor: pointer;
			background: transparent;
			}
			</style>
			<div class="form">
				<div class="display-section">
					<div class="display-section-items">
						<ul class="tabs-items">

						</ul>
						<div class="tabs-contents">
							<form>
							</form>
						</div>
					</div>
				</div>
			</div>
		`;

    	let formStructure = await this.setFormStructure();
		let tabsItems = this.shadow.querySelector("ul");
		let form = this.shadow.querySelector("form");

      	Object.keys(formStructure.tabs).forEach(key => {

			let tabItem = document.createElement("li");
			tabItem.classList.add("tab-item");
			tabItem.textContent = formStructure.tabs[key].label;
			tabItem.dataset.tab = key;
			tabsItems.append(tabItem);

			let tabContent = document.createElement ("tab-content");
			tabContent.classList.add("tab-content");
			tabContent.dataset.tab = key;
			form.append(tabContent);

			// Buscas la key de formStructure que se encuentre en tabsContent y por cada una
			Object.keys(formStructure.tabsContent[key].rows).forEach(row => {

				let rowContainer = document.createElement("div");
				rowContainer.classList.add("row");
				tabContent.append(rowContainer);
				
				Object.values(formStructure.tabsContent[key].rows[row].formElements).forEach(formElement => {

					let formEl = document.createElement ("div");
					formEl.classList.add("form-element");

					let formElLabel = document.createElement ("div");
					formElLabel.classList.add("form-element-label");

					let formElInput = document.createElement ("div");
					formElInput.classList.add("form-element-input");
					formEl.append(formElLabel, formElInput);
					rowContainer.append(formEl);

					let label = document.createElement("label");
					label.textContent = formElement.label;

					// if (formElement.element === "select") {
					// 	let select = document.createElement("select");

					// } else {
					// 	let input = document.createElement(formElement.element);
					// 	input.setAttribute("type", formElement.type);
					// 	input.setAttribute("maxLength", formElement.maxLength || "");
					// 	input.setAttribute("placeholder", formElement.placeholder || "");
					
					// 	if (formElement.options) {
					// 		formElement.options.forEach(option => {
					// 			let opt = document.createElement("option");
					// 			opt.value = option.value;
					// 			opt.textContent = option.label;
					// 			input.append(opt);
					// 		});
					// 	}
					// };
					
					if (formElement.options) {
						formElement.options.forEach(option => {
							let input = document.createElement("input");
							input.setAttribute("type", formElement.type);
							input.setAttribute("name", formElement.name || "");
							input.setAttribute("value", option.value);
							let inputLabel = document.createElement("label");
							inputLabel.textContent = option.label;
							formElInput.append(input, inputLabel);	
						});
						
					} else {
						let input = document.createElement(formElement.element);
						input.setAttribute("type", formElement.type);
						input.setAttribute("maxLength", formElement.maxLength || "");
						input.setAttribute("placeholder", formElement.placeholder || "");
						
						formElInput.append(input);
					}

					formElLabel.append(label);

				})
			});
		});

		this.shadow.querySelector(".tab-item").classList.add("active");
		this.shadow.querySelector(".tab-content").classList.add("active");

		this.renderTabs();
  	}

  	renderTabs = () => {
		let tabItems = this.shadow.querySelectorAll('.tab-item');
		let tabsContents = this.shadow.querySelectorAll (".tab-content");
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

	setFormStructure = async () => {
    	let url = this.getAttribute('url');
        switch (url) {
			case '/api/admin/users':
			return {
				tabs:{
					main: {
						label: 'Principal',
					},
					images: {
						label: 'Imágenes',
					}
				},
				tabsContent: {
					main: {
						rows:{
							row1: {
								formElements:{
									id:{
										element: 'input',
										type: 'hidden',
									},
									name: {
										label: 'Nombre',
										element: 'input',
										maxLength: '10',
										type: 'text',
										placeholder: '',
										required: true,
										validate: 'only-letters'
									},
									email: {
										label: 'Email',
										element: 'input',
										type: 'email',
										placeholder: '',
										required: true,
										validate: 'email'
									}
								}
							},
							row2: {
								formElements:{
									password: {
										label: 'Contraseña',
										element: 'input',
										type: 'password',
										placeholder: '',
										required: true
									},
									repeatPassword: {
										label: 'Repita la contraseña',
										element: 'input',
										type: 'password',
										placeholder: '',
										required: true
									}
								}
							},
							row3: {
								formElements:{
									permissions: {
										label: 'Permisos',
										element: 'input',
										type: 'checkbox',
										required: true,
										options: [
											{
												label: 'Crear',
												value: 'create',
												checked: true
											},
											{
												label: 'Leer',
												value: 'read'
											},
											{
												label: 'Actualizar',
												value: 'update'
											},
											{
												label: 'Eliminar',
												value: 'delete'
											}
										]
									},
									sex: {
										label: 'Sexo',
										element: 'input',
										type: 'radio',
										required: true,
										options: [
											{
												label: 'Masculino',
												value: "M",
												checked: true
											},
											{
												label: 'Femenino',
												value: "F"
											}
										],
									}
								}
							},
							row4: {
								formElements:{
									color: {
										label: 'Color',
										element: 'input',
										type: 'color',
										placeholder: ''
									},
									role: {
										label: 'Rol',
										element: 'select',
										required: true,
										options: [
											{
												label: 'Administrador',
												value: 'admin'
											},
											{
												label: 'Usuario',
												value: 'user'
											}
										]
									}
								}
							},
							row5: {
								formElements:{
									edad: {
										label: 'Edad',
										element: 'input',
										type: 'number',
										placeholder: '',
										required: true
									},
									telefono: {
										label: 'Teléfono',
										element: 'input',
										type: 'tel',
										placeholder: '',
										required: true
									},
									url: {
										label: 'URL',
										element: 'input',
										type: 'url',
										placeholder: '',
										required: true
									}
								}
							},
							row6: {
								formElements:{
									creationDate: {
										label: 'Fecha de creación',
										element: 'input',
										type: 'date',
										placeholder: '',
										required: true,
										validate: 'date'
									},
									creationTime: {
										label: 'Hora de creación',
										element: 'input',
										type: 'time',
										placeholder: '',
										required: true
									}
								}
							},
							row7: {
								formElements:{
									reservationWeek: {
										label: 'Semana de reserva',
										element: 'input',
										type: 'week',
										placeholder: '',
										required: true
									},
									reservationMonth: {
										label: 'Mes de reserva',
										element: 'input',
										type: 'month',
										placeholder: '',
										required: true
									},
									reservationDateTime: {
										label: 'Fecha y hora',
										element: 'input',
										type: 'datetime-local',
										placeholder: '',
										required: true
									}
								}
							},
							row8: {
								formElements:{
									capital: {
										label: 'Capital',
										element: 'input',
										type: 'range',
										min: 0,
										max: 100,
										step: 1,
										value: 50,
										placeholder: ''
									},
								}
							},
							row9: {
								formElements:{
									pdf: {
										label: 'Adjuntar archivo',
										element: 'input',
										type: 'file',
										placeholder: '',
										required: true
									},
									search: {
										label: 'Buscar',
										element: 'input',
										type: 'search',
										placeholder: '',
										required: true
									}
								}
							},
							row10: {
								formElements:{
									description: {
										label: 'Descripción',
										element: 'textarea',
										maxLength: 100,
										placeholder: '',
										required: true
									}
								}
							}
						}
					},
					images: {
						rows: {
							row1: {
								formElements:{

								}
							}
						}
					}
				}
			};
		}
	}
}

customElements.define("form-generator", formGenerator);