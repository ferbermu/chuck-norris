document.addEventListener("DOMContentLoaded",function() {

const BotonChiste = document.getElementById('BotonChiste');
const Contenedorchiste = document.getElementById('Contenedorchiste');

// Función para obtener una broma de Chuck Norris
function getChuckNorrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            Contenedorchiste.textContent = data.value;
        })
        .catch(error => {
            console.error('Error al obtener la broma:', error);
        });
}

// Agregar un evento de clic al botón
BotonChiste.addEventListener('click', getChuckNorrisJoke);
});