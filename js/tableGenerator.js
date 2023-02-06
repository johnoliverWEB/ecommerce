import {API_URL} from "../config/config.js"

class TableGenerator extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.data = [];
  }

  static get observedAttributes() { return ["url"]; }

  connectedCallback() {
    document.addEventListener("newUrl",( event =>{
      this.setAttribute('url', event.detail.url);
      // event.detail era href y tiene que ser url porque es el atributo que figura en sidebarMenu (línea 215)
    }));
  }

  async loadData() {
    let url = `${API_URL}${this.getAttribute('url')}`;
    let response = await fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
      }
    });

    let data = await response.json();
    this.data = data.rows;
  }

  attributeChangedCallback(name, oldValue, newValue){
    this.loadData().then(() => this.render());
  }

  render() {
    this.shadow.innerHTML = `
    <style>
    ul{
      margin: 0;
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
    .panel {
      padding-left: 25rem;
      width: 80%;
      height: 87vh;
    }
    .panel h1 {
      padding: 2rem;
      margin-bottom: 3rem;
    }
    .panel .workplace {
      display: flex;
      justify-content: space-between;
    }
    .panel .workplace .list {
      width: 25%;
      height: 45vh;
    }
    .list .list-element {
      background-color: hsl(208deg, 100%, 97%);
      list-style-type: none;
      padding: 2rem;
      display: flex;
      width: 100%;
    }
    .list .list-element ul li .list-element-datas .list-element-data span {
      font-weight: 800;
      color: hsl(30deg, 73%, 68%);
    }
    .list-element li{
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      align-items: center;
    }
    .list .list-element ul li .buttons {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }
    .list-element ul li .buttons .button-element {
      box-sizing: content-box;
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
    }
    .list .list-element ul li .buttons .button-element svg {
      width: 3rem;
    }
    .list .list-showing-info {
      padding: 1rem;
    }
    .panel .workplace .list .list-showing-info .list-register-amount {
      margin-bottom: 1rem;
    }
    .panel .workplace .list .list-showing-info .list-register-amount a {
      color: hsl(227deg, 37%, 22%);
    }
    .panel .workplace .list .list-showing-info .list-showing a {
      color: hsl(227deg, 37%, 22%);
    }
    button{
      margin-left: 10px;
    }
    svg{
      width: 30px;
      height: 30px;
    }
    </style>
    <div class="list">
      <div class="list-elements">
        <ul class="list-element">

        </ul>
      </div>
        <div class="list-register-amount">
          <a>
            3 Registros
          </a>
        </div>
        <div class="list-showing">
          <a>
            Mostrando la página 1 de 1
          </a>
        </div>
      </div>
    </div> 
    `;

    let list = this.shadow.querySelector(".list-element");
    let tableStructure = this.setTableStructure();

    this.data.forEach(element => {

      let tableItem = document.createElement("li");
      let elementData = document.createElement("div");
      let buttons = document.createElement ("div");
      let editButton = document.createElement ("button");
      editButton.innerHTML ='<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.134 19.319 11.587-11.588c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-11.606 11.566c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 10.114-10.079 2.335 2.327-10.099 10.101z" fill-rule="nonzero"/></svg>'
      let trashButton = document.createElement ("button");
      trashButton.innerHTML ='<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fill-rule="nonzero"/></svg>'
    
      for (const [key, value] of Object.entries(element)) {

        if(Object.keys(tableStructure.headers).includes(key)) {
          // dentro de la key de tablestructure está la key del elemento?
          elementData.innerHTML += `<p>${tableStructure.headers[key].label}: ${value}</p>`;
          // Si está, te vas al headers key label y la pintas.
        }
      }

      editButton.setAttribute("id", element.id);
      trashButton.setAttribute("id", element.id);
      
      console.log(element.id);
      buttons.append(editButton, trashButton);
      tableItem.append(elementData);
      tableItem.append(buttons);
      list.append(tableItem);
    });
  }

  // Instalador de estructura de tablas
  setTableStructure() {

    let url = this.getAttribute('url');
    // captura el atributo url para devolver los datos que correspondan a cada una

    switch (url) {

      case '/api/admin/users':

      return {
        headers:{
          email: {
            label: 'Email',
          },
          name: {
            label: 'Nombre',
          }
        },
        buttons: {
          edit: true,
          remove: true
        }
      };

      case '/api/admin/taxes':

      return {
        headers:{
          type: {
            label: 'Tipo',
          }
        },
        buttons: {
          edit: true,
          remove: true
        }
      };
    }
  }
}

customElements.define("table-generator", TableGenerator);