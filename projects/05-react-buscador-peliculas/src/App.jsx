import './App.css'
// import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// import { renderMovies, renderNotResult }  from './components/Movies'
import { Movies } from './components/Movies'
import { useMovies } from './Hooks/useMOvies'
import { useEffect, useState, useRef } from 'react'

// !todo 107 con grid <----
// !1:10  lo siguiente-->



//Custom Hooks
function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)


  useEffect( ()=>{
    if(isFirstInput.current){
      /* -------------------------------------------------------------------------- */
      isFirstInput.current = search === ''

      if(search === ''){
        isFirstInput.current = true
      }else{
        isFirstInput.current = false
      }
      /* -------------------------------------------------------------------------- */
      return
    }

    if(search === ''){
      setError('1-Vacio, no se peude buscar vacio')
      return
    }
    if(search.match(/^\d+$/)){
      setError('2-Numeros, no se peude buscar numero')
      return
    }
    if(search.length < 3){
      setError('3-Menor a 3, no se peude buscar solo 3 caracteres')
      return
    }
    if(search.match(/walle/i)){
      setError('4-no walle, no se peude buscar walle')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error}
}



function App() {

  const {search, updateSearch, error} = useSearch()
  const { mappedMovies, getMovie} = useMovies() //! mappeMovies obtiene el mpeado q hcmos nosotros mismo
  // const {mappedMovies} = useMovies() //! mappeMovies obtiene el mpeado q hcmos nosotros mismo
  // const [query, setQuery] = useState('')
  

  /* ------------------------------ habldeSubmit ------------------------------ */
  const handleSubmit = (e)=>{
    e.preventDefault();
    const fields = Object.fromEntries(new window.FormData( e.target))

    // setGoSearch(fields.query1) //! obteniedo el ultimo search ya sumitearlo
    console.log('%c72 >','color:blue;font-size:15px;',search);
    getMovie(search)
  }

  /* ------------------------------ handleChange ------------------------------ */
  const handleChange = (e) =>{
    console.log(e.target.value);

    const newQuery = e.target.value

    if(newQuery.startsWith('e')) return

    updateSearch(e.target.value);
    
  }



  return ( 
    <div className='page'>
     
      <header>

        <h1>Search oM</h1>

        <form className='form' onSubmit={handleSubmit} >  
          <input 
            style={{ border: '2px solid transparent', borderColor: error ? 'red' : 'transparent'}}
            // ref={inputRef}
            value={search}
            onChange={handleChange}
            name='query1'
            placeholder='Interestellar, Start Wars, The Matrix, Avatar'
          />
          <input 
            // onChange={handleChange}  
            // value={query} 
            // ref={inputRef}
            // name='PrimerInput' 
            name='query2'
            placeholder='Interestellar, Start Wars, The Matrix, Avatar'
          />
          <button type='submit'>Buscar</button>
          {/* {error && <p style={{color:'red'}}>{error}</p> } */}
          {error && <div style={{color:'red'}}>{error}</div>}
        </form>

      </header>

      <main>
        {
          <Movies Movies={mappedMovies} /> //! ? creo q mandamos todo el js ya obtenido
        }
      </main>
            
    </div>
  )
}

export default App



















/* -------------------------------------------------------------------------- */
/* --------------------- Mostrando Pelicluas 1.1 -------------------- */
// #region Mostrando Pelicluas 1.1 
/* -------------------------------------------------------------------------- */
 
// import { useState } from 'react'
// import './App.css'
// import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// // import { renderMovies, renderNotResult }  from './components/Movies'
// import {Movies } from './components/Movies'

// function App() {
  
//   const movies = responseMovies.Search //le pasamos la respuesta, todo el Array a Movies componete


//   return (
//     <div className='page'>
     
// 20
//       <header>

//         <h1>Buscador de Peliculas</h1>

//         <form className='form'>  
//           <input placeholder='Interestellar, Start Wars, The Matrix, Avatar'/>
//           <button type='submit'>Buscar</button>
//         </form>

//       </header>

//       <main>
//         {
//           <Movies Movies={movies} />
//         }
//       </main>
            
//     </div>
//   )
// }

// export default App
/* -------------------------------------------------------------------------- */











/* -------------------------------------------------------------------------- */
/* --------------------- Mostrando Pelicluas 1.1 -------------------- */
// #region Mostrando Pelicluas 1.1 
/* -------------------------------------------------------------------------- */
 
// import { useState } from 'react'
// import './App.css'
// import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// // import { renderMovies, renderNotResult }  from './components/Movies'
// import {Movies } from './components/Movies'

// function App() {
  
//   const movies = responseMovies.Search //le pasamos la respuesta, todo el Array a Movies componete


//   return (
//     <div className='page'>
     
// 20
//       <header>

//         <h1>Buscador de Peliculas</h1>

//         <form className='form'>  
//           <input placeholder='Interestellar, Start Wars, The Matrix, Avatar'/>
//           <button type='submit'>Buscar</button>
//         </form>

//       </header>

//       <main>
//         {
//           <Movies Movies={movies} />
//         }
//       </main>
            
//     </div>
//   )
// }

// export default App
/* -------------------------------------------------------------------------- */






/* -------------------------------------------------------------------------- */
// #region useHooks1.2.1

// import { useState } from 'react'
// import './App.css'
// import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// // import { renderMovies, renderNotResult }  from './components/Movies'
// import {Movies } from './components/Movies'


// export function useMovies () {
//   const movies = responseMovies.Search
//   let mappedMovies = []
//   if(movies){
//     mappedMovies = movies.map( (element,index,allArray)=>{

//       return {
//         id: element.imdbID,
//         title: element.Title,
//         year: element.Year,
//         poster: element.Poster
//       }

//     } )
//   }
//   // console.warn('23 >',movies);
//   // console.warn('24 >',mappedMovies);
//   // return {movies : mappedMovies}
//   return {  movies: mappedMovies   }
// }


// function App() {
  
//   // const movies = responseMovies.Search //le pasamos la respuesta, todo el Array a Movies componete
//   // const heraldo = useMovies()
//   const {movies: mappedMovies} = useMovies()
//   /* ---------------------------------- Mapeo --------------------------------- */
//   // let mappedMovies = []
//   // if(movies){
//   //   mappedMovies = movies.map( (element,index,allArray)=>{

//   //     return {
//   //       id: element.imdbID,
//   //       title: element.Title,
//   //       year: element.Year,
//   //       poster: element.Poster
//   //     }

//   //   } )
//   // }
// console.warn('47 >',mappedMovies);
// // console.warn('48 >',movies);
//   return (
//     <div className='page'>
     
// 20b
//       <header>

//         <h1>Buscador de Peliculas</h1>

//         <form className='form'>  
//           <input placeholder='Interestellar, Start Wars, The Matrix, Avatar'/>
//           <button type='submit'>Buscar</button>
//         </form>

//       </header>

//       <main>
//         {
//           <Movies Movies={mappedMovies} />
//         }
//       </main>
            
//     </div>
//   )
// }

// export default App

  /* -------------------------------------------------------------------------- */













/* -------------------------------------------------------------------------- */
// #region CustomHook 2.1
/* -------------------------------------------------------------------------- */
// import { useState } from 'react'
// import './App.css'
// import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// // import { renderMovies, renderNotResult }  from './components/Movies'
// import {Movies } from './components/Movies'


// export function useMovies () {
//   const movies = responseMovies.Search

//     const mappedMovies = movies?.map( (element,index,allArray)=>(
//        {
//         imdbID: element.imdbID,
//         Title: element.Title,
//         Year: element.Year,
//         Poster: element.Poster
//       }

//      ) )
  
//   // console.warn('23 >',movies);
//   // console.warn('24 >',mappedMovies);
//   // return {movies : mappedMovies}
//   return {movie: mappedMovies}
// }


// function App() {
  
//   // const movies = responseMovies.Search //le pasamos la respuesta, todo el Array a Movies componete
//   // const heraldo = useMovies()
//   const {movie: mappedMovies} = useMovies()
//   console.log('52 >',mappedMovies);

//   /* ---------------------------------- Mapeo --------------------------------- */
//   // let mappedMovies = []
//   // if(movies){
//   //   mappedMovies = movies.map( (element,index,allArray)=>{

//   //     return {
//   //       id: element.imdbID,
//   //       title: element.Title,
//   //       year: element.Year,
//   //       poster: element.Poster
//   //     }

//   //   } )
//   // }
// // console.warn('47 >',mappedMovies);
// // console.warn('48 >',movies);
  

//   return (
//     <div className='page'>
     
// 20b
//       <header>

//         <h1>Buscador de Peliculas</h1>

//         <form className='form'>  
//           <input placeholder='Interestellar, Start Wars, The Matrix, Avatar'/>
//           <button type='submit'>Buscar</button>
//         </form>

//       </header>

//       <main>
//         {
//           <Movies Movies={mappedMovies} />
//         }
//       </main>
            
//     </div>
//   )
// }

// export default App


/* -------------------------------------------------------------------------- */







/* -------------------------------------------------------------------------- */
// #region Custom Hooks en Hooks Carpeta 3.1
/* -------------------------------------------------------------------------- */

// import { useState } from 'react'
// import './App.css'
// // import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// // import { renderMovies, renderNotResult }  from './components/Movies'
// import {Movies } from './components/Movies'
// import { useMovies } from './Hooks/useMOvies'

// function App() {

//   const {movie: mappedMovies} = useMovies()
//   // console.log('52 >',mappedMovies);
// 27.33
//   return (
//     <div className='page'>
     
//       <header>

//         <h1>Buscador de Peliculas</h1>

//         <form className='form'>  
//           <input placeholder='Interestellar, Start Wars, The Matrix, Avatar'/>
//           <button type='submit'>Buscar</button>
//         </form>

//       </header>

//       <main>
//         {
//           <Movies Movies={mappedMovies} />
//         }
//       </main>
            
//     </div>
//   )
// }

// export default App

/* -------------------------------------------------------------------------- */
















/* -------------------------------------------------------------------------- */
// #region 4.0 Capturar Todo el Form, basico

// import './App.css'
// // import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// // import { renderMovies, renderNotResult }  from './components/Movies'
// import {Movies } from './components/Movies'
// import { useMovies } from './Hooks/useMOvies'
// import { useEffect, useState, useRef } from 'react'

// function App() {

//   const {movie: mappedMovies} = useMovies()

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     const fields = Object.fromEntries(new window.FormData( e.target))

//     // Obtener el valor del campo 'query' del formulario
//     // const query = e.target.querySelector('input[name="query"]').value;

//     console.log(fields);
//   }


//   return (
//     <div className='page'>
     
//       <header>

//         <h1>Search oM</h1>

//         <form className='form' onSubmit={handleSubmit} >  
//           <input 
//             // onChange={handleChange}  
//             // value={query} 
//             // ref={inputRef}
//             // name='PrimerInput' 
//             name='query1'
//             placeholder='Interestellar, Start Wars, The Matrix, Avatar'
//           />
//           <input 
//             // onChange={handleChange}  
//             // value={query} 
//             // ref={inputRef}
//             // name='PrimerInput' 
//             name='query2'
//             placeholder='Interestellar, Start Wars, The Matrix, Avatar'
//           />
//           <button type='submit'>Buscar</button>
//           {/* {error && <p style={{color:'red'}}>{error}</p> } */}
          
//         </form>

//       </header>

//       <main>
//         {
//           <Movies Movies={mappedMovies} />
//         }
//       </main>
            
//     </div>
//   )
// }

// export default App
/* -------------------------------------------------------------------------- */






















/* -------------------------------------------------------------------------- */
// #region 4.1 Capturando tecla por teclas
/* -------------------------------------------------------------------------- */

// import { useEffect, useState, useRef } from 'react'
// import './App.css'
// // import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// // import { renderMovies, renderNotResult }  from './components/Movies'
// import {Movies } from './components/Movies'
// import { useMovies } from './Hooks/useMOvies'

// function App() {

//   const {movie: mappedMovies} = useMovies()
//   const [query, setQuery] = useState('')
//   const [error, setError] = useState()
//   // console.log('52 >',mappedMovies);     
//   // const inputRef = useRef() 

//   //Captuar inputs
//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     const fields = Object.fromEntries( new window.FormData(e.target))
//     console.log(fields);

//   }

//   const handleChange = e =>{
//     const newQuery = e.target.value
//     if(newQuery.startsWith('a')) return
//     setQuery(newQuery)

//    }

//    useEffect( ()=>{
    
//    },[query] )

//    useEffect( ()=>{

//     if(query === ''){
//       setError('1 Vacio, no se peude buscar vacio')
//       return
//     }
//     if(query.match(/^\d+$/)){
//       setError('2 Numeros, no se peude buscar numero')
//       return
//     }
//     if(query.length < 3){
//       setError('3 Menor a 3, no se peude buscar solo 3 caracteres')
//       return
//     }
//     if(query.match(/walle/i)){
//       setError('no walle, no se peude buscar walle')
//       return
//     }
//     setError(null)
//    }, [query] )
// 48
//   return (
//     <div className='page'>
     
//       <header>

//         <h1>Search oM</h1>

//         <form className='form' onSubmit={handleSubmit}>  
//           <input 
//             onChange={handleChange}  
//             value={query} 
//             // ref={inputRef}
//             name='PrimerInput' 
//             placeholder='Interestellar, Start Wars, The Matrix, Avatar'
//           />
//           <button type='submit'>Buscar</button>
//           {error && <p style={{color:'red'}}>{error}</p> }
          
//         </form>

//       </header>

//       <main>
//         {
//           <Movies Movies={mappedMovies} />
//         }
//       </main>
            
//     </div>
//   )
// }

// export default App
/* -------------------------------------------------------------------------- */















/* -------------------------------------------------------------------------- */
// #region 5.1 Validando Vacio con UseEffect
// Sin e lprblema de estado, q validaba un anterior por se restado
/* -------------------------------------------------------------------------- */

// import './App.css'
// // import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// // import { renderMovies, renderNotResult }  from './components/Movies'
// import {Movies } from './components/Movies'
// import { useMovies } from './Hooks/useMOvies'
// import { useEffect, useState, useRef } from 'react'

// function App() {

//   const {movie: mappedMovies} = useMovies()
//   const [query, setQuery] = useState('')
//   const [error, setError] = useState()

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     const fields = Object.fromEntries(new window.FormData( e.target))

//     // Obtener el valor del campo 'query' del formulario
//     // const query = e.target.querySelector('input[name="query"]').value;

//     console.log(fields);
//   }

//   const handleChange = (e) =>{
//     console.log(e.target.value);
//     const newQuery = e.target.value
//     setQuery(newQuery);

//   }

//   useEffect( ()=>{
//     if(query === ''){
//       setError('1-Vacio, no se peude buscar vacio')
//       return
//     }
//     if(query.match(/^\d+$/)){
//       setError('2-Numeros, no se peude buscar numero')
//       return
//     }
//     if(query.length < 3){
//       setError('3-Menor a 3, no se peude buscar solo 3 caracteres')
//       return
//     }
//     if(query.match(/walle/i)){
//       setError('4-no walle, no se peude buscar walle')
//       return
//     }
//     setError(null)
//   }, [query])

//   return (
//     <div className='page'>
     
//       <header>

//         <h1>Search oM</h1>

//         <form className='form' onSubmit={handleSubmit} >  
//           <input 
//             // onChange={handleChange}  
//             // value={query} 
//             // ref={inputRef}
//             // name='PrimerInput' 
//             onChange={handleChange}
//             name='query1'
//             placeholder='Interestellar, Start Wars, The Matrix, Avatar'
//           />
//           <input 
//             // onChange={handleChange}  
//             // value={query} 
//             // ref={inputRef}
//             // name='PrimerInput' 
//             name='query2'
//             placeholder='Interestellar, Start Wars, The Matrix, Avatar'
//           />
//           <button type='submit'>Buscar</button>
//           {/* {error && <p style={{color:'red'}}>{error}</p> } */}
//           {error && <div style={{color:'red'}}>{error}</div>}
//         </form>

//       </header>

//       <main>
//         {
//           <Movies Movies={mappedMovies} />
//         }
//       </main>
            
//     </div>
//   )
// }

// export default App

/* -------------------------------------------------------------------------- */











/* -------------------------------------------------------------------------- */
// #region Validacion contralado




/* -------------------------------------------------------------------------- */
// #region 5.2 si empieza A no dejar escribir
/* -------------------------------------------------------------------------- */


// import './App.css'
// // import responseMovies from './Mocks/with-result' // responseMovies es una platilla para los resultados sin conexion
// // import { renderMovies, renderNotResult }  from './components/Movies'
// import {Movies } from './components/Movies'
// import { useMovies } from './Hooks/useMOvies'
// import { useEffect, useState, useRef } from 'react'

// function App() {

//   const {movie: mappedMovies} = useMovies()
//   const [query, setQuery] = useState('')
//   const [error, setError] = useState()

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     const fields = Object.fromEntries(new window.FormData( e.target))

//     // Obtener el valor del campo 'query' del formulario
//     // const query = e.target.querySelector('input[name="query"]').value;

//     console.log(fields);
//   }

//   const handleChange = (e) =>{
//     console.log(e.target.value);
//     const newQuery = e.target.value
//     if(newQuery.startsWith('a')) return
//     setQuery(e.target.value);
    
//   }

//   useEffect( ()=>{
//     if(query === ''){
//       setError('1-Vacio, no se peude buscar vacio')
//       return
//     }
//     if(query.match(/^\d+$/)){
//       setError('2-Numeros, no se peude buscar numero')
//       return
//     }
//     if(query.length < 3){
//       setError('3-Menor a 3, no se peude buscar solo 3 caracteres')
//       return
//     }
//     if(query.match(/walle/i)){
//       setError('4-no walle, no se peude buscar walle')
//       return
//     }
//     setError(null)
//   }, [query])

//   return (
//     <div className='page'>
     
//       <header>

//         <h1>Search oM</h1>

//         <form className='form' onSubmit={handleSubmit} >  
//           <input 
//             // ref={inputRef}
//             value={query}
//             onChange={handleChange}
//             name='query1'
//             placeholder='Interestellar, Start Wars, The Matrix, Avatar'
//           />
//           <input 
//             // onChange={handleChange}  
//             // value={query} 
//             // ref={inputRef}
//             // name='PrimerInput' 
//             name='query2'
//             placeholder='Interestellar, Start Wars, The Matrix, Avatar'
//           />
//           <button type='submit'>Buscar</button>
//           {/* {error && <p style={{color:'red'}}>{error}</p> } */}
//           {error && <div style={{color:'red'}}>{error}</div>}
//         </form>

//       </header>

//       <main>
//         {
//           <Movies Movies={mappedMovies} />
//         }
//       </main>
            
//     </div>
//   )
// }

// export default App


/* -------------------------------------------------------------------------- */