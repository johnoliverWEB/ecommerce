import {API_URL} from "../config/config.js"

class teamComp extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      // this.menu = this.getAttribute('menu');
      // this.menuItems = [];
    }

    connectedCallback() {

      this.render();
    
      };
  
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
     
    // }

    render(){
      
   
      this.shadow.innerHTML = `
        <style>
        .team{
          padding-top: 2%;
          background: hsl(202, 44%, 96%);
          height: 80vh;
        }

        .team-title{

        }

        .team-title h2{
          font-family: "Raleway", sans-serif;
          font-weight: 800;
          text-decoration: none;
          font-size: 3rem;
          color: hsl(173, 9%, 20%);
          text-align: center;

        }
        .team-subtitle{

        }

        .team-subtitle h3{
          font-family: "Raleway", sans-serif;
          font-weight: 300;
          text-decoration: none;
          font-size: 1.5rem;
          color: hsl(173, 6%, 30%);
          text-align: center;

        }

        .line{
          display: block;
          background:  hsl(0, 0%, 82%);
          margin: 0 auto;
          width: 82px;
          height: 6px;
        }

        .team-members{
          padding-top: 3rem;
          display: flex;
          justify-content: space-between;
          margin: 2rem auto;
          width: 70%;
        }
        .team-member{
 

        }

        .team-member-image{
          position: relative;
        }

        .team-member-name{
        }

        .team-member-name h5{
          font-family: "Raleway", sans-serif;
          font-weight: 800;
          text-decoration: none;
          font-size: 1.2rem;
          color: hsl(173, 6%, 30%);
          text-align: center;
          margin: 1rem;
        }

        .team-member-position{

        }

        .team-member-position p{
          font-family: "Raleway", sans-serif;
          font-weight: 300;
          text-decoration: none;
          font-size: 1.1rem;
          color: hsl(173, 6%, 30%);
          text-align: center;
          margin: 0;
        }

        .team-member-social-networks{
          z-index: 1001;
          margin-left: 13rem;
          margin-top: 1.5rem;
          position: absolute;
        }

        .burger-menu {
          background: grey;
          width: 2rem;
          height: 2rem;
          border-radius: 4em;
          margin: 0 auto;

        }

        .burger-menu active{
          background: hsl(0, 0%, 20%);
          width: 2rem;
          height: 10rem;
          border-radius: 4em;
          margin: 0 auto;

        }
      
        .menu-burguer{
          width: 1rem;
          height: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          padding-top: 0.5rem;
          margin-left: 0.5rem;
        }

        .menu-line {
          height: 0.2rem;
          background-color: #fff;
          border-radius: 3px;
          transition: all 250ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
        }
        
        .menu-line:first-child {
          animation: firstLinetoClose 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
        }
        
        .open .menu-line:first-child {
          animation: firstLinetoOpen 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
          animation-fill-mode: forwards;
        }
        
        @keyframes firstLinetoOpen {
          0%   {
            transform: translateY(0);
          }
        
          50% { 
            transform: translateY(12px);
          }
        
          100% {
            transform: translateY(17px) rotate(45deg);
          }
        }
        
        @keyframes firstLinetoClose {
          0%   {
            transform: translateY(17px) rotate(0);
          }
        
          100% {
            transform: translateY(0);
          }
        }
        
        .open .menu-line:nth-child(2){
          opacity: 0;
        }
        
        .menu-line:last-child {
          animation: lastLinetoClose 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);  
        }
        
        .open .menu-line:last-child {
          animation: lastLinetoOpen 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
          animation-fill-mode: forwards;
        }
        
        @keyframes lastLinetoOpen {
          0%   {
            transform: translateY(0);
          }
        
          50% {
            transform: translateY(-12px);
          }
        
          100% {
            transform: translateY(-17px) rotate(-45deg);
          }
        }
        
        @keyframes lastLinetoClose {
          0%   {
            transform: translateY(-17px);
          }
        
          100% {
            transform: translateY(0);
          }
        }.

        .burger-menu .menu-check:checked + .menu-open {
          background-color: hsl(0, 0%, 18%);
          border: 0;
        }
        .burger-menu .menu-check:checked + .menu-open span {
          background-color: hsl(0, 0%, 18%);
        }
        .burger-menu .menu-options {
          z-index:1001;
          background-color: hsl(0, 0%, 18%);
          position: absolute;
          top: 0;
          left: 0;
          padding: 20px 0px 10px;
          opacity: 0;
          transition: 0.3s;
          list-style: none;
          height: 10vh;
          border-radius: 0 0 2rem 2rem;
        }
        .burger-menu .menu-check:checked ~ .menu-options {
          width: 100%;
          opacity: 1;
        }
        .menu-options a{
          fill: white;
          width: 40%;
          margin-left: 0.8rem;
        }

        </style>
        <div class="team">
          <div class="team-title"><h2>MEET THE TEAM</h2></div>
          <div class="team-subtitle"><h3>We are a small group of inverntors, hackers and designers from the differrent parts of the world on a mission.</h3></div>
          <div class="line"></div>
          <div class="team-members">
            <div class="team-member">
              <div class="team-member-social-networks">
                <nav class="burger-menu">
                  <div class="menu-burguer">
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                  </div>
                  <ul class="menu-options">
                    <li>
                      <a href="https://www.facebook.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>youtube</title><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="team-member-image"><img src="imagenes/TEAM/team-1.jpg" alt="team-img"></div>
              <div class="team-member-name"><h5>Gary Elliot</h5></div>
              <div class="team-member-position"><p>Co-Founder and CEO</p></div>
            </div>
            <div class="team-member">
              <div class="team-member-social-networks">
                <nav class="burger-menu">
                  <div class="menu-burguer">
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                  </div>
                  <ul class="menu-options">
                    <li>
                      <a href="https://www.facebook.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>youtube</title><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="team-member-image"><img src="imagenes/TEAM/team-2.jpg" alt="team-img"></div>
              <div class="team-member-name"><h5>Jeffrey Allen</h5></div>
              <div class="team-member-position"><p>Co-Founder and CTO</p></div>
            </div>
            <div class="team-member">
              <div class="team-member-social-networks">
                <nav class="burger-menu">
                  <div class="menu-burguer">
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                  </div>
                  <ul class="menu-options">
                    <li>
                      <a href="https://www.facebook.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>youtube</title><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="team-member-image"><img src="imagenes/TEAM/team-3.jpg" alt="team-img"></div>
              <div class="team-member-name"><h5>Sara Mendez</h5></div>
              <div class="team-member-position"><p>Lead Developer, Hacker</p></div>
            </div>
            <div class="team-member">
              <div class="team-member-social-networks">
                <nav class="burger-menu">
                  <div class="menu-burguer">
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                  </div>
                  <ul class="menu-options">
                    <li>
                      <a href="https://www.facebook.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>twitter</title><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>youtube</title><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="team-member-image"><img src="imagenes/TEAM/team-4.jpg" alt="team-img"></div>
              <div class="team-member-name"><h5>Alberto Castro</h5></div>
              <div class="team-member-position"><p>3D Designer & Prototyper</p></div>
            </div>
          </div>
        </div>
    	`;

    }


    // var iconMenu = document.querySelector('.menu-burguer');

    // iconMenu.addEventListener('click', function() {
    //   if (iconMenu.classList.contains('open')) {
    //     iconMenu.classList.remove('open');
    //   } else {
    //     iconMenu.classList.add('open');
    //   }
    // }, false);

  disconnectedCallback() {
    
  }
   
}
customElements.define('team-comp', teamComp);

