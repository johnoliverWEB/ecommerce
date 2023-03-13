import {API_URL} from "../config/config.js"

class detailsComp extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      // this.menu = this.getAttribute('menu');
      // this.menuItems = [];
    }
   
  
    connectedCallback() {

      this.render();

   
    }
   
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
    //   // una vez que los datos se han cargado correctamente, podrás acceder a ellos a través de la propiedad this.data. Por ejemplo, en el método render de tu componente, podrías utilizar estos datos para mostrarlos en la interfaz.
    // }

    render(){
      
      this.shadow.innerHTML = `
        <style>
        .details{
          padding-top: 2%;
          background: hsl(200, 100%, 99%);
          height: 70vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          width: 100%;
        }
        .details-column{
          padding: 4rem;
          width: 25%;
          margin: 0 auto;
        }
        .details-column-side1{
          padding: 5rem;
          margin-left: 10rem;
          
        }
        .details-column-side2{
          padding: 5rem;
          margin-right: 10rem;

        }
        .details-item{
          display: flex;
        }
        .details-item-icon{
          margin-top: 2.2rem;
          margin-right: 1.2rem;
        }

        .details-item-text{

        }

        .details-item-title{

        }

        .details-item-title h5{
        font-family: "Raleway", sans-serif;
        font-weight: 800;
        text-decoration: none;
        font-size: 1.3rem;
        color: hsl(173, 6%, 30%);
        }

        .details-item-description{

        }

        .details-item-description p{
          font-family: "Raleway", sans-serif;
          font-weight: 300;
          text-decoration: none;
          font-size: 1.1rem;
          color: hsl(173, 6%, 30%);

        }

        .details-image{
          display: flex;
          justify-content: center;
          margin: 0 auto;
        }
        
        </style>
        <div class="details">
          <div class="details-column-side1">
            <div class="details-item">
              <div class="details-item-icon"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 1c-4.418 0-8 3.582-8 8 0 .585.063 1.155.182 1.704l-8.182 7.296v5h6v-2h2v-2h2l3.066-2.556c.909.359 1.898.556 2.934.556 4.418 0 8-3.582 8-8s-3.582-8-8-8zm-6.362 17l3.244-2.703c.417.164 1.513.703 3.118.703 3.859 0 7-3.14 7-7s-3.141-7-7-7c-3.86 0-7 3.14-7 7 0 .853.139 1.398.283 2.062l-8.283 7.386v3.552h4v-2h2v-2h2.638zm.168-4l-.667-.745-7.139 6.402v1.343l7.806-7zm10.194-7c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm-1 0c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"/></svg></div>
              <div class="details-item-text">
                <div class="details-item-title"><h5>Fast and secure</h5></div>
                <div class="details-item-description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p></div>
              </div>
            </div>
            <div class="details-item">
              <div class="details-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 15v-10h-5.033c-2.743 0-4.967 2.239-4.967 5 0 2.762 2.224 5 4.967 5h5.033zm-8-5c0-1.654 1.331-3 2.967-3h3.033v6h-3.033c-1.636 0-2.967-1.346-2.967-3zm22-10v20c-4.839-3.008-8.836-4.491-12-5v-2.014c3.042.438 6.393 1.624 10 3.548v-13.064c-3.622 1.941-6.912 3.099-10 3.544v-2.014c3.124-.498 7.036-1.915 12-5zm-11.993 22.475c-.52-.424-.902-.994-1.095-1.637l-1.151-3.827h-6.146l1.905 5.883c.214.659.828 1.106 1.522 1.106h4.46c.358 0 .677-.225.797-.562.12-.337.015-.713-.263-.939l-.029-.024zm-4.674-.475l-.982-3h1.933l.927 3h-1.878z"/></svg></div>
              <div class="details-item-text">
                <div class="details-item-title"><h5>Voice Assistant</h5></div>
                <div class="details-item-description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p></div>
              </div>
            </div>
            <div class="details-item">
              <div class="details-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 1h-11.916l-6.084 7 12 15 12-14.917-6-7.083zm-11.667 8l3.231 7.753-6.203-7.753h2.972zm9.167 0l-3.5 8.4-3.5-8.4h7zm-6.365-2l2.865-3.438 2.865 3.438h-5.73zm8.532 2h3.028l-6.283 7.811 3.255-7.811zm2.794-2h-2.992l-3.334-4h2.938l3.388 4zm-13.465-4h2.869l-3.334 4h-3.011l3.476-4z"/></svg></div>
              <div class="details-item-text">
                <div class="details-item-title"><h5>Apps you love</h5></div>
                <div class="details-item-description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p></div>
              </div>
            </div>
          </div>
          <div class="details-column">
            <div class="details-image"><img src="imagenes/ICONS/watch.png" alt="details-image"></div>
          </div>
          <div class="details-column-side2">
            <div class="details-item">
              <div class="details-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg></div>
              <div class="details-item-text">
                <div class="details-item-title"><h5>Stay in touch</h5></div>
                <div class="details-item-description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p></div>
              </div>
            </div>
            <div class="details-item">
              <div class="details-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg></div>
              <div class="details-item-text">
                <div class="details-item-title"><h5>Designed for you</h5></div>
                <div class="details-item-description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p></div>
              </div>
            </div>
            <div class="details-item">
              <div class="details-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"/></svg></div>
              <div class="details-item-text">
                <div class="details-item-title"><h5>Precise timepiece</h5></div>
                <div class="details-item-description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p></div>
              </div>
            </div>
          </div>
        </div>
    	`;

    }

  disconnectedCallback() {
      
  }
  
}
customElements.define('details-comp', detailsComp);

