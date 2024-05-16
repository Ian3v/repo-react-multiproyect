import { useState } from "react";

const API_KEY = 'e9237489'

export const searchMovies = ( {search})=>{
    // const [resultMovie, setResultMovies] = useState([])


    if(search){
        console.log('%c7 serachMOvies >','color:;font-size:15px;',search);

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            .then(res => res.json())
            .then( data => {
                console.log('%c12 >','color:yellow;font-size:15px;',data.Search);

                // setResultMovies(data.Search)
                const movie = resultMovie.Search

                const mappedMovies = movie?.map( ()=>(
                    {
                        id: element.imdbID,
                        title: element.Title,
                        year: element.Year,
                        poster: element.Poster,
                    }
                ) )
            
                return mappedMovies
              })
    }else{
        return  'no hola'
    }

    console.log('%c34 >','color:red;font-size:15px;',mappedMovies);
}

