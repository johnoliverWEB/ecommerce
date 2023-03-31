class productComp extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' })
      this.name = this.getAttribute('product-comp');
    
    }
    
    connectedCallback() {

      this.render();
    
    };

    render(){

      this.shadow.innerHTML = `
      <style>

      .product-box-image-text{
        display: flex;
        height: 50vh;
        align-items: center;
        padding: 3rem 1rem;
        margin-right: 2rem;
      }
      
      .product-box-text{
        width: 50%;

      }

      .product-box-text-title{
       
      }

      .product-box-text-edition{
     

      }

      .product-box-text-model{
        display: flex;
      }

      .product-box-text-price{
       
      }
      
      .line{
        display: block;
        background:  hsl(0, 0%, 82%);
        margin: 1.2rem auto;
        width: 100%;;
        height: 1px;
      }

      img{
        width: 100%;

      }

      .buttons{
        display: flex;
        justify-content: center;
        gap: 1rem;
        
      }
      button{
        padding: 1rem 2rem;
        cursor: pointer;
        margin-top: 2rem;
        width: 100%;
      }
      button#accept-button{
        font-family: "Raleway", sans-serif;
        color: white;
        font-weight: 800;
        font-size: 1rem;
        background: hsl(202, 100%, 50%);
        border-style: none;
      }
      button#cancel-button{
        font-family: "Raleway", sans-serif;
        font-weight: 800;
        font-size: 1rem;
        border-style: none;
      }
      h3{
        font-family: "Raleway", sans-serif;
        color: black;
        font-weight: 800;
        font-size: 1.5rem;
        margin: 0;
      }
      p {
        font-family: "Raleway", sans-serif;
        color: hsl(0deg, 0%, 63%);
        font-weight: 300;
        font-size: 1.2rem;
        text-align: left;
        margin:1rem 0;
      }
      span{
        font-family: "Raleway", sans-serif;
        color: hsl(202, 100%, 50%);
        font-weight: 800;
        font-size: 1.7rem;
        margin-left: 1rem;
      }
      h5{
        color: hsl(202, 100%, 50%);
        font-family: "Raleway", sans-serif;
        color: hsl(0deg, 0%, 63%);
        font-weight: 600;
        font-size: 1.2rem;
        margin: 0;
      }
      h6{
        font-family: "Raleway", sans-serif;
        background-color: hsl(26, 90%, 60%);
        padding: 0.4rem;
        color: white;
        width: 40%;
        text-align: center;
      }
      del{
        color: hsl(202, 100%, 50%);
        font-family: "Raleway", sans-serif;
        color: hsl(0deg, 0%, 63%);
        font-weight: 400;
        font-size: 1.4rem;
        margin: 0;
        text-decoration: line-through;
      }
      </style>
      <div class="product-box">
        <div class="product-box-image-text">
          <div class="product-box-image">
            <img src="imagenes/Product/fee_325_225_png.webp" alt="">
          </div>
          <div class= "product-box-text">
            <div class="product-box-text-title">
              <h5>SMART WATCH</h5>
            </div>
            <div class="product-box-text-edition">
              <h3>LIMITED EDITION</h3>
            </div>
            
            <div class="product-box-text-model">
              <p>MODEL AS1500</p>
            </div>
            <div class="product-box-text-price">
              <del>450€</del>
              <span>379,99€</span>
              <div class="product-box-text-offer">
                <h6>EARLY BIRD OFFER</h6>
              </div>
            </div>
            <div class="line"></div>
            <div class= "product-box-text-description">
              <p>8mm Silver Aluminum Case with Blue Sport Band. Its perfect fit for tracking fitness. 100% waterproof. Buy this limted edition sports edition.</p>
            </div>
            <div class="buttons">
              <button id="accept-button">Comprar</button>
            </div>
          </div>
        </div>
      </div>
        
      </div>
      `;
      
    }

    disconnectedCallback() {

    }
}

customElements.define('product-comp', productComp);


