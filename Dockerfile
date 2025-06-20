# Utiliza una imagen base con Ubuntu 
FROM ubuntu:22.04
# Instala Apache y Python 
RUN apt-get update && apt-get install -y apache2 python3 python3-pip 
# Instala uWSGI 
RUN pip3 install uwsgi 
# Copia tu aplicación Python al contenedor 
COPY mi_app.py /var/www/html/  
#COPY js  /var/www/html/js/  
COPY . /var/www/html/static/
#COPY img  /var/www/html/img/  
COPY reto3  /var/www/html/reto3/  
#COPY style.css /var/www/html/  
#COPY my_app/. /usr/src/app/
# Configura uWSGI para ejecutar tu aplicación 
CMD ["uwsgi", "--http", "0.0.0.0:80", "--wsgi-file", "/var/www/html/mi_app.py", "--callable", "app", \
              "--static-map", "/static=/var/www/html/static", "--static-map", "/reto3=/var/www/html/reto3"]