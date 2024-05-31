# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- ----------------------------------------------------------------------- -->

ENUNCIADO A HACER - TO DO

* CREAR UNA APLICACION PARA BUSCAR PELICULAS

API  a usar:  http://www.omdbapi.com/
Apir key:     e9237489

Requerimientos:

✅ Necesita mostrar un input para buscar la pelicula y un boton para buscar
✅ Lista las peliculas encontradas y muestra el titulo, anio y poster
✅ Que el Formulario funcinoes
✅ Haz que las peliculas se muestren en un grid responsive

Primera iteracion:

✅ Evitar que se haga la misma busqueda dos veces seguidas
- Haz que la busqueda se haga automaticamente al escribir
- Evita que se haga la busqueda continuamente al escribir(debounce)