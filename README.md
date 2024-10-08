# 📝 Aplicación de Lista de Tareas

Este proyecto es una aplicación de gestión de listas de tareas construida con **React**, **Material-UI** y **React Hook Form**. Permite a los usuarios crear, actualizar y gestionar sus tareas de manera eficiente, clasificándolas por diferentes categorías.

## 📚 Tabla de Contenidos
- [Características](#Características)
- [Tecnologías Utilizadas](#Tecnologías-Utilizadas)
- [Instalación](#Instalación)
- [Uso](#Uso)
- [Integración de API](#Integración-de-API)

## 🌟 Características
- Crear y actualizar tareas.
- Clasificar tareas en función de categorías predefinidas.
- Marcar tareas como completadas o pendientes.
- Diseño receptivo para dispositivos de escritorio y móviles.
- Validación de formularios utilizando **Yup** y **React Hook Form**.
- Interfaz fácil de usar con componentes de **Material-UI**.

## ⚙️ Tecnologías Utilizadas
- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Material-UI**: Un popular marco de UI para React que proporciona componentes preconstruidos.
- **React Hook Form**: Una biblioteca para gestionar formularios en aplicaciones React.
- **Yup**: Un constructor de esquemas de JavaScript para el análisis y la validación de valores.
- **Axios**: Para realizar solicitudes HTTP a la API de backend.
- **React Context API**: Para gestionar el estado de carga global.

## 🚀 Instalación
1. Clona el repositorio:
    ```bash
    git clone https://github.com/gabibenavidez/minder-challenge.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd minder-challenge
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
5. Abre tu navegador y ve a [http://localhost:5173](http://localhost:5173).
6. Para ejecutar la base de datos, ejecuta:
    ```bash
    npm run db
    ```

## 🛠️ Uso
- Para crear una nueva tarea, haz clic en el botón "Agregar" en la esquina inferior derecha.
- Completa el formulario con el título de la tarea, la descripción y selecciona una categoría.
- Haz clic en "Crear" para agregar la tarea a tu lista.
- Las tareas se pueden marcar como completadas haciendo clic en la casilla de verificación junto a cada tarea.

## 🔗 Integración de API
Este proyecto está integrado con una API de backend para gestionar tareas y categorías. Asegúrate de que la API esté en funcionamiento. Es posible que debas ajustar los puntos finales de la API en el archivo `services/tasksService.jsx` según tu configuración de backend.
