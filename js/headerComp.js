import {API_URL} from "../config/config.js"

class headerComp extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    
    }

    connectedCallback() {

    this.render();
      
    };
    
    // async loadData(){

    //   let url = `${API_URL}/api/admin/menus/display/${this.menu}`

    //   let response = await fetch( url, {
    //     headers: {
    //         'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
    //         'Content-Type': 'application/json',
    //     }
    //   });

    //   let data = await response.json();
    //   this.menuItems = Object.values(data);
    // }

    render(){
      
      this.shadow.innerHTML = `
        <style>
        .header {
          background-color: white;
          height: 7vh;
          padding: 1rem 15% 0.5rem 15%;
          width: 70%;
        }
        .header-container{
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          margin: 0 auto;
        }
        .header-logo{
          border: solid;
          align-items: center;
          width: 15%;
          height: 4vh;
          display: flex;
          padding: 0.3rem;
          gap: 1rem;
        }
        .header-logo-title{
         margin-left: 0.2rem;
        }
        h1 {
          font-family: "Raleway", sans-serif;
          font-size: 1.7rem;
          font-weight: 800;
          text-decoration: none;
        }
        .header-navbar ul{
          display: flex;
          gap: 3rem;
          list-style: none;
          justify-content: space-between;
          padding: 0;
          margin: 0;
          width: 100%; 
        }
        a{
          list-style: none;
          font-family: "Raleway", sans-serif;
          font-size: 1rem;
          font-weight: 800;
          text-decoration: none;
          color:hsl(0, 0%, 49%);
        }
        .header-button button{
          all: unset;
          color: white;
          font-family: "Raleway", sans-serif;
          font-weight: 600;
          border-radius: 2rem;
          font-size: 1.2rem;
          background-color: hsl(17, 95%, 59%);
          cursor: pointer;
          padding: 0.5rem 1.5rem;
        }
        .header-button button:hover{
          background-color: hsl(0, 0%, 39%);
        }
        </style>
        <div class="header">
          <div class="header-container">
            <div class="header-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.566 17.842c-.945 2.462-3.678 4.012-6.563 4.161.139-2.772 1.684-5.608 4.209-6.563l.51.521c-1.534 1.523-2.061 2.765-2.144 3.461.704-.085 2.006-.608 3.483-2.096l.505.516zm-1.136-11.342c-1.778-.01-4.062.911-5.766 2.614-.65.649-1.222 1.408-1.664 2.258 1.538-1.163 3.228-1.485 5.147-.408.566-1.494 1.32-3.014 2.283-4.464zm5.204 17.5c.852-.44 1.61-1.013 2.261-1.664 1.708-1.706 2.622-4.001 2.604-5.782-1.575 1.03-3.125 1.772-4.466 2.296 1.077 1.92.764 3.614-.399 5.15zm11.312-23.956c-.428-.03-.848-.044-1.261-.044-9.338 0-14.465 7.426-16.101 13.009l4.428 4.428c5.78-1.855 12.988-6.777 12.988-15.993v-.059c-.002-.437-.019-.884-.054-1.341zm-5.946 7.956c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/></svg>
              <div class="header-logo-title"><h1>PROLAND</h1></div>
            </div>
            <div class="header-navbar">
              <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">FEATURED</a></li>
                <li><a href="">DETAILS</a></li>
                <li><a href="">TEAM</a></li>
                <li><a href="">CONTACT</a></li>
              </ul>
            </div>
            <div class="header-button">
              <button>BUY IT NOW</button>
            </div>
          </div>
        </div>
    	`;
  }

  disconnectedCallback() {
      
  }

}
customElements.define('header-comp', headerComp);

