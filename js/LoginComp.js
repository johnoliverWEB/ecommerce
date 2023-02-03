class LoginComp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
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
    .login-header {
      margin-bottom: 3rem;
    }
    
    .login-form {
      padding: 10%;
      margin: 0 30%;
    }
    </style>
    <form class="login-form">
      <div class="form-element">  
        <h2 class="login-header"> Iniciar sesión</h2>
        <div class="form-element-label"><label>Email</label></div>
        <div class="form-element-input"><input name="email" id="email" type="text" data-validate="email"></div>
      </div>
      <div class="form-element">  
        <div class="form-element-label"><label>Contraseña</label></div>
        <div class="form-element-input"><input name="password" id="password" type="password" data-validate="password"></div>
      </div>
      <div class="contact-form-button"> 
        <button class="custom-button send-login-button">Entrar</button>
      </div>
    </form>
    `;
    this.shadow.querySelector(".send-login-button").addEventListener("click", (event) => {
      
      event.preventDefault();

      let form = this.shadow.querySelector('form');
      let formData = new FormData(form);
      let formDataJson = Object.fromEntries(formData.entries());

      fetch('http://127.0.0.1:8080/api/auth/users/signin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataJson)
      }).then(response => {
          return response.json();
      }).then(data => {
          sessionStorage.setItem('accessToken', data.accessToken);
          window.location.href = "admin.html";
      }).catch(error => {
          console.log(error);
      });
    });
  }
}

customElements.define('login-comp', LoginComp);
