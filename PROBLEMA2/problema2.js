const boton = document.querySelector('button'); /* esto es para que sea interactivo y al presionar el boton cambie */
const color = document.getElementById('color'); /* estamos seleccionando los elementos que hicimos en html (dom) */


function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF';    /* AQUI TENEMOS 16 POSIBLES COLORES */
    let colorHex = '#';
    /* NOS VA A PERMITIR ESCOGER UNO DE LOS DIGITOS DE FORMA ALEATORIA PARRA FORMAR LOS COLORES */
    for(let i = 0; i<6; i++ ){
        let indiceAleatorio = Math.floor(Math.random() * 16); /* hara que el numero retorne y floor permite que se redondee el numero */
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}

/* ahora tenemos que asociar la funcion (generarColorHexAleatorio) */

boton.addEventListener('click', function() {
    let colorAleatorio = generarColorHexAleatorio();
    color.textContent = colorAleatorio; /* esto es para actualizar el texto */
    document.body.style.backgroundColor = colorAleatorio;  /* estamos accediendo a las propiedades de body para actualizar el color de fondo */
});