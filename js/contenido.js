//  Localizar el nodo en el DOM
//  nodo: etiqueta en su archivo .html

let contentdom = document.querySelector(".contenido");

let contenido = `
<p>Seccion del contenido</p>
`
contentdom.innerHTML = contenido;