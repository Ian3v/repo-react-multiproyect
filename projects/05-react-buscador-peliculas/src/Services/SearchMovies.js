import { useState } from "react";
import withResults from "../Mocks/with-result.json"

const API_KEY = 'e9237489'

export const searchMovies = async ( {search})=>{
   
    if(search === '') return null 
    try{ //cuando si hay unternet y hace e afetch
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const res = await response.json()
        const movie = res.Search
        // console.log('%c12 SearchMovies >','color:red;font-size:15px;',movie)
        return movie?.map( (element, index, allArray)=>(
            {
                id: element.imdbID,
                title: element.Title,
                year: element.Year,
                poster: element.Poster,
            }
        ))

    }catch(e){ // cuando no hay internet 
        // throw new Error('Error seraching movies')
// Enves de mandar un ERROR mandamos el de withResutls Avatar para cuando no haya internet nos de avatar como el error y asu vez este lo orden
        // console.log('%c26 >','color:blue;font-size:15px;','gaaa entra la catch');
        const movie = withResults.Search //retornanod avatar como error

        return movie?.map( (element, index, allArray)=>(
            {
                id: element.imdbID,
                title: element.Title,
                year: element.Year,
                poster: element.Poster,
            }
        ))
    }    
}