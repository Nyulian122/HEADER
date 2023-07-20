//  Localizar el nodo en el DOM
//  nodo: etiqueta en su archivo .html

let header1 = document.querySelector(".header");

// Almacenar en una variable del contenido que quiero agregar

let header = `
<img src="./img/descarga1.jpg">
<p>Parqueo los insanos</p>
<p>/</p>
<nav>
    <ul>
        <li>🚗//Carro</li>
        <li>🏍🛵//Moto</li>
        <li>🛴//Monopatin</li>
        <li>🚚//Pesado</li>
        <li>🚕//Taxis</li>    
    </ul>
</nav>
`;

// Agregar el contenido a la referencia del DOM

header1.innerHTML = header;


