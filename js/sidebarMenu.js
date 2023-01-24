class sidebarMenu extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }
    // El constructor se cierra siempre
  
    connectedCallback() {

      this.render();

      // Renderizas, y debajo añades el código precedido de render (){

      this.shadow.querySelectorAll('.drowpdown-element-button').forEach(button => {
        button.addEventListener('click', this.toggleDropdown);
      });
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
            <li class="sidebar-element drowpdown-element">
              <a href="#">
                Menú
                <svg class="drowpdown-element-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                </svg>
              </a>
              <ul class="sidebar-dropdown drowpdown-related">
                <li>
                  <a href="" class="sidebar-option" name= "Empresa">Empresa</a>
                </li>
                <li>
                  <a href="" class="sidebar-option" name= "Contacto">Contacto</a>
                </li>
              </ul>
            </li>
            <li class="sidebar-element drowpdown-element">
              <a class="sidebar-element-item" href="#"> 
                Productos
                <svg class="drowpdown-element-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                </svg>
              </a>
                <ul class="sidebar-dropdown drowpdown-related">
                  <li>
                    <a href="" class="sidebar-option" name= "Catálogo">Catálogo</a>
                  </li>
                  <li>
                    <a href="" class="sidebar-option" name= "Promociones">Promociones</a>
                  </li>
                </ul>
            </li>
            <li class="sidebar-element drowpdown-element">
              <a class="sidebar-element-item" href="#">
                Clientes
                <svg class="drowpdown-element-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                </svg>
              </a>
                <ul class="sidebar-dropdown drowpdown-related">
                  <li>
                    <a href="" class="sidebar-option" name= "Lista">Lista</a>
                  </li>
                  <li>
                    <a href="" class="sidebar-option" name= "Soporte">Soporte</a>
                  </li>
                </ul>
            </li>
            <li class="sidebar-element drowpdown-element">
              <a class="sidebar-element-item" href="#">
                Ventas
                <svg class="drowpdown-element-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                </svg>
              </a>
                <ul class="sidebar-dropdown drowpdown-related">
                  <li class="item-animated">
                    <a href="" class="sidebar-option" name= "Registro">Registro</a>
                  </li>
                  <li>
                    <a href="" class="sidebar-option" name= "Gráfico">Gráfico</a>
                  </li>
                </ul>
            </li>
            <li class="sidebar-element">
              <a class="sidebar-option" href="#" name= "Cuenta">
                Cuenta
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
                </svg>
              </a>
            </li>
            <li class="sidebar-element">
              <a class="sidebar-option" href="#" name= "Correo">
                Correo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
              </a>
            </li>
            <li class="sidebar-element">
              <a class="sidebar-option" href="#" name= "Ayuda">
                Ayuda
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm1.024 13.975c0 .566-.458 1.025-1.024 1.025-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024zm1.141-8.192c-.498-.505-1.241-.783-2.09-.783-1.786 0-2.941 1.271-2.941 3.237h1.647c0-1.217.68-1.649 1.261-1.649.519 0 1.07.345 1.117 1.004.052.694-.319 1.046-.788 1.493-1.157 1.1-1.179 1.633-1.173 2.842h1.643c-.01-.544.025-.986.766-1.785.555-.598 1.245-1.342 1.259-2.477.008-.758-.233-1.409-.701-1.882z"/>
                </svg>
              </a>
            </li>
            <li class="sidebar-element">
              <a class="sidebar-option" href="#" name="Cerrar Sesión">
                Cerrar sesión
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21h8v-2l1-1v4h-9v2l-10-3v-18l10-3v2h9v5l-1-1v-3h-8v18zm10.053-9l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div> 
      `;
      
      let sidebarOptions = this.shadow.querySelectorAll('.sidebar-option');
      let drowpdownElements = this.shadow.querySelectorAll('.drowpdown-element');

      // Creas un evento de sidebarOptions con this.shadow, ya que lo creas a partir del código incluido en este componente.
      
      sidebarOptions.forEach( sidebarOption => {

        sidebarOption.addEventListener('click', event => {

          // es un evento de click.

          event.preventDefault();

          // Como el efecto del evento pertenece a PageTitle, partes en este caso de DOCUMENT creando un evento customizado.
          // Mediante este evento, si utilizas la palabra newURL otro evento deberá emitir esta palabra para que sea cazado y actualizar el atributo título

          document.dispatchEvent(new CustomEvent('newUrl', {
              detail: {
                  title: sidebarOption.getAttribute('name')
              }
          }));
        });
      });

      // Este es el evento responsable de que al hacer click en los elementos del menú se desplieguen el resto de opciones

      drowpdownElements.forEach( drowpdownElement => {

        drowpdownElement.addEventListener('click', () => {

          drowpdownElement.querySelector('.drowpdown-element-button').classList.toggle('active');
          drowpdownElement.querySelector('.drowpdown-related').classList.toggle('active');
          drowpdownElement.classList.toggle ('item-animated');
        });
      });
    }
      
    disconnectedCallback() {
      this.shadowRoot.querySelectorAll('.drowpdown-element-button').forEach(button => {
        button.removeEventListener('click', this.toggleDropdown);
      });
    }
      
    toggleDropdown(event) {
      event.preventDefault();
      const parent = event.target.parentNode.parentNode;
      parent.classList.toggle('active');
      event.target.classList.toggle('active');
      
    }

}

customElements.define('sidebar-menu', sidebarMenu);

