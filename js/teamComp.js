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
          width: 80%;
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
          margin: 1rem;;

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

        }
        
        .burger-menu .menu-check {
          display: none;
        }
      
        .burger-menu .menu-open {
          border: 2px solid hsl(0, 0%, 40%);
          padding: 0.5rem 1.1rem;;
          border-radius: 100%;
          position: relative;
          background: hsl(0, 0%, 40%);
          box-shadow: 1px 1px 3px;
          cursor: pointer;
          z-index: 1001;

        }
        
        .burger-menu .menu-open span {
          width: 1.5rem;
          height: 0.2rem;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -1.5px;
          margin-left: -12px;
          background-color: #fff;
          font-weight: bold;
          opacity: 1;
          transition: 0.3s;
        }
        .burger-menu .menu-open span.burger1 {
          transform: translate3d(0px, -10px, 0px);
        }
        .burger-menu .menu-open span.burger2 {
          transform: translate3d(0px, 0px, 0px);
          transition: 0.1s;
        }
        .burger-menu .menu-open span.burger3 {
          transform: translate3d(0px, 10px, 0px);
        }
        .burger-menu .menu-check:checked + .menu-open {
          background: #fff;
          border: 0;
        }
        .burger-menu .menu-check:checked + .menu-open span {
          background-color: #299309;
        }
        .burger-menu .menu-check:checked + .menu-open span.burger1 {
          transform: translate3d(0px, -10px, 0px) rotate(-45deg);
          width: 30px;
        }
        .burger-menu .menu-check:checked + .menu-open span.burger2 {
          opacity: 0;
        }
        .burger-menu .menu-check:checked + .menu-open span.burger3 {
          transform: translate3d(0px, 10px, 0px) rotate(45deg);
          width: 30px;
        }
        .burger-menu .menu-options {
          background-color: #299309;
          position: absolute;
          width: 0;
          top: 0;
          left: 0;
          padding: 80px 0px 50px;
          opacity: 0;
          transition: 0.3s;
        }
        
        .burger-menu .menu-options li {
          color: #fff;
          text-align: center;
          list-style: none;
          display: block;
          font-weight: normal;
        }
        .burger-menu .menu-options li a {
          text-decoration: none;
          color: #fff;
          line-height: 4em;
          display: block;
          transition: 0.5s;
        }
        .burger-menu .menu-options li a:hover {
          background: #65b74d;
        }
        .burger-menu .menu-options li.search {
          margin-bottom: 1em;
        }
        .burger-menu .menu-options li.search .search-box {
          width: 300px;
          height: 35px;
          font-size: 1em;
          color: #299309;
          padding: 0 15px;
          font-weight: lighter;
        }
        .burger-menu .menu-check:checked ~ .menu-options {
          width: 100%;
          opacity: 1;
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
                  <input class="menu-check" type="checkbox" name="menu-check" value="" id="menu-check">
                  <label class="menu-open" for="menu-check">
                    <span class="burger1"></span>
                    <span class="burger2"></span>
                    <span class="burger3"></span>
                  </label>

                  <ul class="menu-options">
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                    <li><a href="#">Menu 6</a></li>
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
                    <input class="menu-check" type="checkbox" name="menu-check" value="" id="menu-check">
                    <label class="menu-open" for="menu-check">
                      <span class="burger1"></span>
                      <span class="burger2"></span>
                      <span class="burger3"></span>
                    </label>

                    <ul class="menu-options">
                      <li><a href="#">Menu 1</a></li>
                      <li><a href="#">Menu 2</a></li>
                      <li><a href="#">Menu 3</a></li>
                      <li><a href="#">Menu 6</a></li>
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
                  <input class="menu-check" type="checkbox" name="menu-check" value="" id="menu-check">
                  <label class="menu-open" for="menu-check">
                    <span class="burger1"></span>
                    <span class="burger2"></span>
                    <span class="burger3"></span>
                  </label>

                  <ul class="menu-options">
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                    <li><a href="#">Menu 6</a></li>
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
                    <input class="menu-check" type="checkbox" name="menu-check" value="" id="menu-check">
                    <label class="menu-open" for="menu-check">
                      <span class="burger1"></span>
                      <span class="burger2"></span>
                      <span class="burger3"></span>
                    </label>

                    <ul class="menu-options">
                      <li><a href="#">Menu 1</a></li>
                      <li><a href="#">Menu 2</a></li>
                      <li><a href="#">Menu 3</a></li>
                      <li><a href="#">Menu 6</a></li>
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

  disconnectedCallback() {
    
  }
   
}
customElements.define('team-comp', teamComp);

