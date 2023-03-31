class modalComp extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' })
      this.name = this.getAttribute('pop-modal');
      this.renderProducts = [];
    }
    
    connectedCallback() {
      this.shadow.addEventListener


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
      });

      this.render();
     
    };

    render(){

      this.shadow.innerHTML = `
      <style>
 
      #overlay active{
        background-color: #00000080;
        position: fixed;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0;
      }

      #overlay {
        opacity: 1;
        z-index: 3000;
      }

      #pop-modal {
        padding: 2rem;
        background-color: white;
        border-radius: 1rem;
        opacity: 0;
        position: fixed;
        right: 27%;
        top: 15%;
        height: 60vh;
        transition: opacity 0.3s;
        box-shadow: #00000080;
        width: 40%;
        z-index: -1;
      }

      #pop-modal active{
        opacity: 1;
        z-index: 3000;
      }

      .buttons{
        display: flex;
        justify-content: center;
        gap: 1rem;
      }

      button{
        padding: 1rem 2rem;
        cursor: pointer;
      }

      button#accept-button{
        background-color: green;
        font-family: "Raleway", sans-serif;
        color: white;
      }

      button#cancel-button{
        font-family: "Raleway", sans-serif;
      }

      p {
        font-family: "Raleway", sans-serif;
        color: hsl(0deg, 0%, 63%);
        font-weight: 300;
        font-size: 1.5rem;
        text-align: center;
      }

      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      
      
      </style>
      <div id="overlay">
        <div id="pop-modal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <slot name="modal-content"></slot>
          </div>
        </div>
      </div>
      `;
      
    }

    disconnectedCallback() {

    }
}
customElements.define('pop-modal', modalComp);

