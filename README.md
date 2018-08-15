API REST con node JS para el manejo de usuarios en una base de datos en mongoDB

1) Tener instalado NodeJS y MongoDB
2) En la raiz del proyecto ejecutar en cmd el comando: npm init

  Seguir las instrucciones indicando:
  ○ paquete
  ○ versión
  ○ descripción
  ○ entry point

  Opcionales
  ○ test command
  ○ git repository
  ○ keywords
  ○ author

3) En la raiz instalar:

  1. npm install express --save
  2. npm install body-parser --save
  3.  npm install connect-multiparty --save
  4.  npm install mongoose --save
  5.  npm install nodemon --save --dev

4) Editar el archivo package.json y añadir:

   Añadir en la siguiente linea despues de "test:"
   "start": "nodemon <entry point>"

5) Crear la base de datos en robo3T

6) Ejecutar el servicio de mongod

7) Crear los siguientes ficheros:

  1. Models:
    |-project.js
  2. Controllers:
    |-project.js
  3. Routes:
    |-project.js
  4. app.js
  5. index.js
