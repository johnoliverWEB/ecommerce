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
    
      .flip-button button{
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
      
      .flip-button button:hover {
        background-color: hsl(0, 0%, 39%);
      }

      .contact-card-back{
      }

      .modal{
          background-color: hsla(0, 0%, 100%, 0.8);
          height: 100vh;
          position: fixed;
          left: 0;
          opacity: 0;
          top: 0;
          transition: all 0.2s ease-in-out;
          width: 100%;
          z-index: -1;
      }
      
      .modal.active{
          opacity: 1;
          z-index: 2000;
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
          <div class="flip-button"><button>CONTACT US</button></div>
        </div>
        <div class="modal">
          <form>
          </form>
        </div> 
      </div>
    `;

    const flipButton = this.shadow.querySelector('.flip-button');

    flipButton?.addEventListener('click', () => {
      flipButton.closest('.contact').classList.toggle('active');
    });
  };
}
customElements.define('contact-comp', contactComp);



// .contact{
//   position: relative;
// }

// .contact-map iframe{
//   border: none;
//   height: 70vh;
//   width: 100%;
// }

// .contact-card{
//   height: 45vh;
//   max-height: 45vh;
//   position: absolute;
//   top: 40%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 35%;
// }

// .contact-card .contact-card-front{
//   background-color: hsl(0, 0%, 100%);
//   display: flex;
//   height: 100%;
//   flex-direction: column;
//   justify-content: space-between;
//   position: relative;
//   width: 100%;  
//   backface-visibility: hidden;
//   padding: 3rem 2rem;
//   transform: perspective(1000px) rotateY(0deg);
//   transition: 1s;
// }

// .contact-card.active .contact-card-front{
//   transform: perspective(1000px) rotateY(180deg);
// }

// .contact-card .contact-card-back{
//   background-color: hsl(0, 0%, 100%);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: absolute;
//   top: 0;   
//   left: 0;
//   width: 100%;  
//   height: 100%;
//   padding: 3rem 2rem;
//   backface-visibility: hidden;
//   transform: perspective(1000px) rotateY(-180deg);
//   transition: 1s;
// }

// .contact-card.active .contact-card-back{
//   transform: perspective(1000px) rotateY(0deg);
// }

// .contact-card-title{
//   margin-bottom: 1rem;
// }

// .contact-card-title h2{
//   font-size: 2rem;
//   text-transform: uppercase;
// }

// .contact-card-items{
//   margin-bottom: 2rem;
// }

// .contact-card-item{
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 1rem;
//   user-select: none;
// }

// .contact-card-item-icon svg{
//   fill: hsl(207, 5%, 56%);
//   padding-top: 0.5rem;
//   width: 1.2rem;
// }

// .contact-card-item-text p{
//   font-size: 1rem;
//   line-height: 2;
// }

// .contact-card-flip-button button{
//   all: unset;
//   background-color: hsl(209, 100%, 50%);
//   color: hsl(0, 0%, 100%);
//   cursor: pointer;
//   font-family: 'Poppins', sans-serif;
//   font-size: 1.2rem;
//   font-weight: 600;
//   margin: 0 auto;
//   padding: 1.5rem 0;
//   text-transform: uppercase;
//   text-align: center;
//   width: 100%;
// }

// .contact-card-close-button{
//   position: absolute;
//   top: 0.5rem;
//   right: 0.5rem;
// }

// .contact-card-close-button svg{
//   cursor: pointer;
//   fill: hsl(205, 10%, 75%);
//   width: 1.2rem;
// }


{/* <div class="contact">
                <div class="contact-map">
                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.47386932373048%2C37.54661889462636%2C-122.32967376708986%2C37.64210198997575&amp;layer=mapnik"></iframe>
                </div>
                <div class="contact-card flip-card">
                    <div class="contact-card-front">
                        <div class="contact-card-title">
                            <h2>Get in touch</h2>
                        </div>
                        <div class="contact-card-items">
                            <div class="contact-card-item">
                                <div class="contact-card-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                                </div>
                                <div class="contact-card-item-text">
                                    <p>523 Sylvan Ave, 5th Floor<br>
                                    Mountain View, CA 94041USA</p>
                                </div>
                            </div>
                            <div class="contact-card-item">
                                <div class="contact-card-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>                                
                                </div>
                                <div class="contact-card-item-text">
                                    <p>+1 (234) 56789<br>
                                    +1 987 654 3210</p>
                                </div>
                            </div>
                            <div class="contact-card-item">
                                <div class="contact-card-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>                                
                                </div>
                                <div class="contact-card-item-text">
                                    <p>support@watchland.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="contact-card-flip-button">
                            <button class="flip-button">Contact us</button>
                        </div>
                    </div>
                    <div class="contact-card-back">
                        <div class="contact-card-close-button flip-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                        </div>
                        <div class="contact-card-form">
                            <form>
                                <div class="row">
                                    <div class="form-element">
                                        <div class="form-element-label">
                                            <label for="name"></label>
                                        </div>
                                        <div class="form-element-input">
                                            <input id="name" type="text" placeholder="name" name="name">
                                        </div>
                                    </div>
                                    <div class="form-element">
                                        <div class="form-element-label">
                                            <label for="email"></label>
                                        </div>
                                        <div class="form-element-input">
                                            <input id="email" type="email" placeholder="e-mail adress" name="email">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-element">
                                        <div class="form-element-label">
                                            <label for="subject"></label>
                                        </div>
                                        <div class="form-element-input">
                                            <input id="subject" type="text" placeholder="subject" name="subject">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-element">
                                        <div class="form-element-label">
                                            <label for="message"></label>
                                        </div>
                                        <div class="form-element-input">
                                            <textarea id="message" name="message" placeholder="message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-element-button">
                                        <button>send message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}