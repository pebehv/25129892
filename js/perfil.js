// js/index.js
//import { obj } from '../reto3/25129892/perfil.js';
console.log("js*****")
//const jsonPath = new URL("../data.json", import.meta.url);

document.addEventListener("DOMContentLoaded", () => {
  getLenguaje()
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
        console.log(":::", data)
        const colorElement_ = document.getElementById("color_");
        colorElement_.textContent = data.color
        const librElement = document.getElementById("libr_");
        librElement.textContent = data.libro
        const musicElement = document.getElementById("music_");
        musicElement.textContent = data.musica
        const jugoElement = document.getElementById("jugo_");
        jugoElement.textContent = data.video_juego
        const lengElement = document.getElementById("leng_");
        lengElement.textContent = data.lenguajes
        const emaillElement = document.getElementById("emaill_");
        const textoOriginal = data.email;
        
        //emaillElement.innerHTML  = `${data.email}: <span id="email_" class="email" onclick="cambiarColor()"></span>`;
        const textoConEmail = textoOriginal.replace('[email]', `<span id="email_" class="email" onclick="cambiarColor()"></span>`);
        emaillElement.innerHTML  = textoConEmail;

      })
      .catch(error => {
        console.error('Error al leer el JSON:', error);
      });
  }