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
      .contact{
        position: relative;

      }

      .contact-map{
        
      }

      iframe{
        width: 100%;
        height: 70vh;
        z-index:1;
        position: relative;
      }

      .contact-card-front{
        z-index: 1001;
        position: absolute;
        background-color: white;
      }

      .contact-card-front-title{

      }
      .contact-card-front-item{

      }
      .contact-card-front-item-icon{

      }
      .contact-card-front-item-data{

      }
      .contact-card-back{

      }
      </style>
      <div class="contact">
        <div class="contact-map"><iframe scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=2.62624740600586%2C39.5619139825004%2C2.6494216918945312%2C39.57587445446343&amp;layer=mapnik&amp;marker=39.56889456984472%2C2.6378345489501953" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=39.5689&amp;mlon=2.6378#map=16/39.5689/2.6378">Ver mapa más grande</a></small></div>
        <div class="contact-card-front">
          <div class="contact-card-front-title">GET IN TOUCH</div>
          <div class="contact-card-front-item">
            <div class="contact-card-front-item-icon"></div>
            <div class="contact-card-front-item-data"><p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA</p></div>
          </div>
          <div class="contact-card-front-item">
            <div class="contact-card-front-item-icon"></div>
            <div class="contact-card-front-item-data"><p>+1 987 654 3210</p></div>
          </div>
          <div class="contact-card-front-item">
            <div class="contact-card-front-item-icon"></div>
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

