import {API_URL} from "../config/config.js"

class sidebarMenu extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.menu = this.getAttribute('menu');
      this.menuItems = [];
    }
    // El constructor se cierra siempre
  
    connectedCallback() {

      this.loadData().then(() => this.render());

      // Renderizas, y debajo añades el código precedido de render (){

      this.shadow.querySelectorAll('.drowpdown-element-button').forEach(button => {
        button.addEventListener('click', this.toggleDropdown);
      });
    }
    // Agrega la palabra clave async delante de la declaración de la función loadData(). Esto indica que la función es asíncrona y que se puede utilizar con la palabra clave await dentro de ella.
    // Utiliza la función fetch() para realizar una solicitud HTTP a la URL especificada. En este caso, la URL puede ser una variable o una constante que contenga la URL de tu API.
    // Utiliza el método json() en la respuesta del fetch para convertir los datos recibidos en un objeto JSON.
    // Asigna el objeto JSON a una propiedad de tu componente para poder acceder a los datos más adelante.
    // En resumen, utilizando la palabra clave async antes de una función te permite utilizar await dentro de ella para esperar a que una promesa se resuelva antes de continuar con el código. En este caso, estamos esperando a que la respuesta del fetch se complete antes de convertirla en un objeto JSON y guardarlo en una propiedad del componente.
    async loadData(){

      let url = `${API_URL}/api/admin/menus/display/${this.menu}`

      let response = await fetch( url, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
            'Content-Type': 'application/json',
        }
      });

      let data = await response.json();
      this.menuItems = Object.values(data);
      // una vez que los datos se han cargado correctamente, podrás acceder a ellos a través de la propiedad this.data. Por ejemplo, en el método render de tu componente, podrías utilizar estos datos para mostrarlos en la interfaz.
    }

    render(){
      
      // Dentro de this.shadow.innerHTML introduces el CSS (no el SASS, cuidado)
      this.shadow.innerHTML = `
        <style>
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
        .sidebar {
          position: fixed;
          overflow: auto;
          padding: 3rem;
          width: 260px;
          background-color: hsl(224deg, 25%, 20%);
          height: 100vh;
        }
        .sidebar .sidebar-header {
          display: flex;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }
        .sidebar .sidebar-header .sidebar-header-logo .sidebar-header-logo-image {
          align-items: center;
          width: 30%;
          margin-bottom: 1rem;
        }
        .sidebar .sidebar-categories {
          height: 50rem;
        }
        .sidebar .sidebar-categories .sidebar-element {
          margin-bottom: 1.5rem;
        }
        .sidebar .sidebar-categories .sidebar-element a {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sidebar .sidebar-categories .sidebar-element svg {
          fill: hsla(208deg, 100%, 97%, 0.589);
          transition: transform 0.3s;
          width: 10%;
        }
        .sidebar .sidebar-categories .sidebar-element svg.active {
          transform: rotate(90deg);
        }
        .sidebar .sidebar-categories .sidebar-element .sidebar-dropdown {
          overflow: hidden;
          height: 0;
          margin-top: 1.5rem;
        }
        .sidebar .sidebar-categories ul {
          list-style-type: none;
        }
        .sidebar .sidebar-categories .sidebar-element .sidebar-dropdown li {
          margin-bottom: 1rem;
        }
        .sidebar .sidebar-categories .sidebar-element .sidebar-dropdown.active {
          height: -webkit-max-content;
          height: -moz-max-content;
          height: max-content;
          transform: translateX(1.5rem);
        }
        </style>
        <div class="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-header-logo">
            <div class="sidebar-header-logo-image">
                <img src="imagenes/logo-molon.svg" alt="logo">
            </div>
            <div class="sidebar-header-logo-title">
                <h2>ILULO CERAMICS</h2>
            </div>
          </div>
        </div>
        <div class="sidebar-categories">
          <ul>
            
          </ul>
        </div> 
    	`;

    let list = this.shadow.querySelector(".sidebar-categories ul");

    this.menuItems.forEach(menuItem => {

      let listItem = document.createElement("li");
      listItem.classList.add ("sidebar-element");

      let link = document.createElement('a');
      link.classList.add("sidebar-menu-item");

      link.href = menuItem.customUrl;
      link.name = menuItem.name;
      link.textContent = menuItem.name;

      link.setAttribute("href", menuItem.customUrl);
      link.textContent = menuItem.name;

      listItem.appendChild(link);

      this.createSubMenu(menuItem, listItem); 

      list.appendChild(listItem);
    });

    this.shadow.querySelectorAll('a').forEach(link => {

      link.addEventListener("click", (event) => {

          event.preventDefault();

          document.dispatchEvent(new CustomEvent('newUrl', {
              detail: {
                  url: link.getAttribute("href"),
                  title: link.textContent,
              }
          }));
      });
    });
  }

  createSubMenu(menuItem, li) {

    if (menuItem.children) {

      let subMenu = document.createElement('ul');
      subMenu.classList.add("sidebar-drowpdown","drowpdown-related");
      li.append(subMenu);

      Object.values(menuItem.children).forEach(subMenuItem => {

          let subLi = document.createElement('li');
          let subLink = document.createElement('a');
          subLi.classList.add("sidebar-option");

          subLink.setAttribute("href", subMenuItem.customUrl);
          subLink.textContent = subMenuItem.name;

          subLi.appendChild(subLink);
          subMenu.appendChild(subLi);

          this.createSubMenu(subMenuItem, subLi); 
      });

      subMenu.addEventListener('click', () => {

        let drowpdownElement = this.shadow.querySelectorAll('.drowpdown-element');

        drowpdownElement.forEach(element => {
          drowpdownElement.querySelector('.drowpdown-element-button').classList.remove('active');
          drowpdownElement.querySelector('.drowpdown-related').classList.remove('active');
          drowpdownElement.classList.remove('item-animated');
        });


        subMenu.querySelector('.drowpdown-element-button').classList.add('active');
        subMenu.querySelector('.drowpdown-related').classList.remove('active');
        subMenu.lassList.remove('item-animated');
			});

      li.appendChild(subMenu);
    }
  }


	// Este código es una función recursiva que crea un submenú a partir de un elemento de menú dado. 
	// function createSubmenu(menuItem, ) {
	// 	if (menuItem.children) {
	// 		// La función comprueba si el elemento de menú tiene hijos, y si es así, crea un elemento "ul" y le añade dos clases CSS.
	// 		let sidebarChildren = document.createElement("ul");
	// 		sidebarChildren.classList.add("sidebar-drowpdown");
	// 		sidebarChildren.classList.add("drowpdown-related");
	// 		//  Luego, itera a través de los hijos del elemento de menú y para cada hijo, crea un elemento "li", le añade una clase CSS y establece su contenido de texto en el nombre del hijo
	// 		menuItem.children.forEach(element => {
	// 			let sidebarChildrenLi = document.createElement("li");
	// 			sidebarChildrenLi.classList.add("sidebar-option");
	// 			sidebarChildrenLi.textContent = element.name;
	// 			sidebarChildren.append(sidebarChildrenLi);
	// 			// Finalmente, llama a la función de nuevo con cada hijo para crear submenús adicionales si es necesario.
	// 			createSubmenu(element);


				// TODO INCLUIR CUSTOMURL POR SI EL SUBMENÚ CUENTA CON ÉL
				// TODO introducir la función
	// 	  	});
	// 	}
	// }

    disconnectedCallback() {
      	this.shadowRoot.querySelectorAll('.drowpdown-element-button').forEach(button => {
        button.removeEventListener('click', this.toggleDropdown);
      	});
        // disconnectedCallback es un método de una clase de Web Component que se llama automáticamente cuando el elemento personalizado se desconecta del DOM y se utiliza para limpiar los eventos y recursos asociados con el componente antes de su eliminación.
    }
    toggleDropdown(event) {
		event.preventDefault();
		const parent = event.target.parentNode.parentNode;
		parent.classList.toggle('active');
		event.target.classList.toggle('active');
      
    }
}
customElements.define('sidebar-menu', sidebarMenu);

