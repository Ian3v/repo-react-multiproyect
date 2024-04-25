import { useState, useEffect } from "react"
// import { getRandomFact } from ".facts./services/facts";
import { getRandomFact } from '../Services/facts'

/* ------------- Custom hooks de obetner fact de FontFaceSet.js ------------- */
 export function  useCatFact(){
    const [fact, setFact] = useState()
  
    const refreshCatFact = ()=>{
      getRandomFact().then( newFact => setFact(newFact) )
  
    }
  //recuperar la cita al cargar la pagina
    useEffect(()=>{
      refreshCatFact()
    },[])
  
    return { fact, refreshCatFact }
  }
  /* -------------------------------------------------------------------------- */
// export default useCatFact

