//  Localizar el nodo en el DOM
//  nodo: etiqueta en su archivo .html

let header1 = document.querySelector(".header");

// Almacenar en una variable del contenido que quiero agregar

let header = `
<img src="./img/descarga.jpg">
<p>Parqueo insane</p>
<p>Vehiculos disponibles:</p>
<nav>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>    
    </ul>
</nav>
`;

// Agregar el contenido a la referencia del DOM

header1.innerHTML = header;


