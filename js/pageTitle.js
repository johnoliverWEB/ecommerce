class PageTitle extends HTMLElement {
    // Siempre es igual, pones un nombre. en este caso, PageTitle. Extiendes de HTMLElement. Se abren llaves. Y debajo customElements y define.

    // Tienes una clase que tiene un constructor, propiedades y métodos. El constructor arranca nada más arrancar el web component.
    // Las propiedades son variables que puedes usar dentro de los métodos del propio objeto.
    // Los métodos son funciones que puedes llamar dentro del objeto.
    // HTMLElement es un objeto que trae el propio JavaScript, se emplea siempre. Igual que el HTML tiene palabras predefinidas, aquí te inventas una palabra nueva. Para poder aprovechar las posibilidades de un elemento HTML (atributos, clase) tenemos que tirar de esta clase.
    // En Javascript, HTMLElement es una interfaz que representa cualquier elemento HTML en una página web. Puede ser accedido a través de la propiedad HTMLElement del objeto window, o mediante la creación de una nueva instancia de un elemento específico usando el constructor del elemento, como por ejemplo document.createElement("p").
    // Los elementos HTML en una página web son accedidos y manipulados a través del DOM (Document Object Model) en JavaScript. Puedes usar métodos como getElementById(), etc.
    
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        // Estas dos líneas superiores SIEMPRE van a estar. El constructor arranca en cuanto el navegador renderiza el elemento HTML. 
        // Así pues, siempre pondremos super (significa trae todos los métodos y propiedades del padre de esta clase, esto es, HTMLElement) en primer lugar.
        // Y después, declarar la propiedad this.shadow (o shadowRoot), implica en este caso llamar a la función this.attachShadow que viene del padre (HTMLElement)
        // this.attachShadow implica crear un shadowDom, proporciona una forma de aislar los estilos y comportamientos de los componentes web personalizados de los elementos y estilos existentes en la página.
        // Shadow DOM permite generar un DOM aislado del resto del código, proporcionandoi la posibilidad de que si peta el Javascript no salga del DOM. Otra opción es que todos los estilos que apliques a los elementos HTML que están en el DOM solo se aplican a los que están en el DOM, sin que afecte a otros externos aunque tengan el mismo nombre.
        // Aquí básicamente dices que en la propiedad this.shadow esté el shadow DOM, al HTML y CSS que se aplicará cuando el navegador pase por este componente.

        this.title = this.getAttribute('title');
        // Damos valor a las propiedades que no van a paralizar mucho el flujo del programa.
        // Sirve para cazar el atributo title del HTML.
    }

    static get observedAttributes() { return ['title']; }
    // Esto es para que permanezca atento al atributo especificado si se modifica

    connectedCallback() {
        // Método nativo que arranca en cuanto el navegador encuentra o renderiza el componente. Así como el constructor se activa cuando se encuentra el elemento y carga el objeto o clase, lo siguiente cuando va a renderizar el HTML es cargar el connectedCallback
        // Es aquí donde se metería todo lo que tenga que tener cierta carga de computación. Cosas sencillas en el constructor.
        // Aquí se ponen los eventlisteners de custom y arrancar el this.render o el HTML
        document.addEventListener("newUrl",( event =>{
            // Mediante este evento, si utilizas la palabra newURL otro evento deberá emitir esta palabra para que sea cazado y actualizar el atributo título.
            // Así, coges el valor de un atributo
            this.setAttribute('title', event.detail.title);
            // Esto es para cambiar el valor del atributo (set atribute). Con esto haces que los títulos de una página o sección cambien al seleccionar sus menús correspondientes.
            // Cuando tu toques un click de menú emitirás un evento (newUrl) y este evento estará siendo escuchado por Pagetitle, tabla y Form. De tal forma que cuando presiones a un nuevo menú, menú escuche esa acción y al entrar en ese nuevo menú cada componente hará una llamada fetch (menos PageTitle) cogiendo los datos que necesitan para actualizarse, cambiando tabla, título y formulario.
            // Así empleas el mismo HTML pero el JavaScript hará que el contenido y el formato cambien, para que los datos sean remitidos a la tabla correspondiente.
        }));

        this.render();
        // This render es una propiedad. Esto significa que llamas a una función de la propia clase. Cuando se renderice el componente, arranca el constructor y después esta función.
        // render mete dentro de this.shadow todo el código html que contiene.
        // this.shadow es el shadow DOM, crear un html y CSS dentro del HTML pero con características especiales como estar aislado del resto del código, de modo que el CSS de afuera no afecte a este código y viceversa.

    }

    attributeChangedCallback(name, oldValue, newValue){
        // Arranca cuando cambie un atributo
        // Los parámetros introducidos, nos dicen el nombre del atributo que ha cambiado, el valor anterior y el valor nuevo.
        // Esto da cierta flexibilidad porque permite mucho margen (puedes pedir con if que si cambia un atributo actúe de una manera y si cambia otro de otra distinta)
        this.render();
        // Este componente normalmente sirve apra que se vuelva a renderizar el HTML
    }

    render() {
        // Función donde se renderiza el HTML8

        this.shadow.innerHTML = 
        `
        <style>
            h1{
                color: hsl(0, 0%, 100%);
                font-family: 'Raleway', sans-serif;
                font-size: 2.5rem;
                font-weight: 300;
                text-decoration: none;
                padding: 1rem 0;
                margin-bottom: 3rem;  
            }
        </style>


        <h1 class="title">
            Panel de administración de ${this.title}
        </h1>        
        `;	
        // Si pones estas comass puedes combinar código con variables dentro del string ($)
        // this.title está definido en el constructor (3 línea) 
    }
}
// Hay otra función no incluida aquí que es disconectedCallback que es cuando eliminas el componente o lo desconectas.
// El nombre de los customElements debe contener siempre al menos un guión. Normalmente nombre(guión)component. No se pueden utilizar números ni carácteres especiales y todo debe estar en minúscula.
// Para que aparezca el componente, en el HTML metes algo rollo <page-title-component title="Clientes"></page-title-components>
customElements.define('page-title-component', PageTitle);
