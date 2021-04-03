# Spotiapp
Aplicación en angular que consume la API de Spotify.

## Comenzando 🚀

Una vez clonado el proyecto nos movemos al interior de la carpeta del proyecto para descargar las dependencias necesarias.
```
npm install
```

## Pre-requisitos 📋
- Debes crear una cuenta en Spotify Developer ( https://developer.spotify.com/dashboard/login )
- Crear una nueva app en el apartado de Dashboard.


- Al crear una nueva app, Spotify otorga un **Client ID** y un **Client Secret** para generar un **access token**, los cuales podemos utilizar con PostMan para obtenerlo de forma sencilla.

  ![postman](documentation\postman.png)


## Configurando servicio ⌨️ 
Una vez obtenido el **access token** lo copiamos y pegamos en **app/services/spotify.service.ts**

```javascript
getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAIIpFhFEgI00gWaJa8SnhzVtNL-EPnPg-l9SJ1im_f1GFpL44HlKbD7E051QqoiLrX1HC9pY-pEyBVxF8',
    });

    return this.http.get( url , {headers} );
  }
```

## Importante &#10071;
El access token caduca cada hora, por lo que se sugiere implementar el backend.

![screenshot](documentation\screenshot.png)