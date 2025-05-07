// js/index.js
console.log("js*****")
//const jsonPath = new URL("../data.json", import.meta.url);

document.addEventListener("DOMContentLoaded", () => {
    fetch('../reto3/datos/index.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        //console.log("****", response.json())
        return response.json();
      })
      .then(data => {
        // Asignar valores del JSON al HTML
        console.log(data)
        //document.getElementById('titulo').textContent = data.perfiles[0]['ci'];
        //document.getElementById('mensaje').textContent = data.mensaje;
      })
      .catch(error => {
        console.error('Error al leer el JSON:', error);
      });
  });
  