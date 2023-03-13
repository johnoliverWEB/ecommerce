import {API_URL} from "../config/config.js"

class contactComp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    // this.menu = this.getAttribute('menu');
    // this.menuItems = [];
  }

  connectedCallback() {

    this.render();
  }

  render(){

    this.shadow.innerHTML = `
      <style>
      .contact {
        position: relative;
        background: hsl(200, 100%, 99%);
      }
      
      .contact-map {
        position: relative;
      }
      
      iframe {
        width: 100%;
        height: 70vh;
        z-index: 1000;
        position: relative;
      }
      
      .contact-card-front {
        z-index: 1001;
        position: absolute;
        background-color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 2rem;
        width: 25%;
      }
    
      .contact-card-front-title h4{
        font-family: "Raleway", sans-serif;
        font-weight: 800;
        text-decoration: none;
        margin: 0;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        color: hsl(173, 6%, 30%);
        text-align: left;
      }

      .contact-card-front-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.2rem;
      }

      .contact-card-front-item-icon svg{
        fill: grey;
        width: 1rem;
        height: 1rem;
      }
      
      .contact-card-front-item-data {
        text-align: center;
      }

      .contact-card-front-item-data p{
        font-family: "Raleway", sans-serif;
        font-weight: 300;
        text-decoration: none;
        line-height: 1.5;
        font-size: 1rem;
        font-weight: 500;
        color: hsl(173, 6%, 30%);
        text-align: left;
        margin: 0;
      }
    
      .contact-card-front-button button{
        all: unset;
        z-index: 1001;
        align-items: center;
        text-align: center;
        color: white;
        font-family: "Raleway", sans-serif;
        font-weight: 600;
        font-size: 1.2rem;
        background-color: hsl(209, 100%, 50%);
        cursor: pointer;
        padding: 1rem 0;
        margin-top: 2rem;
        width: 100%;
      }
      
      .contact-card-front-button button:hover {
        background-color: hsl(0, 0%, 39%);
      }

      .contact-card-back{
      }

      </style>
      <div class="contact">
        <div class="contact-map"><iframe scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=2.62624740600586%2C39.5619139825004%2C2.6494216918945312%2C39.57587445446343&amp;layer=mapnik&amp;marker=39.56889456984472%2C2.6378345489501953" style="border: 1px solid black"></iframe><br/></div>
        <div class="contact-card-front">
          <div class="contact-card-front-title"><h4>GET IN TOUCH</h4></div>
            <div class="contact-card-front-item">
              <div class="contact-card-front-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg></div>
              <div class="contact-card-front-item-data"><p>523 Sylvan Ave, 5th Floor <br> Mountain View, CA 94041USA</p></div>
            </div>
            <div class="contact-card-front-item">
              <div class="contact-card-front-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg></div>
              <div class="contact-card-front-item-data"><p>+1 987 654 3210</p></div>
            </div>
            <div class="contact-card-front-item">
              <div class="contact-card-front-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg></div>
              <div class="contact-card-front-item-data"><p>support@watchland.com</p></div>
            </div>
          <div class="contact-card-front-button"><button>CONTACT US</button></div>
        </div>
        <div class="contact-card-back">
          <form></form>
        </div>
      </div>
    `;
  };
}
customElements.define('contact-comp', contactComp);

