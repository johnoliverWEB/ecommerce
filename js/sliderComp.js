import {API_URL} from "../config/config.js"

class sliderComp extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      // this.menu = this.getAttribute('menu');
      // this.menuItems = [];
    }
    
    connectedCallback() {

     this.render();
     
    };

    render(){

      this.shadow.innerHTML = `
        <style>

        .slider {
          height: 90vh;
          max-height: 100vh;
          margin-bottom: 5rem;
          position: relative;
        }

        .slider .slider-image {
          position: absolute;
          display: flex;
          width: 100%;
          z-index: 1000;
        }

        img{
          width: 100%;
        }

        .slider .slider-title {
          left: 0;
          right: 0;
          position: absolute;
          z-index: 1001;
        }

        .slider .slider-title h2 {
          font-family: "Raleway", sans-serif;
          font-weight: 800;
          text-decoration: none;
          font-size: 5rem;
          color: hsl(173, 9%, 20%);
          text-align: center;
        }
        .slider .slider-subtitle {
          left: 20%;
          right: 20%;
          position: absolute;
          z-index: 1001;
          padding-top: 9rem;
        }
        .slider .slider-subtitle h3{
          font-family: "Raleway", sans-serif;
          font-weight: 300;
          text-decoration: none;
          font-size: 2rem;
          color: hsl(173, 6%, 30%);
          text-align: center;
        }
        .slider .slider-button button{
          all: unset;
          position: absolute;
          z-index: 1001;
          height: 3rem;
          top: 38%;
          left: 40%;
          right: 40%;
          align-items: center;
          text-align: center;
          color: white;
          font-family: "Raleway", sans-serif;
          font-weight: 600;
          border-radius: 2rem;
          font-size: 1.6rem;
          background-color: hsl(209, 100%, 50%);
          cursor: pointer;
          padding: 0.5rem 1.5rem;
        }
        .slider-button button:hover{
          background-color: hsl(0, 0%, 39%);
        }
        </style>
        <div class ="slider">
          <div class="slider-image">
            <img src="imagenes/SLIDER2/home.jpg" alt="slider-image">
          </div>
          <div class="slider-title"><h2>The future of tech is here</h2></div>
          <div class="slider-subtitle"><h3>Holisticly incentivize revolutionary collaboration and idea sharing before cost effective users. Actual focused services before highly efficient human capital.</h3></div>
          <div class="slider-button">
            <button>BUY WITH PAYPAL</button>
          </div>
        </div>
    	`;
    }
   
    disconnectedCallback() {
      	
    }
}
customElements.define('slider-comp', sliderComp);

