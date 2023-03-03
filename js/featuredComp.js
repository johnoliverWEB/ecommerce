import {API_URL} from "../config/config.js"

class featuredComp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    // this.menu = this.getAttribute('menu');
    // this.menuItems = [];
  }

  connectedCallback() {

  }
  
  render(){

    this.shadow.innerHTML = `
      <style>
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
      .featured{

      }
      .featured-title{

      }
      .featured-subtitle{

      }
      .featured-items{

      }
      .featured-item{

      }
      .featured-item-image{

      }
      .featured-item-title{

      }
      .featured-item-description{

      }
      </style>
      <div class="featured">
        <div class="featured-title"><h2></h2></div>
        <div class="featured-subtitle"><h3></h3></div>
        <div class="featured-items">
          <div class="featured-item">
            <div class="featured-item-image"></div>
            <div class="featured-item-title"></div>
            <div class="featured-item-description"></div>
          </div>
          <div class="featured-item">
            <div class="featured-item-image"></div>
            <div class="featured-item-title"></div>
            <div class="featured-item-description"></div>
          </div>
          <div class="featured-item">
            <div class="featured-item-image"></div>
            <div class="featured-item-title"></div>
            <div class="featured-item-description"></div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('featured-comp', featuredComp);

