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
        
        const lista = document.getElementById("lista");

        // Agregar cada elemento del array como un li
        data.forEach(data => {
            const li = document.createElement("li");
            li.classList.add("card");
            li.innerHTML = `
            <img class="img" src="../reto3/${data.imagen}" alt="${data.nombre}">
            <p>${data.nombre}</p>
            `;
            lista.appendChild(li);
        });
        //document.getElementById('titulo').textContent = data.perfiles[0]['ci'];
        //document.getElementById('mensaje').textContent = data.mensaje;
      })
      .catch(error => {
        console.error('Error al leer el JSON:', error);
      });
  });
  