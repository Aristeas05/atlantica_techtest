# Configuracion de la app
- Clonar el repositorio correspondiente
- Luego entrar a la carpeta "biblioteca-pokemon" por medio de comandos 
- Dentro de ella correr el comando "npm install"
- Luego correr el comando "npm start"

# Uso de la app
- Los credenciales para el login son Usuario: admin | Password: admin
- Se agrego un boton de "logout" para cerrar la sesion y se visualice la web en estado "Invitado(sin loguearse)
- El boton "Pagina principal", te lleva al home con la lista de los 20 pokemon cargados
- Al loguearse aparecera un boton "Pokemon capturados" para ingresar a la lista de pokemon capturados por el usuario
- Hacer click en el boton "logout" para poder cerrar sesion

# Datos adicionales
- Toda la data esta guardada en el "localStorage". Credenciales de usario y stack de pokemon capturados.
- Los endpoints estan ubicados en un archivo aparte llamado "servicios"
- Se uso la libreria "Axios" para el manejo de endpoints y "react router dom" para el routing de la web
- Se uso scss como preprocesador de estilos
