import { useState } from "react"
// import withResults from '../Mocks/with-result.json' // responseMovies es una platilla para los resultados sin conexion
// import NotResult from '../Mocks/not-result.json'
import { searchMovies } from "../Services/SearchMovies"
import { useRef } from "react"


export function useMovies ({search, sort}) {  //sort => trrue or false
  
  
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorh, setError] = useState(null)
  const previusSearch = useRef(search) // un Hook para permutar el valor y comprarlo cuando se hace la misma busqueda
  const [sortData, setSortData] = useState([])
    const getMovies = async (search)=>{

      if(search === previusSearch.current) return  

      try{
        setLoading(true)
        setError(null)
        previusSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)
      }catch(e){
        setError(e.message)
      }finally{
        setLoading(false)
      }

    }

    /* -------------------------------------------------------------------------- */
    /* --------------------------- ordenar por titulo --------------------------- */
    const sortedMovies = (sort)=>{
      
      console.log('%c38 sortedMovies >','color:pink;font-size:15px;');
      // Declaramos una variable para almacenar las películas ordenadas.
      let ordenMovies;
      // Verificamos si sort es verdadero.
      if (sort) {
        // Si sort es verdadero, hacemos una copia del array movies y lo ordenamos.
        ordenMovies = movies.slice().sort(function(a, b) {
          return a.title.localeCompare(b.title);
        });
      } else {
        // Si sort es falso, simplemente asignamos el array movies sin modificarlo.
        ordenMovies = movies;
      }
      // Retornamos el resultado. pero Normal sin ordenar ya q no entro al if y no lo ordeno
      return ordenMovies;
      
    }

    // console.log('%c47 >','color:violet;font-size:15px;',sortedMovies(sort));
    // ? 
    //   [...movies].sort( (a,b)=>{ a.title.localCompare(b.title)} )
    // :
    //   movies
    
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


  /* ------------------- Funcionalidad separada SearchMovies ------------------ */
  // getingMOvies -> es pasado a App.js - este mismo lo extraemos y le pasamos search del INPUT
  // egetingMOvie aki agarra a Search y lo pone en el estado movv
  // movv tambien es exportado en App, - movv optiene El Array de la busque de SearchMovies- quien mapea y hace el fetch
  // movv en App le m=pasamo a MOVIES quein renderizara con el array
  // const getMovies = async (search)=>{
  //   const newMovies = await searchMovies({search})
  //   setMovies(newMovies)
  // }
/* -------------------------------------------------------------------------- */

    // return { mappedMovies, getMovie, getingMovies, movv}
    
    return { movies, getMovies,errorh,loading, sortedMovies }
}
  












  /* -------------------------------------------------------------------------- */
  // #region 61. Fomr ok con fetch
  /* -------------------------------------------------------------------------- */

//   import React, { useState } from "react"
// import withResults from '../Mocks/with-result.json' // responseMovies es una platilla para los resultados sin conexion
// import NotResult from '../Mocks/not-result.json'

// export function useMovies (search) {
 
//   const [resultMovie, setResultMovies] = useState([])
  
//   const movie = resultMovie.Search
  
//   const mappedMovies = movie?.map( (element, index, allArray)=>(
//     {
//       id: element.imdbID,
//       title: element.Title,
//       year: element.Year,
//       poster: element.Poster,

//     }
//   ))

//   const getMovie = (search)=>{  


//     if(search){ 
//       const link = `https://www.omdbapi.com/?apikey=e9237489&s=${search}`
//       console.log('%c24 >','color:yellow;font-size:15px;',`https://www.omdbapi.com/?apikey=e9237489&s=${search}
//       `); 
//       fetch(link)
//         .then(res => res.json())
//         .then(data => {
//           console.log('%c30 >','color:yellow;font-size:15px;',data.Search);
//           setResultMovies(data)
//         })

//     }else{  
//       // setResultMovies(withResults)
//       setResultMovies(NotResult)
//     }

//   }
    
//     // return {moviess: mappedMovies}
//     return { mappedMovies, getMovie}
//   }
  /* -------------------------------------------------------------------------- */






















  /* -------------------------------------------------------------------------- */
  // #region 7.1 searchMovies 
  // searchmovies en funcionamienot sin elimnar la funcionaldad fecth y mapeo de use Movues

// import React, { useState } from "react"

// import withResults from '../Mocks/with-result.json' // responseMovies es una platilla para los resultados sin conexion
// import NotResult from '../Mocks/not-result.json'

// import { searchMovies } from "../Services/SearchMovies"

// export function useMovies () {
  
//   const [resultMovie, setResultMovies] = useState([])
//   const [movv, setMovv] = useState([])
  
//   const movie = resultMovie.Search

//   /* ------------------- Funcionalidad separada SearchMovies ------------------ */
//   // getingMOvies -> es pasado a App.js - este mismo lo extraemos y le pasamos search del INPUT
//   // egetingMOvie aki agarra a Search y lo pone en el estado movv
//   // movv tambien es exportado en App, - movv optiene El Array de la busque de SearchMovies- quien mapea y hace el fetch
//   // movv en App le m=pasamo a MOVIES quein renderizara con el array
//   const getingMovies = async (search)=>{
//     const movvies = await searchMovies({search})
//     setMovv(movvies)
//     console.log('%c12 usemMOvies getingMovies >','color:yellow;font-size:15px;',movvies);
//   }
// /* -------------------------------------------------------------------------- */



//   const mappedMovies = movie?.map( (element, index, allArray)=>(
//     {
//       id: element.imdbID,
//       title: element.Title,
//       year: element.Year,
//       poster: element.Poster,
//     }
//   ))

//   const getMovie = (search)=>{  


//     // const moviesSearch  =  await searchMovies
//     // console.log(moviesSearch);

//     if(search){ 
//       const link = `https://www.omdbapi.com/?apikey=e9237489&s=${search}`
  
//       fetch(link)
//         .then(res => res.json())
//         .then(data => {
//           // console.log('%c41 useMovies fetch>','color:yellow;font-size:15px;',data.Search);
//           setResultMovies(data)
//         })

//     }else{  
//       // setResultMovies(withResults)
//       setResultMovies(NotResult)
//     }

//   }
    
//     // return {moviess: mappedMovies}
//     return { mappedMovies, getMovie, getingMovies, movv}
//   }
  




  /* -------------------------------------------------------------------------- */










  /* -------------------------------------------------------------------------- */
  // #region 7.2  con searchMOvies en funcion

//   import React, { useState } from "react"

// // import withResults from '../Mocks/with-result.json' // responseMovies es una platilla para los resultados sin conexion
// // import NotResult from '../Mocks/not-result.json'

// import { searchMovies } from "../Services/SearchMovies"

// export function useMovies () {
  
//   const [movies, setMovies] = useState([])

//   /* ------------------- Funcionalidad separada SearchMovies ------------------ */
//   // getingMOvies -> es pasado a App.js - este mismo lo extraemos y le pasamos search del INPUT
//   // egetingMOvie aki agarra a Search y lo pone en el estado movv
//   // movv tambien es exportado en App, - movv optiene El Array de la busque de SearchMovies- quien mapea y hace el fetch
//   // movv en App le m=pasamo a MOVIES quein renderizara con el array
//   const getMovies = async (search)=>{
//     const newMovies = await searchMovies({search})
//     setMovies(newMovies)
//   }
// /* -------------------------------------------------------------------------- */

//     // return { mappedMovies, getMovie, getingMovies, movv}
//     return { movies, getMovies}
//   }
  


  /* -------------------------------------------------------------------------- */