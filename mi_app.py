# mi_app.py
# Importamos sys para poder codificar correctamente los caracteres especiales.
import sys

def app(environ, start_response):
    status = '200 OK'
    headers = [('Content-type', 'text/html; charset=utf-8')]
    start_response(status, headers)

    # Tu contenido HTML completo como una cadena multi-línea
    html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ATI[UCV] 2025-1</title>
    <!-- Los enlaces a archivos externos (CSS, JS, iconos) NO serán cargados por esta configuración simple de uWSGI.
         La página se mostrará, pero sin estilos, scripts o favicon.
         Para esto, necesitarías configurar Apache/Nginx o uWSGI con static-map.
    -->
    <link rel="icon" href="static/img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="static/style.css">
    <script src="static/js/perfil.js"></script>

</head>
<body>
    <div id="header">
        <div id="cont_img">
            <img id="perfil" alt="Perfil">
        </div>
        <div id="desc">
            <h2 id="name_" class="name"></h2>
            <p id="descp"></p>
            <div class="item">

                <div>
                    <p id="color_"></p>
                    <p id="libr_"></p>
                    <p id="music_"></p>
                    <p id="jugo_"></p>
                    <p id="leng_"></p>
                </div>
                <div class="item2">
                    <p id="color"></p>
                    <p id="libr"></p>
                    <p id="music"></p>
                    <p id="jugo"></p>
                    <p id="leng"></p>
                </div>
            </div>
            <p id="emaill_" ><span id="email_" class="email" onclick="cambiarColor()"></span> </p>
        </div>
    </div>
    <script>
        // Este script sí funcionará porque está incrustado directamente en el HTML
        function cambiarColor() {
            const texto = document.querySelector('.email');
            texto.classList.toggle('txt_red');
            // Agregando un mensaje para verificar que el script se ejecuta
            console.log("Color cambiado!");
        }
        // Puedes agregar aquí una llamada para cargar datos en los elementos
        // por ejemplo, si 'perfil.js' cargaba datos a 'name_', 'descp', etc.
        // Si perfil.js usa DOMContentLoaded, es probable que estas IDs estén vacías
        // ya que el contenido de perfil.js no se carga.
        document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById('name_').textContent = 'Tu Nombre Aquí';
            document.getElementById('descp').textContent = 'Descripción del perfil.';
            document.getElementById('email_').textContent = 'correo@ejemplo.com';
        });
    </script>
</body>
</html>
    """
    # Codificamos el contenido HTML a bytes usando UTF-8
    return [html_content.encode('utf-8')]