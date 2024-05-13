import React, { useState } from "react"
import withResults from '../Mocks/with-result.json' // responseMovies es una platilla para los resultados sin conexion
import NotResult from '../Mocks/not-result.json'

export function useMovies (search) {
 
  const [resultMovie, setResultMovies] = useState([])
  
  const movie = resultMovie.Search
  
  const mappedMovies = movie?.map( (element, index, allArray)=>(
    {
      id: element.imdbID,
      title: element.Title,
      year: element.Year,
      poster: element.Poster,
        
    }
  ))

  const getMovie = (search)=>{

    if(search){
      const link = `https://www.omdbapi.com/?apikey=e9237489&s=${search}`
      console.log('%c24 >','color:yellow;font-size:15px;',`https://www.omdbapi.com/?apikey=e9237489&s=${search}
      `);
      fetch(link)
        .then(res => res.json())
        .then(data => {
          console.log('%c30 >','color:yellow;font-size:15px;',data.Search);
          setResultMovies(data)
        })

    }else{
      setResultMovies(NotResult)
    }

  }
    
    // return {moviess: mappedMovies}
    return { mappedMovies, getMovie}
  }
  