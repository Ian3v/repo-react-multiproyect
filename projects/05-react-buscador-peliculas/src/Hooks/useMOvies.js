import React, { useState } from "react"

import withResults from '../Mocks/with-result.json' // responseMovies es una platilla para los resultados sin conexion
import NotResult from '../Mocks/not-result.json'

import { searchMovies } from "../Services/SearchMovies"

export function useMovies () {
  
  const [resultMovie, setResultMovies] = useState([])
  const [movv, setMovv] = useState([])
  
  const movie = resultMovie.Search
  

  /* ------------------- Funcionalidad separada SearchMovies ------------------ */
  // getingMOvies -> es pasado a App.js - este mismo lo extraemos y le pasamos search del INPUT
  // egetingMOvie aki agarra a Search y lo pone en el estado movv
  // movv tambien es exportado en App, - movv optiene El Array de la busque de SearchMovies- quien mapea y hace el fetch
  // movv en App le m=pasamo a MOVIES quein renderizara con el array
  const getingMovies = async (search)=>{
    const movvies = await searchMovies({search})
    setMovv(movvies)
    console.log('%c12 usemMOvies getingMovies >','color:yellow;font-size:15px;',movvies);
  }
/* -------------------------------------------------------------------------- */



  const mappedMovies = movie?.map( (element, index, allArray)=>(
    {
      id: element.imdbID,
      title: element.Title,
      year: element.Year,
      poster: element.Poster,
    }
  ))

  const getMovie = (search)=>{  


    // const moviesSearch  =  await searchMovies
    // console.log(moviesSearch);

    if(search){ 
      const link = `https://www.omdbapi.com/?apikey=e9237489&s=${search}`
  
      fetch(link)
        .then(res => res.json())
        .then(data => {
          // console.log('%c41 useMovies fetch>','color:yellow;font-size:15px;',data.Search);
          setResultMovies(data)
        })

    }else{  
      // setResultMovies(withResults)
      setResultMovies(NotResult)
    }

  }
    
    // return {moviess: mappedMovies}
    return { mappedMovies, getMovie, getingMovies, movv}
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