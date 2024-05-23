import { useState } from "react";

const API_KEY = 'e9237489'

export const searchMovies = async ( {search})=>{

    if(search === '') return null 

    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const res = await response.json()
        const movie = res.Search
        console.log('%c12 SearchMovies >','color:red;font-size:15px;',movie);
        return movie?.map( (element, index, allArray)=>(
            {
                id: element.imdbID,
                title: element.Title,
                year: element.Year,
                poster: element.Poster,
            }
        ))

    }catch(e){
        throw new Error('Error seraching movies')
    }
}