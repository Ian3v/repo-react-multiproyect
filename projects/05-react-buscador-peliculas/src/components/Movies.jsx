
import React from "react"

function ListOfMovies ({pelis}){
    // console.log('5>', pelis);
    // console.log('6>', pelis[0].imdbID);
    return (
      <ul className="ul-listaDePeliculas">
        {
          pelis.map((elemento,index,allArray)=>{
            return (
              <li className="li-movie" key={elemento.id}>
                <h3 className="h3-title-movie" >{elemento.title}</h3>
                <p className="p-year-movie">{elemento.year}</p>
                <img   src={elemento.poster} alt={elemento.Title}/>
              </li>
            ) 
          })
        }
    </ul>
    )
}
  
  function  NoMoviesResults (){
    <p>NO Resultados</p>
  }
  
  export function Movies( {Movies} ){
    const pelis = Movies //Todo el Array
    // const movies = responseMovies.Search
    const hasMovies = pelis?.length > 0  //True or False
    // console.log(pelis);
   
    return(
      <>
        {
          hasMovies ? (
            /* -------------------------------------------------------------------------- */
            //De las dos formas funciona
            //ListOfMovies( {pelis})   
            <ListOfMovies pelis={pelis} /> 

          ) : (
            //NoMoviesResults()
            <NoMoviesResults />
          )
        }
      </>
    )
  }



















  

  /* -------------------------------------------------------------------------- */
  /* ------------------------- Mostrando Peliculas 1.1 ------------------------ */
  // #region  mostrando peliculas 1.1


// import React from "react"

// function ListOfMovies ({pelis}){
//   console.log('5>', pelis);
//   return (
//     <ul>
//       {
//         pelis.map((elemento,index,allArray)=>{
//           return (
//             <li key={elemento.imdbID}>
//               <h3>{elemento.Title}</h3>
//               <p>{elemento.Year}</p>
//               <img src={elemento.Poster} alt={elemento.Title}/>
//             </li>
//           ) 
//         })
//       }
//   </ul>
//   )
// }
  
// function NoMoviesResults (){
//   <p>NO Resultados</p>
// }

// export function Movies( {Movies} ){
//   const pelis = Movies //Todo el Array
//   // const movies = responseMovies.Search
//   const hasMovies = pelis?.length > 0  //True or False
//   console.log(pelis);
 
//   return(
//     <>
//       {
//         hasMovies ? (
//           /* -------------------------------------------------------------------------- */
//           //De las dos formas funciona
//           //ListOfMovies( {pelis})   
//           <ListOfMovies pelis={pelis} /> 

//         ) : (
//           //NoMoviesResults()
//           <NoMoviesResults />
//         )
//       }
//     </>
//   )
// }
/* -------------------------------------------------------------------------- */











/* -------------------------------------------------------------------------- */
// #region Custom Hooks 2.1

/* -------------------------------------------------------------------------- */


// import React from "react"

// function ListOfMovies ({pelis}){
//     console.log('5>', pelis);
//     console.log('6>', pelis[0].imdbID);
//     return (
//       <ul>
//         {
//           pelis.map((elemento,index,allArray)=>{
//             return (
//               <li key={elemento.imdbID}>
//                 <h3>{elemento.Title}</h3>
//                 <p>{elemento.Year}</p>
//                 <img src={elemento.Poster} alt={elemento.Title}/>
//               </li>
//             ) 
//           })
//         }
//     </ul>
//     )
// }
  
//   function NoMoviesResults (){
//     <p>NO Resultados</p>
//   }

//   export function Movies( {Movies} ){
//     const pelis = Movies //Todo el Array
//     // const movies = responseMovies.Search
//     const hasMovies = pelis?.length > 0  //True or False
//     console.log(pelis);
   
//     return(
//       <>
//         {
//           hasMovies ? (
//             /* -------------------------------------------------------------------------- */
//             //De las dos formas funciona
//             //ListOfMovies( {pelis})   
//             <ListOfMovies pelis={pelis} /> 

//           ) : (
//             //NoMoviesResults()
//             <NoMoviesResults />
//           )
//         }
//       </>
//     )
//   }


/* -------------------------------------------------------------------------- */
















/* -------------------------------------------------------------------------- */
// #region 6.1 form ok con fetch
/* -------------------------------------------------------------------------- */


// import React from "react"

// function ListOfMovies ({pelis}){
//     // console.log('5>', pelis);
//     // console.log('6>', pelis[0].imdbID);
//     return (
//       <ul className="ul-listaDePeliculas">
//         {
//           pelis.map((elemento,index,allArray)=>{
//             return (
//               <li className="li-movie" key={elemento.id}>
//                 <h3 className="h3-title-movie" >{elemento.title}</h3>
//                 <p className="p-year-movie">{elemento.year}</p>
//                 <img   src={elemento.poster} alt={elemento.Title}/>
//               </li>
//             ) 
//           })
//         }
//     </ul>
//     )
// }
  
//   function  NoMoviesResults (){
//     <p>NO Resultados</p>
//   }
  
//   export function Movies( {Movies} ){
//     const pelis = Movies //Todo el Array
//     // const movies = responseMovies.Search
//     const hasMovies = pelis?.length > 0  //True or False
//     // console.log(pelis);
   
//     return(
//       <>
//         {
//           hasMovies ? (
//             /* -------------------------------------------------------------------------- */
//             //De las dos formas funciona
//             //ListOfMovies( {pelis})   
//             <ListOfMovies pelis={pelis} /> 

//           ) : (
//             //NoMoviesResults()
//             <NoMoviesResults />
//           )
//         }
//       </>
//     )
//   }





/* -------------------------------------------------------------------------- */





