class deleteModal extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.name = this.getAttribute('delete-modal');
    this.deleteMessage = [];
  }

  connectedCallback() {
    document.addEventListener('showDeleteModal', (event) => {
      this.setAttribute("id", event.detail.id);
      this.shadow.querySelector('#delete-modal').classList.add('active');
      this.shadow.querySelector('#overlay').classList.add('active');
    });

    this.render();
  }

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'text') {
      this.text = newValue;
    }
  }


  render(){
    this.shadow.innerHTML = `
    <style>
 
    #overlay{
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

    #overlay.active {
      opacity: 1;
      z-index: 3000;
    }

    #delete-modal {
      padding: 2rem;
      background-color: hsl(227deg, 37%, 22%);
      border-bottom: solid hsla(18deg, 73%, 69%, 0.938);
      border-radius: 1rem;
      opacity: 0;
      position: fixed;
      right: 35%;
      transition: opacity 0.3s;
      bottom: 40%;
      box-shadow: hsla(0deg, 0%, 0%, 0.341);
      width: 25%;
      z-index: -1;
    }

    #delete-modal.active {
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
    
    </style>
    <div id="overlay">
      <div id="delete-modal" class="modal">
        <div class="modal-content">
          <p>¿Seguro que deseas eliminar esta entrada?</p>
          <div class="buttons">
            <button id="accept-button">Aceptar</button>
            <button id="cancel-button">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
    `;

    this.renderButtons();
  }

  async renderButtons(){

    const acceptButton = this.shadow.querySelector("#accept-button");
    const cancelButton = this.shadow.querySelector("#cancel-button");
    const overlay = this.shadow.querySelector("#overlay");

    acceptButton.addEventListener("click", (event) => {
      let id = this.getAttribute("id");
      let url = this.getAttribute('url');
      

    });

    cancelButton.addEventListener("click", (event) => {
      this.shadow.querySelector('#delete-modal').classList.remove('active');
      this.shadow.querySelector('#overlay').classList.remove('active');
    });

    overlay.addEventListener("click", (event) => {
      this.shadow.querySelector('#delete-modal').classList.remove('active');
      this.shadow.querySelector('#overlay').classList.remove('active');
    });
  }
}

customElements.define('delete-modal', deleteModal);