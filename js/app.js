const url = "https://api.adviceslip.com/advice"; //ruta de la api
const number = document.querySelector(".container__title--number"); //ubicacion del id en el html
const btn = document.querySelector(".container__circle");// el bon en el html
const advice = document.querySelector(".container__text");//ubicación del consejo en el html

function show(x, y) { //funcion que pinta en el DOM
  number.innerHTML = `#${x}`; //Pintal el id del consejo con el #
  advice.innerHTML = `"${y}"`; //pinta el consejo co las comillas
}


btn.addEventListener("click", () => { //Colocando el evento al boton actualiza el consejo
  
  fetch(url, {cache: 'no-store'})// Haciendo la peticion co el fech
    .then((response) => response.json()) //transformando la respuesta a un json
    .then((data) => {
      show(data.slip.id, data.slip.advice);// pasandole los argumentos a la funcion show 
    });
});
