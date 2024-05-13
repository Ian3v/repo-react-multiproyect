import React from "react"
import responseMovies from '../Mocks/with-result.json' // responseMovies es una platilla para los resultados sin conexion
import withOutResults from '../Mocks/not-result.json'

export function useMovies () {
    const movies = responseMovies.Search
    // const movies = responseMovies
  
      const mappedMovies = movies?.map( (element,index,allArray)=>(
         {
          id: element.imdbID,
          title: element.Title,
          year: element.Year,
          poster: element.Poster
        }
  
       ) )
    
    return {movie: mappedMovies}
  }
  