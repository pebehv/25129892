// js/index.js
console.log("js*****")
//const jsonPath = new URL("../data.json", import.meta.url);

document.addEventListener("DOMContentLoaded", () => {
    getLenguaje();
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
  

  function getLenguaje(){
    console.log("get lengujae")
      
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const params = new URLSearchParams(url.search);
    let paramsLang = params.get('lang')
    let lang = 'configES.json'
    if(paramsLang == 'en'){
      lang = 'configEN.json'
    } else if(paramsLang == 'pt'){
      lang = 'configPT.json'
    }
    fetch('../reto3/conf/'+lang)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        return response.json();
      })
      .then(data => {
        const headerElement = document.getElementById("header_");
        headerElement.innerHTML  = `${data.sitio[0]}<span>[UCV]</span>  2025-1`;
        
        const nameElement = document.getElementById("name");
        nameElement.textContent = data.saludo + ', Pebelin Hernandez'
        
        const searchElement = document.getElementById("search_");
        searchElement.textContent = data.buscar 
        
        const footerElement = document.getElementById("footer");
        footerElement.textContent = data.copyRight 
      })
      .catch(error => {
        console.error('Error al leer el JSON:', error);
      });
  }