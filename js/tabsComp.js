class notificationComp extends HTMLElement {
  // Se declara la clase y extiende de HTMLElement
  constructor() {
    // Se abre el constructor
    super();
    // Se llama a super () para heredar las propiedades y métodos de la clase base "HTMLElement"
    this.shadow = this.attachShadow({ mode: 'open' });
    // Se asigna el valor para crear un shadow DOM asociado al elemento
    this.name = this.getAttribute('notification-comp');
    // Se establece el valor de la propiedad name
    this.notificationMessage = [];
    // Se declara la propiedad notificationMessage
    this.text="";
    this.type="";
    // Y text y type como arreglos vacíos y una cadena vacía (permite que se puedan almacenar valores específicos en una instancia específica de la clase en un momento posterior)
  }
  // El constructor se cierra siempre

  connectedCallback() {
    // Abres el método connectedCallback
    document.addEventListener('message', (event) => {
      // Aquí habías puesto "this.addEventListener" y es "document.addEventListener"
      // Registras el evento message mediante addEventListener
      this.text = event.detail.text;
      this.type = event.detail.type;
      // Dentro, asignas los valores text y type
      this.setAttribute("text", event.detail.text);
      this.setAttribute("type", event.detail.type);
      // actualizas sus atributos con setAttribute
      this.render();
      // Se llama al método render para que actualice la vista del componente
    });
  }

  static get observedAttributes() {
    return ['text', 'type'];
    // especifica los atributos del elemento que se desean "observar" para detectar cambios
  }

  attributeChangedCallback(name, oldValue, newValue) {
  // Se llama a este método automáticamente cuando uno o varios de los atributos observados cambian
    if (name === 'text' && oldValue !== newValue) {
      this.text = newValue;
      this.render();
    }
    if (name === 'type' && oldValue !== newValue) {
      this.type = newValue;
      this.render();
      // Si han cambiado, actualiza la propiedad del elemento y renderiza para actualizar su visualización
    }
  }

  render(){
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
    #notification {
      padding: 1rem;
      background-color: hsl(22deg, 100%, 72%);
      border-bottom: solid hsla(18deg, 73%, 69%, 0.938);
      border-radius: 1rem;
      opacity: 0;
      position: fixed;
      right: 5rem;
      transition: opacity 0.3s;
      bottom: 2rem;
      box-shadow: hsla(0deg, 0%, 0%, 0.341);
    }
    #notification.active {
      opacity: 1;
    }
    #notification.success {
      border-top: 2rem solid hsl(99deg, 74%, 30%);
    }
    #notification.error {
      border-top: 2rem solid hsl(7deg, 74%, 30%);
    }
    </style>
    <div id="notification" class="${this.type}"> 
          <p>${this.text}</p>
    </div>
    `;
  
    let notification = this.shadow.getElementById("notification");
    notification.classList.add("active");

    setTimeout(() => {
        notification.classList.remove("active");
    }, 5000);
  }
}

customElements.define('notification-comp', notificationComp);
// defines el elemento personalizado registrando el componente con el nombre de etiqueta "notification"

// ***SE SEPARA DE ESTE WEB COMPONENT A FORM
//   this.shadow.querySelectorAll('.custom-button', 'send-form-button').forEach(button => {
//      button.addEventListener('click', this.Message);
//     });
//   }
  
//   Message(){
//     let event = new CustomEvent('message', {
//       detail: {
//         text: "Formulario enviado correctamente",
//         type: "success"
//       }
//     });
//   this.dispatchEvent(event);