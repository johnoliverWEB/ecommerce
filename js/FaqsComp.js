import {API_URL} from "../config/config.js"

class FaqsComp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {

    this.render();
  }
  
  render(){

    this.shadow.innerHTML = `
      <style>
      .faqs{
        padding-top: 3%;
        background: hsl(206, 64%, 98%);
        height: 80vh;
      }

      .faqs .faqs-title h2{
        font-family: "Raleway", sans-serif;
        font-weight: 800;
        text-decoration: none;
        font-size: 3rem;
        color: hsl(173, 9%, 20%);
        text-align: center;
      }

      .faqs .faqs-subtitle h3{
        font-family: "Raleway", sans-serif;
        font-weight: 300;
        text-decoration: none;
        font-size: 1.5rem;
        color: hsl(173, 6%, 30%);
        text-align: center;
        margin: 0 26rem;
      }

      .line{
        display: block;
        background:  hsl(0, 0%, 82%);
        margin: 2rem auto;
        width: 82px;
        height: 6px;
      }

      .faq {
        padding-top: 1rem;
        width: 75%;
        margin: 0 auto;
        background: hsl(206, 64%, 98%);
      }

      .faq label {
        display: block;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        height: 3rem;
        padding-top:0.2rem;
        border-bottom: 1px solid #E1E1E1;
      }

      .faq input[type="checkbox"] {
        display: none;
      }
      
      .faq .faq-arrow {
        width: 5px;
        height: 5px;
        transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        border-top: 2px solid hsla(0, 0%, 0%, 0.33);
        border-right: 2px solid hsla(0, 0%, 0%, 0.33);
        float: right;
        position: relative;
        top: -1.9rem;
        right: 1.6rem;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      
      .faq input[type="checkbox"]:checked + label > .faq-arrow {
        transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        transform: rotate(135deg);
      }

      .faq input[type="checkbox"]:checked + label {
        display: block;
        height: 20vh;
        transition: height 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .faq input[type='checkbox']:not(:checked) + label {
        display: block;
        transition: height 0.8s;
        height: 60px;
        -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      ::-webkit-scrollbar {
        display: none;
      }

      .faq-heading {
        font-family: "Raleway", sans-serif;
        font-weight: 800;
        font-size: 1.2rem;
        text-indent: 1.2rem;
        color: hsl(173, 9%, 20%);
      }

      .faq-text {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        width:95%;
        padding-left:1rem;
        margin-bottom:1.5rem;
        color: hsl(173, 6%, 30%);
      }

      </style>

      <div class="faqs">
        <div class="faqs-title"><h2>Boostrap 5 FAQ</h2></div>
        <div class="faqs-subtitle"><h3>A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do</h3></div>
        <div class="line"></div>
        <div class='faq'>
          <input id='faq-a' type='checkbox'>
          <label for='faq-a'>
            <p class="faq-heading">How I order?</p>
            <div class='faq-arrow'></div>
            <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget volutpat libero. Nam iaculis placerat venenatis. Proin vitae eleifend nunc, elementum iaculis sem. Vivamus sit amet rutrum ligula. Duis justo ex, convallis a neque vel, lacinia vehicula nunc. Nam ut purus id leo finibus eleifend. Mauris volutpat egestas eros, nec pretium elit tristique sit amet. Duis consectetur turpis diam, eget consequat velit euismod vel. Aenean pretium dui eu sollicitudin luctus. Mauris egestas nisi nibh, a consequat ex fermentum quis. Nam ornare massa et ante vulputate faucibus. Vivamus semper maximus augue, eget commodo lorem dictum in. Sed elit lacus, varius eget.</p>
          </label>
          <input id='faq-b' type='checkbox'>
          <label for='faq-b'>
            <p class="faq-heading">How can I make the payment?</p>
            <div class='faq-arrow'></div>
            <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget volutpat libero. Nam iaculis placerat venenatis. Proin vitae eleifend nunc, elementum iaculis sem. Vivamus sit amet rutrum ligula. Duis justo ex, convallis a neque vel, lacinia vehicula nunc. Nam ut purus id leo finibus eleifend. Mauris volutpat egestas eros, nec pretium elit tristique sit amet. Duis consectetur turpis diam, eget consequat velit euismod vel. Aenean pretium dui eu sollicitudin luctus. Mauris egestas nisi nibh, a consequat ex fermentum quis. Nam ornare massa et ante vulputate faucibus. Vivamus semper maximus augue, eget commodo lorem dictum in. Sed elit lacus, varius eget.</p>
          </label>
          <input id='faq-c' type='checkbox'>
          <label for='faq-c'>
            <p class="faq-heading">How much time does it take to recieve the order?</p>
            <div class='faq-arrow'></div>
            <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget volutpat libero. Nam iaculis placerat venenatis. Proin vitae eleifend nunc, elementum iaculis sem. Vivamus sit amet rutrum ligula. Duis justo ex, convallis a neque vel, lacinia vehicula nunc. Nam ut purus id leo finibus eleifend. Mauris volutpat egestas eros, nec pretium elit tristique sit amet. Duis consectetur turpis diam, eget consequat velit euismod vel. Aenean pretium dui eu sollicitudin luctus. Mauris egestas nisi nibh, a consequat ex fermentum quis. Nam ornare massa et ante vulputate faucibus. Vivamus semper maximus augue, eget commodo lorem dictum in. Sed elit lacus, varius eget.</p>
          </label>
          <input id='faq-d' type='checkbox'>
          <label for='faq-d'>
            <p class="faq-heading">Can I resell the products?</p>
            <div class='faq-arrow'></div>
            <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget volutpat libero. Nam iaculis placerat venenatis. Proin vitae eleifend nunc, elementum iaculis sem. Vivamus sit amet rutrum ligula. Duis justo ex, convallis a neque vel, lacinia vehicula nunc. Nam ut purus id leo finibus eleifend. Mauris volutpat egestas eros, nec pretium elit tristique sit amet. Duis consectetur turpis diam, eget consequat velit euismod vel. Aenean pretium dui eu sollicitudin luctus. Mauris egestas nisi nibh, a consequat ex fermentum quis. Nam ornare massa et ante vulputate faucibus. Vivamus semper maximus augue, eget commodo lorem dictum in. Sed elit lacus, varius eget. </p>
          </label>
          
        </div>

      </div>
    `;
  }
}
customElements.define('faqs-comp', FaqsComp);

