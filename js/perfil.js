// js/index.js
//import { obj } from '../reto3/25129892/perfil.js';
console.log("js*****")
//const jsonPath = new URL("../data.json", import.meta.url);

document.addEventListener("DOMContentLoaded", () => {
    fetch('../reto3/25129892/perfil.json')
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
        const nameElement = document.getElementById("name_");
        nameElement.textContent = data.nombre
        const desElement = document.getElementById("descp");
        desElement.textContent = data.descripcion
        const colorElement = document.getElementById("color");
        colorElement.textContent = data.color
        const librElement = document.getElementById("libr");
        librElement.textContent = data.libro[0]
        const musicElement = document.getElementById("music");
        musicElement.textContent = data.musica[0]
        const jugoElement = document.getElementById("jugo");
        jugoElement.textContent = data.video_juego[0]
        const  lengElement = document.getElementById("leng");
        let lenguajesTexto = "";
        for (let i = 0; i < data.lenguajes.length; i++) {
            lenguajesTexto += data.lenguajes[i] +',';  // Añadimos cada lenguaje con un salto de línea
        }
        lengElement.innerHTML = lenguajesTexto; 

        const email_Element = document.getElementById("email_");
        email_Element.textContent = data.email
        //document.getElementById('titulo').textContent = data.perfiles[0]['ci'];
        //document.getElementById('mensaje').textContent = data.mensaje;
      })
      .catch(error => {
        console.error('Error al leer el JSON:', error);
      });
  });
  