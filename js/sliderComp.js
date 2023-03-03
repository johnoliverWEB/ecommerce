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
        .slider{

        }
        .slider-image{

        }
        .slider-image img{

        }
        .slider-title{

        }
        .slider-subtitle{

        }
        .slider-button{

        }
        .slider-button button{

        }
        </style>
        <div class ="slider">
          <div class="slider-image">
            <img src="" alt="slider image">
          </div>
          <div class="slider-title"><h2></h2></div>
          <div class="slider-subtitle"><h3></h3></div>
          <div class="slider-button">
            <button>

            </button>
          </div>
        </div>
    	`;
    }
   
    disconnectedCallback() {
      	
    }
}
customElements.define('slider-comp', sliderComp);

