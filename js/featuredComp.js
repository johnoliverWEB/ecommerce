import {API_URL} from "../config/config.js"

class featuredComp extends HTMLElement {
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
      .featured{
        padding-top: 7%;
        background: hsl(202, 44%, 96%);
        height: 70vh;
      }

      .featured .featured-title{

      }

      .featured .featured-title h2{
        font-family: "Raleway", sans-serif;
        font-weight: 800;
        text-decoration: none;
        font-size: 3rem;
        color: hsl(173, 9%, 20%);
        text-align: center;
      }

      .featured .featured-subtitle{
    
      }

      .featured .featured-subtitle h3{
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

      .featured .featured-items{
        display: flex;
        padding-top: 5rem;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 80%;
      }

      .featured .featured-item{
        padding: 0 3rem;
      }

      .featured .featured-item-image{
        text-align: center;
      }

      .featured .featured-item-image svg{
        vertical-align: middle;
        overflow-clip-margin: content-box;
        overflow: clip;
        width: 35%;
      }

      .featured .featured-item-title{

      }

      .featured .featured-item-title h4{
        text-align: center;
        font-family: "Raleway", sans-serif;
        font-weight: 800;
        text-decoration: none;
        font-size: 1.5rem;
        color: hsl(173, 9%, 20%);
      }

      .featured .featured-item-description{
      }

      .featured .featured-item-description p{
        text-align: center;
        font-family: "Raleway", sans-serif;
        font-weight: 300;
        text-decoration: none;
        font-size: 1.2rem;
        color: hsl(173, 6%, 30%);
        text-align: center;
      }

      .col{
        width: 50px;
        height: 63px;
        display:block;
        background: url(https://ninetheme.com/themes/proland/wp-content/themes/proland/images/right-angle.png) no-repeat scroll center 32px;
        padding-bottom: 2rem;
      }

      </style>
      <div class="featured">
        <div class="featured-title"><h2>HOW IT WORKS</h2></div>
        <div class="featured-subtitle"><h3>Everybody loves tech gadgets, But our is different. Here is how it works. Its should be simple. Add how easy is to install your product</h3></div>
        <div class="line"></div>
        <div class="featured-items">
          <div class="featured-item">
            <div class="featured-item-image"> <svg xmlns="http://www.w3.org/2000/svg&quot; viewBox="0 0 106 106"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#eee;}.cls-3{fill:#70cbf6;}.cls-4{fill:#ffc868;}.cls-5{opacity:0.15;}.cls-6{fill:#171c1f;}.cls-7{opacity:0.1;}</style></defs><title>desktop</title><g id="Desktop"><g id="Fill"><rect class="cls-1" x="2" y="2" width="102" height="84" rx="6" ry="6"/></g><g id="Gray"><path class="cls-2" d="M63,86H43c0,16-12,18-12,18H75S63,102,63,86Z"/></g><g id="Blue"><polygon class="cls-3" points="12 12 12 56 28 56 28 18 72 18 72 12 12 12"/></g><g id="Orange"><rect class="cls-4" x="32" y="22" width="60" height="44"/></g><g id="Inner_Lines_2" data-name="Inner Lines 2" class="cls-5"><path class="cls-6" d="M74,46H54v2H74ZM62,28H54v2h8Zm8,12H54v2H70ZM46,66h2V22H46Zm8-32v2H78V34Zm0,26H76V58H54Zm0-6H78V52H54Z"/></g><g id="Inner_Lines_1" data-name="Inner Lines 1"><path class="cls-6" d="M53,76a3,3,0,1,0,3,3A3,3,0,0,0,53,76ZM98,6H8A2,2,0,0,0,6,8V74h94V8A2,2,0,0,0,98,6Zm0,66H8V8H98Z"/></g><g id="Shadows" class="cls-7"><path d="M98,70H8v2H98ZM4,82v2h98V82Zm35,20H67v-2H39Z"/></g><g id="Outline"><path class="cls-6" d="M98,0H8A8,8,0,0,0,0,8V80a8,8,0,0,0,8,8H40.88c-.4,4.29-2.15,14-9.88,14a2,2,0,1,0,0,4H75a2,2,0,1,0,0-4c-7.71,0-9.48-9.71-9.88-14H98a8,8,0,0,0,8-8V8A8,8,0,0,0,98,0ZM66.13,102H39.87c3.36-3.81,4.74-9.6,5.05-14H61.07C61.39,92.4,62.77,98.19,66.13,102ZM102,80a4,4,0,0,1-4,4H8a4,4,0,0,1-4-4V8A4,4,0,0,1,8,4H98a4,4,0,0,1,4,4Z"/></g></g></svg></div>
            <div class="featured-item-title"><h4>Connect Device</h4></div>
            <div class="featured-item-description"><p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p></div>
          </div>
          <div class="col"></div>
          <div class="featured-item">
            <div class="featured-item-image"> <svg xmlns="http://www.w3.org/2000/svg&quot; viewBox="0 0 106 106"><defs><style>.cls-8{fill:#fff;}.cls-9{fill:#43d490;}.cls-10{fill:#ff7575;}.cls-11{fill:#171c1f;}.cls-12{opacity:0.1;}</style></defs><title>toggles</title><g id="Toggles"><g id="Fill"><rect class="cls-8" x="6" y="6" width="94" height="94" rx="6" ry="6"/></g><g id="Green"><path class="cls-9" d="M81,73H21a4,4,0,1,0,0,8H81a4,4,0,1,0,0-8ZM21,33H81a4,4,0,0,0,0-8H21a4,4,0,0,0,0,8Z"/></g><g id="Red"><path class="cls-10" d="M85,49H25a4,4,0,0,0,0,8H85a4,4,0,0,0,0-8Z"/></g><g id="White"><path class="cls-11" d="M26,21a8,8,0,1,0,8,8A8,8,0,0,0,26,21Zm0,48a8,8,0,1,0,8,8A8,8,0,0,0,26,69ZM80,45a8,8,0,1,0,8,8A8,8,0,0,0,80,45Z"/></g><g id="Inner_Lines_1" data-name="Inner Lines 1"><path class="cls-12" d="M80,43a10,10,0,0,0-8.65,5H25a5,5,0,0,0,0,10H71.35A10,10,0,1,0,80,43ZM70.46,56H25a3,3,0,1,1,0-6H70.46a10,10,0,0,0,0,6ZM80,61a8,8,0,1,1,8-8A8,8,0,0,1,80,61ZM26,39a10,10,0,0,0,8.65-5H81a5,5,0,0,0,0-10H34.65A10,10,0,1,0,26,39Zm9.54-13H81a3,3,0,1,1,0,6H35.54a10,10,0,0,0,0-6ZM26,21a8,8,0,1,1-8,8A8,8,0,0,1,26,21ZM81,72H34.65a10,10,0,0,0-.7-1l0,0a10,10,0,0,0-1.76-1.78l-.1-.07a10,10,0,0,0-.9-.61L31,68.34a9.93,9.93,0,0,0-2.21-.94l-.3-.08q-.44-.11-.9-.19l-.34-.05a10,10,0,1,0,0,19.83l.34-.05q.46-.07.9-.19l.3-.08A9.93,9.93,0,0,0,31,85.66l.18-.11a10,10,0,0,0,.9-.61l.1-.07a10,10,0,0,0,1.76-1.78l0,0a10,10,0,0,0,.7-1H81a5,5,0,0,0,0-10ZM26,85a8,8,0,1,1,8-8A8,8,0,0,1,26,85Zm55-5H35.54a10,10,0,0,0,.31-1.31c0-.1,0-.21,0-.31a9,9,0,0,0,0-2.75c0-.1,0-.21,0-.31A10,10,0,0,0,35.54,74H81a3,3,0,1,1,0,6Z"/></g><g id="Shadows" class="cls-12"><path d="M80,59a8,8,0,0,1-7.93-7,8,8,0,1,0,15.86,0A8,8,0,0,1,80,59ZM26,83a8,8,0,0,1-7.93-7,8,8,0,1,0,15.86,0A8,8,0,0,1,26,83ZM80,63a10,10,0,0,1-9.95-9c0,.33-.05.66-.05,1a10,10,0,0,0,.46,3H25a5,5,0,0,1-4.9-4A5,5,0,0,0,25,60H71.35A10,10,0,0,0,90,55c0-.34,0-.67-.05-1A10,10,0,0,1,80,63ZM26,89a10,10,0,0,0,8.65-5H81a5,5,0,0,0,4.9-6A5,5,0,0,1,81,82H35.54A10,10,0,0,0,36,79c0-.34,0-.67-.05-1a9.92,9.92,0,0,1-1.31,4,10,10,0,0,1-18.59-4c0,.33-.05.66-.05,1A10,10,0,0,0,26,89Zm68,7H12a4,4,0,0,1-4-4v2a4,4,0,0,0,4,4H94a4,4,0,0,0,4-4V92A4,4,0,0,1,94,96ZM26,41a10,10,0,0,0,8.65-5H81a5,5,0,0,0,4.9-6A5,5,0,0,1,81,34H35.54A10,10,0,0,0,36,31c0-.34,0-.67-.05-1a9.93,9.93,0,0,1-1.31,4,10,10,0,0,1-18.59-4c0,.33-.05.66-.05,1A10,10,0,0,0,26,41Zm0-4a8,8,0,0,0,7.93-9,8,8,0,0,1-15.86,0A8,8,0,0,0,26,37Z"/></g><g id="Outline"><path class="cls-11" d="M94,4H12a8,8,0,0,0-8,8V94a8,8,0,0,0,8,8H94a8,8,0,0,0,8-8V12A8,8,0,0,0,94,4Zm4,90a4,4,0,0,1-4,4H12a4,4,0,0,1-4-4V12a4,4,0,0,1,4-4H94a4,4,0,0,1,4,4Z"/></g></g></svg></div>
            <div class="featured-item-title"><h4>Configure it</h4></div>
            <div class="featured-item-description"><p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p></div>
          </div>
          <div class="col"></div>
          <div class="featured-item">
            <div class="featured-item-image"> <svg xmlns="http://www.w3.org/2000/svg&quot; viewBox="0 0 106 106"><defs><style>.cls-13{fill:#ffc868;}.cls-14{fill:#ff8f59;}.cls-15{fill:#fff;}.cls-16{fill:#171c1f;}.cls-17{opacity:0.1;}</style></defs><title>trophy</title><g id="Trophy"><g id="Fill"><path class="cls-13" d="M82,2.11A3.9,3.9,0,0,0,81,2H25a3.91,3.91,0,0,0-1,.11,4,4,0,0,0-2.89,4.63l0,.14,0,.13,0,.09L35.77,57.15a18,18,0,0,0,34.45,0L84.8,7.11l0-.1,0-.13,0-.13A4,4,0,0,0,82,2.11Z"/></g><g id="Orange"><path class="cls-14" d="M35.77,57.15,33.13,48.1a35,35,0,0,1-16.7-24.63A6,6,0,0,0,19.63,20h5.32l-2.33-8H14a6,6,0,0,0-6,6A43,43,0,0,0,36.19,58.38C36,58,35.89,57.57,35.77,57.15ZM69,92H37a6,6,0,0,0,0,12H69a6,6,0,0,0,0-12ZM92,12H83.37L81,20h5.32a6,6,0,0,0,3.21,3.47A35,35,0,0,1,72.86,48.1l-2.64,9.07c-.12.41-.27.82-.42,1.22A43,43,0,0,0,98,18,6,6,0,0,0,92,12Z"/></g><g id="White"><path class="cls-15" d="M57,84V70H49V84H43v8H63V84ZM47.17,30.85l-.89,5.43a1.48,1.48,0,0,0,2.17,1.53L53,35.3l4.54,2.51a1.48,1.48,0,0,0,2.17-1.53l-.89-5.43L62.58,27a1.48,1.48,0,0,0-.83-2.49l-5.13-.79-2.28-4.87a1.48,1.48,0,0,0-2.67,0l-2.28,4.87-5.13.79A1.48,1.48,0,0,0,43.41,27Z"/></g><g id="Inner_Lines" data-name="Inner Lines"><path class="cls-16" d="M21,8v2H85V8ZM61.91,23.52l-4.6-.7-2.06-4.39a2.48,2.48,0,0,0-4.49,0l-2.06,4.39-4.6.7a2.48,2.48,0,0,0-1.4,4.18l3.41,3.5-.8,4.93A2.48,2.48,0,0,0,49,38.69L53,36.44l4.05,2.24a2.48,2.48,0,0,0,3.64-2.56l-.8-4.93,3.41-3.5a2.48,2.48,0,0,0-1.4-4.18Zm0,2.78-3.94,4a.48.48,0,0,0-.13.41l.93,5.69a.47.47,0,0,1-.7.49l-4.79-2.65a.47.47,0,0,0-.46,0L48,36.94a.47.47,0,0,1-.7-.49l.93-5.69a.48.48,0,0,0-.13-.41l-3.94-4a.48.48,0,0,1,.27-.8l5.41-.83a.48.48,0,0,0,.36-.27l2.4-5.12a.48.48,0,0,1,.86,0l2.4,5.12a.48.48,0,0,0,.36.27l5.41.83A.48.48,0,0,1,61.88,26.3Z"/></g><g id="Shadows" class="cls-17"><path d="M23.08,6.56l14.59,50a16,16,0,0,0,30.65,0l14.59-50L83,6.38a2,2,0,0,0-.2-1.32L68.33,54.6a16,16,0,0,1-30.65,0L23.23,5.07A2,2,0,0,0,23,6.38ZM51,80v2h4V80ZM45.56,34.62l.56-3.43L43,28a2.45,2.45,0,0,0-.29,3.7Zm17.75-2.92A2.45,2.45,0,0,0,63,28l-3.11,3.2.56,3.43ZM45.68,37.85l-.37,2.27A2.48,2.48,0,0,0,49,42.69L53,40.44l4.05,2.24a2.48,2.48,0,0,0,3.64-2.56l-.37-2.27a2.44,2.44,0,0,1-.19.27,2.47,2.47,0,0,1-3.09.56L53,36.44,49,38.69a2.47,2.47,0,0,1-3.09-.56A2.43,2.43,0,0,1,45.68,37.85ZM45,90H61V88H45ZM17,12l2.35,8H23.5l-2.35-8ZM71.39,57.76c1.24-.51,3.45-2.08,4.63-2.7l3.6-12.24A56.78,56.78,0,0,1,74.55,47ZM84.85,12,82.5,20h4.13L89,12ZM31.45,47a56.77,56.77,0,0,1-5.07-4.21L30,55.06c1.18.62,3.39,2.19,4.63,2.7ZM69,100H37a4,4,0,0,1-3.86-3A4,4,0,0,0,37,102H69a4,4,0,0,0,3.86-5A4,4,0,0,1,69,100Z"/></g><g id="Outline"><path class="cls-16" d="M71.38,59.85A45,45,0,0,0,100,18a8,8,0,0,0-8-8H86.08l.67-2.31s0-.09.05-.14A6,6,0,0,0,82.56.2,5.89,5.89,0,0,0,81,0h0V0H25V0h0A5.89,5.89,0,0,0,23.44.2a6,6,0,0,0-4.24,7.35s0,.09.05.14L19.92,10H14a8,8,0,0,0-8,8A45,45,0,0,0,34.62,59.86,20,20,0,0,0,47,71.07V82H45a4,4,0,0,0-4,4v4H37a8,8,0,0,0,0,16H69a8,8,0,0,0,0-16H65V86a4,4,0,0,0-4-4H59V71.07A20,20,0,0,0,71.38,59.85ZM84.91,14H92a4,4,0,0,1,4,4A40.93,40.93,0,0,1,73,54.75l1.58-5.43A36.93,36.93,0,0,0,92,18H83.75ZM76.47,43l6.12-21H87.7A32.88,32.88,0,0,1,76.47,43ZM10,18a4,4,0,0,1,4-4h7.09l1.17,4H14A36.93,36.93,0,0,0,31.39,49.34L33,54.76A40.93,40.93,0,0,1,10,18Zm13.42,4,6.13,21A32.88,32.88,0,0,1,18.26,22ZM69,94a4,4,0,0,1,0,8H37a4,4,0,0,1,0-8Zm-8-8v4H45V86ZM51,82V71.89c.66.07,1.32.11,2,.11s1.34,0,2-.11V82Zm2-14A16.1,16.1,0,0,1,37.67,56.6l-14.59-50L23,6.38a2,2,0,0,1,1.45-2.31A2.19,2.19,0,0,1,25,4H81a2.13,2.13,0,0,1,.5,0A2,2,0,0,1,83,6.38l-.06.19-14.59,50A16.1,16.1,0,0,1,53,68Z"/></g></g></svg></div>
            <div class="featured-item-title"><h4>Yay! Done.</h4></div>
            <div class="featured-item-description"><p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p></div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('featured-comp', featuredComp);

