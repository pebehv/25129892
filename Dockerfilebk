# Utilizar la imagen oficial de Ubuntu
FROM ubuntu:latest

# Actualizar paquetes y instalar Apache
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y apache2 && \
    apt-get clean

# Copiar los archivos del proyecto al servidor web de Apache
# COPY ./25129892 /var/www/html/
COPY . /var/www/html/
# Exponer el puerto 80 para acceder al servidor
EXPOSE 80

# Iniciar Apache en segundo plano
CMD ["apachectl", "-D", "FOREGROUND"]
