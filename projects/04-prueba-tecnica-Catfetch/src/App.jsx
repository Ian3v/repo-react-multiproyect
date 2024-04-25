import React, { useEffect, useState } from "react";
// import { getRandomFact } from "./services/facts";
import { useCatImage } from "./Hooks/UseCatImage.js";
import { useCatFact} from "./Hooks/useCarFact.js";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_ENDPOINT_IMAGE_URL =
  "https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true";


// /* ------------- Custom hooks de obetner fact de FontFaceSet.js ------------- */
// const useCatFact = ()=>{
//   const [fact, setFact] = useState()

//   const refreshCatFact = ()=>{
//     getRandomFact().then( newFact => setFact(newFact) )

//   }

//   useEffect(()=>{
//     refreshCatFact()
//   },[])

//   return {fact, refreshCatFact}
// }
// /* -------------------------------------------------------------------------- */


function App() {
  const {fact, refreshCatFact} = useCatFact()
  // const [fact, setFact] = useState()
  // const [imageUrl, setImageUrl] = useState(); 
  const { imageUrl } = useCatImage( {fact})
  const [factError, setFactError] = useState();
  

  // Efecto par arecuperar la cita al cargar la pagina
  // useEffect(() => {
    /* ---------------------------- Con .thne y async --------------------------- */
        
    // getRandomFact().then( data => {
    //   setFact(data)
    // } )
    /* -------------------------------------------------------------------------- */
    // const fetchData = async () => {
    //   const data = await getRandomFact();
    //   setFact(data)
    // }
    // fetchData();
    /* -------------------------------------------------------------------------- */
    // getRandomFact().then( value => {

    //   if( value != null){ //si value de getRandomFact trae el fact, => actualizar el fact estado y resetear el setFactError
    //     setFact(value)
    //     setFactError(null)
    //     return console.log('32 >> ', value);

    //   }else{ // lo contrario
    //     setFactError(value)
    //     setFact(null)
    //     return console.log('37 <<<', value);

    //   }
    // })

  //  setFact(getRandomFact())
  // }, []);

  /* -------------------------------------------------------------------------- */
  // //Efecto para recuperar cada vez que tenemos una cita nueva
  // useEffect(() => {
  //   if (!fact){ setImageUrl(null)
  //     return console.log('48 [App jsx] fact error?', fact) ;
  //   }else {
  //    //si no tenemos un fact un return y si si pues hacer lp de abajo
  //   const threeFirstWord = fact.split(" ", 3).join("");
  //   console.log('52 [App.jsx] fact.slplt',threeFirstWord);
  //   /* -------------------------------------------------------------------------- */
  //   console.info(
  //     "link",
  //     `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
  //   );

  //   fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.warn(response);
  //       /* --------------------- con Url encontrada en response --------------------- */
  //       // const {url} = response
  //       // console.log(url);
  //       // setImageUrl(`http://cataas.com${url}`)
  //       /* -------------------------------------------------------------------------- */
  //       const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`;
  //       setImageUrl(url);
  //     });
  //   }
  // }, [fact]);

/* --------------------------------- ----------------------------------------- */

  //mostrar error messages del estdo factError
  useEffect(() => {
    console.log('76 >> factError UseEffect:', factError);
  }, [factError]);

  // Actulizar el Fact
  const handleClick = ()=>{
  /* -------------------------- Async awiat y .then() ------------------------- */
    //con async
    // async ()=>{
      //   const newFact = await getRandomFact()
      //   setFact(newFact)
    /* --------------------------- Obtener nuevo fact --------------------------- */
    // getRandomFact().then(newFact => {
    //   setFact(newFact);
  // });
    /* -------------------------------------------------------------------------- */
    refreshCatFact() //es una funcion guardada en un custumHooks, donde guarda getrandomFact, lo mismo nomas
    }

  return (
    <main style={{ display: "grid", placeItems: "center" }}>
    
      <h1>Api De gatos &lambda;</h1>

      <h2>Fact </h2>

      <button onClick={handleClick}>Actulizar nuevo fact</button>

      {fact ? <p>{fact}</p> : <p>Error {factError}</p>}
      {factError ? <p style={{ color: "red" }} >Error {factError}</p> :  <p>{fact}</p> }
      { console.log('105 << url app.jsx ', imageUrl)}
      {imageUrl ?

        <img
          src={imageUrl}
          alt={`Image extracted from api catfact of three firstwords of fact`}
          style={{ width: "500px", height: '500px', border: '1px solid' }}
        />
        :
        <div style={{width : '100px', height: '100px', background: 'red'}}>Erro</div>
      }
    </main>
  );
}

export default App;




















/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* ------------------------ Consumir el API infinito ------------------------ */

// import React, { useEffect, useState } from "react";

// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// // const CAT_ENDPOINT_IMAGE_URL = `https://catfact.com/cat/says/${firstWord}?sieze`
// function App() {
//   const [fact, setFact] = useState();

//   useEffect(() => {
//     async function getRandomFact() {
//       const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
//       const json = await res.json();
//       setFact(json.fact);
//     }

//     getRandomFact();
//   });

//   return <div>{fact && <p>{fact} </p>}</div>;
// }
// export default App;

/* -------------------------------------------------------------------------- */

// USANDO ASYN await

// useEffect( ()=>{

//   async function getRandomFact(){
//     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
//     const json = await res.json()
//     setFact(json.fact)
//   }

//   getRandomFact()
// }, [])

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//CONSUMIENDO EL API PARA LAS PRIMERAS 3 PALABRAS DE FACT Y SOBRE ELLO TENER UNA IMG DE UN API DE GATOS
/* -------------------------------------------------------------------------- */
// import React, { useEffect, useState } from "react";

// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true';

//  function App() {

//   const [fact , setFact] = useState()
//   const [imageUrl, setImageUrl] = useState()

//   useEffect(() => {

//         fetch(CAT_ENDPOINT_RANDOM_FACT)
//           .then( response => response.json())
//           .then( data => {
//               const {fact} = data
//               setFact(fact)

//               // console.log('fact in fetch >',fact);
//               const threeFirstWord = fact.split(' ',3).join('')
//               console.log(threeFirstWord);
// /* -------------------------------------------------------------------------- */              console.info('link', `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`);

//               fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
//                 .then(res => res.json())
//                 .then( response => {
//                   console.warn(response)
//                     /* --------------------- con Url encontrada en response --------------------- */
//                     // const {url} = response
//                     // console.log(url);
//                     // setImageUrl(`http://cataas.com${url}`)
//                     /* -------------------------------------------------------------------------- */
//                   const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`
//                   setImageUrl(url)
//                 })

//           } )

//     } , []
//   )

//   return(
//     <main style={{display: 'grid', placeItems: 'center'}}>
//       <h1>Api De gatos &lambda;</h1>
//       <h2>Fact </h2>
//       {fact && <p>{fact}</p> }

//       {
//         imageUrl &&
//           <img
//             src={imageUrl}
//             alt={`Image extracted from api catfact of three firstwords of fact`}
//             style={{width : '400px'}}
//           />

//       }
//     </main>
//   )

// }

// export default App;

/* -------------------------------------------------------------------------- */










/* -------------------------------------------------------------------------- */
/* ----------------- VIDEO 4 ante des seprar todo la logica ----------------- */
/* -------------------------------------------------------------------------- */
// import React, { useEffect, useState } from "react";

// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL =
//   "https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true";

// function App() {
//   const [fact, setFact] = useState();
//   const [imageUrl, setImageUrl] = useState();
//   const [factError, setFactError] = useState();

//   const getRandomFact = ()=>{
//     fetch(CAT_ENDPOINT_RANDOM_FACT)
//     .then((response) => {
//       if(!response.ok){throw new Error('HTTP status ' + response.status);  } // Error
//       return response.json()
//     })
//     .then((data) => {
//       // const { fact } = data;
//       const factData = data.fact;
//       setFact(factData);
//     })
//     .catch((err) =>{
//       //tanto si hay error co nla respuesta
//       //tanto si hay error con la peticion  => corte internet
//       console.log('erro del catch', err);
//       setFactError('La ptm ERROR FACTORIA')
//     })
//   }

//   // Efecto par arecuperar la cita al cargar la pagina
//   useEffect(() => {
//    getRandomFact()
//   }, []);

//   //Efecto para recuperar cada vez que tenemos una cita nueva
//   useEffect(() => {
//     if (!fact) return; //si no tenemos un fact un return y si si pues hacer lp de abajo
//     const threeFirstWord = fact.split(" ", 3).join("");
//     console.log(threeFirstWord);
//     /* -------------------------------------------------------------------------- */
//     console.info(
//       "link",
//       `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
//     );

//     fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
//       .then((res) => res.json())
//       .then((response) => {
//         console.warn(response);
//         /* --------------------- con Url encontrada en response --------------------- */
//         // const {url} = response
//         // console.log(url);
//         // setImageUrl(`http://cataas.com${url}`)
//         /* -------------------------------------------------------------------------- */
//         const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`;
//         setImageUrl(url);
//       });
//   }, [fact]);

//   //mostrar error messages del estdo factError
//   useEffect(() => {
//     console.log('factError UseEffect:', factError);
//   }, [factError]);

//   // Actulizar el Fact
//   const handleClick = ()=>{
//     getRandomFact()
//   }

//   return (
//     <main style={{ display: "grid", placeItems: "center" }}>

//       <h1>Api De gatos &lambda;</h1>

//       <h2>Fact </h2>

//       <button onClick={handleClick}>Actulizar nuevo fact</button>

//       {fact ? <p>{fact}</p> : <p>Error {factError}</p>}

//       {imageUrl && (
//         <img
//           src={imageUrl}
//           alt={`Image extracted from api catfact of three firstwords of fact`}
//           style={{ width: "400px" }}
//         />
//       )}
//     </main>
//   );
// }

// export default App;
/* -------------------------------------------------------------------------- */

















/* -------------------------------------------------------------------------- */
/* ------------------------- ANTES DEL CUNSTON HOOKS 4.1------------------------ */
/* --- Con devolucion de una fact valido y de null, cuando se va el intert -- */
/* -------------------------------------------------------------------------- */

// import React, { useEffect, useState } from "react";
// import { getRandomFact } from "./services/facts";

// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL =
//   "https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true";

// function App() {
//   const [fact, setFact] = useState();
//   const [imageUrl, setImageUrl] = useState();
//   const [factError, setFactError] = useState();

//   // Efecto par arecuperar la cita al cargar la pagina
//   useEffect(() => {
//     /* ---------------------------- Con .thne y async --------------------------- */

//     // getRandomFact().then( data => {
//     //   setFact(data)
//     // } )
//     /* -------------------------------------------------------------------------- */
//     // const fetchData = async () => {
//     //   const data = await getRandomFact();
//     //   setFact(data)
//     // }
//     // fetchData();
//     /* -------------------------------------------------------------------------- */
//     getRandomFact().then( value => {

//       if( value != null){ //si value de getRandomFact trae el fact, => actualizar el fact estado y resetear el setFactError
//         setFact(value)
//         setFactError(null)
//         return console.log('>> ', value);

//       }else{ // lo contrario
//         setFactError(value)
//         setFact(null)
//         return console.log('<<<', value);

//       }
//     })

//   //  setFact(getRandomFact())
//   }, []);

//   //Efecto para recuperar cada vez que tenemos una cita nueva
//   useEffect(() => {
//     if (!fact){ setImageUrl(null)
//       return console.log('[App jsx] fact error?', fact) ;
//     }else {
//      //si no tenemos un fact un return y si si pues hacer lp de abajo
//     const threeFirstWord = fact.split(" ", 3).join("");
//     console.log('[App.jsx] fact.slplt',threeFirstWord);
//     /* -------------------------------------------------------------------------- */
//     console.info(
//       "link",
//       `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
//     );

//     fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
//       .then((res) => res.json())
//       .then((response) => {
//         console.warn(response);
//         /* --------------------- con Url encontrada en response --------------------- */
//         // const {url} = response
//         // console.log(url);
//         // setImageUrl(`http://cataas.com${url}`)
//         /* -------------------------------------------------------------------------- */
//         const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`;
//         setImageUrl(url);
//       });
//     }
//   }, [fact]);

//   //mostrar error messages del estdo factError
//   useEffect(() => {
//     console.log('factError UseEffect:', factError);
//   }, [factError]);

//   // Actulizar el Fact
//   const handleClick = ()=>{
//   /* -------------------------- Async awiat y .then() ------------------------- */
//     //con async
//     // async ()=>{
//       //   const newFact = await getRandomFact()
//       //   setFact(newFact)

//     getRandomFact().then(newFact => {
//       setFact(newFact);
//     });
//     /* -------------------------------------------------------------------------- */

//     }

//   return (
//     <main style={{ display: "grid", placeItems: "center" }}>

//       <h1>Api De gatos &lambda;</h1>

//       <h2>Fact </h2>

//       <button onClick={handleClick}>Actulizar nuevo fact</button>

//       {fact ? <p>{fact}</p> : <p>Error {factError}</p>}
//       {factError ? <p style={{ color: "red" }} >Error {factError}</p> :  <p>{fact}</p> }
//       { console.log('url app.jsx ', imageUrl)}
//       {imageUrl ?

//         <img
//           src={imageUrl}
//           alt={`Image extracted from api catfact of three firstwords of fact`}
//           style={{ width: "500px", height: '500px', border: '1px solid'}}
//         />
//         :
//         <div style={{width : '100px', height: '100px', background: 'red'}}>Erro</div>
//       }
//     </main>
//   );
// }

// export default App;
/* -------------------------------------------------------------------------- */












/* -------------------------------------------------------------------------- */
// #region 5.1
/* ------------ Funciona perfectamente con try catch y factError ------------ */
/* -------------------------------------------------------------------------- */

// import React, { useEffect, useState } from "react";
// import { getRandomFact } from "./services/facts";

// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL =
//   "https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true";

// function App() {
//   const [fact, setFact] = useState();
//   const [imageUrl, setImageUrl] = useState();
//   const [factError, setFactError] = useState();

//   // Efecto par arecuperar la cita al cargar la pagina
//   useEffect(() => {
//     /* ---------------------------- Con .thne y async --------------------------- */

//     // getRandomFact().then( data => {
//     //   setFact(data)
//     // } )
//     /* -------------------------------------------------------------------------- */
//     // const fetchData = async () => {
//     //   const data = await getRandomFact();
//     //   setFact(data)
//     // }
//     // fetchData();
//     /* -------------------------------------------------------------------------- */
//     getRandomFact().then( value => {

//       if( value != null){ //si value de getRandomFact trae el fact, => actualizar el fact estado y resetear el setFactError
//         setFact(value)
//         setFactError(null)
//         return console.log('32 >> ', value);

//       }else{ // lo contrario
//         setFactError(value)
//         setFact(null)
//         return console.log('37 <<<', value);

//       }
//     })

//   //  setFact(getRandomFact())
//   }, []);

//   //Efecto para recuperar cada vez que tenemos una cita nueva
//   useEffect(() => {
//     if (!fact){ setImageUrl(null)
//       return console.log('48 [App jsx] fact error?', fact) ;
//     }else {
//      //si no tenemos un fact un return y si si pues hacer lp de abajo
//     const threeFirstWord = fact.split(" ", 3).join("");
//     console.log('52 [App.jsx] fact.slplt',threeFirstWord);
//     /* -------------------------------------------------------------------------- */
//     console.info(
//       "link",
//       `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
//     );

//     fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
//       .then((res) => res.json())
//       .then((response) => {
//         console.warn(response);
//         /* --------------------- con Url encontrada en response --------------------- */
//         // const {url} = response
//         // console.log(url);
//         // setImageUrl(`http://cataas.com${url}`)
//         /* -------------------------------------------------------------------------- */
//         const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`;
//         setImageUrl(url);
//       });
//     }
//   }, [fact]);

//   //mostrar error messages del estdo factError
//   useEffect(() => {
//     console.log('76 >> factError UseEffect:', factError);
//   }, [factError]);

//   // Actulizar el Fact
//   const handleClick = ()=>{
//   /* -------------------------- Async awiat y .then() ------------------------- */
//     //con async
//     // async ()=>{
//       //   const newFact = await getRandomFact()
//       //   setFact(newFact)

//     getRandomFact().then(newFact => {
//       setFact(newFact);
//     });
//     /* -------------------------------------------------------------------------- */

//     }

//   return (
//     <main style={{ display: "grid", placeItems: "center" }}>
    
//       <h1>Api De gatos &lambda;</h1>

//       <h2>Fact </h2>

//       <button onClick={handleClick}>Actulizar nuevo fact</button>

//       {fact ? <p>{fact}</p> : <p>Error {factError}</p>}
//       {factError ? <p style={{ color: "red" }} >Error {factError}</p> :  <p>{fact}</p> }
//       { console.log('105 << url app.jsx ', imageUrl)}
//       {imageUrl ?

//         <img
//           src={imageUrl}
//           alt={`Image extracted from api catfact of three firstwords of fact`}
//           style={{ width: "500px", height: '500px', border: '1px solid' }}
//         />
//         :
//         <div style={{width : '100px', height: '100px', background: 'red'}}>Erro</div>
//       }
//     </main>
//   );
// }

// export default App;
/* -------------------------------------------------------------------------- */









/* -------------------------------------------------------------------------- */
// #region Custum Hooks 5.2
/* -------------------------------------------------------------------------- */
// import React, { useEffect, useState } from "react";
// import { getRandomFact } from "./services/facts";

// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL =
//   "https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true";
 
// // #region Custom Hooks  
// function useCatImage ( {fact} ){
//   const [imageUrl, setImageUrl] = useState();

//    //Efecto para recuperar cada vez que tenemos una cita nueva
//    useEffect(() => {
//     if (!fact){ setImageUrl(null)
//       return console.log('15 [App jsx] fact error?', fact) ;
//     }else {
//      //si no tenemos un fact un return y si si pues hacer lp de abajo
//     const threeFirstWord = fact.split(" ", 3).join("");
//     console.log('19 [App.jsx] fact.slplt',threeFirstWord);
//     /* -------------------------------------------------------------------------- */
//     console.info(
//       "link",
//       `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
//     );

//     fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
//       .then((res) => res.json())
//       .then((response) => {
//         console.warn(response);
//         /* --------------------- con Url encontrada en response --------------------- */
//         // const {url} = response
//         // console.log(url);
//         // setImageUrl(`http://cataas.com${url}`)
//         /* -------------------------------------------------------------------------- */
//         const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`;
//         setImageUrl(url);
//       });
//     }
//   }, [fact]);

//   return {imageUrl}  
  
// }  // HACK { return ImageUrl  https:// }

// function App() {
//   const [fact, setFact] = useState();
//   // const [imageUrl, setImageUrl] = useState(); 
//   const { imageUrl } = useCatImage( {fact})
//   const [factError, setFactError] = useState();

//   // Efecto par arecuperar la cita al cargar la pagina
//   useEffect(() => {
//     /* ---------------------------- Con .thne y async --------------------------- */
        
//     // getRandomFact().then( data => {
//     //   setFact(data)
//     // } )
//     /* -------------------------------------------------------------------------- */
//     // const fetchData = async () => {
//     //   const data = await getRandomFact();
//     //   setFact(data)
//     // }
//     // fetchData();
//     /* -------------------------------------------------------------------------- */
//     getRandomFact().then( value => {

//       if( value != null){ //si value de getRandomFact trae el fact, => actualizar el fact estado y resetear el setFactError
//         setFact(value)
//         setFactError(null)
//         return console.log('32 >> ', value);

//       }else{ // lo contrario
//         setFactError(value)
//         setFact(null)
//         return console.log('37 <<<', value);

//       }
//     })

//   //  setFact(getRandomFact())
//   }, []);

//   /* -------------------------------------------------------------------------- */
//   // //Efecto para recuperar cada vez que tenemos una cita nueva
//   // useEffect(() => {
//   //   if (!fact){ setImageUrl(null)
//   //     return console.log('48 [App jsx] fact error?', fact) ;
//   //   }else {
//   //    //si no tenemos un fact un return y si si pues hacer lp de abajo
//   //   const threeFirstWord = fact.split(" ", 3).join("");
//   //   console.log('52 [App.jsx] fact.slplt',threeFirstWord);
//   //   /* -------------------------------------------------------------------------- */
//   //   console.info(
//   //     "link",
//   //     `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
//   //   );

//   //   fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
//   //     .then((res) => res.json())
//   //     .then((response) => {
//   //       console.warn(response);
//   //       /* --------------------- con Url encontrada en response --------------------- */
//   //       // const {url} = response
//   //       // console.log(url);
//   //       // setImageUrl(`http://cataas.com${url}`)
//   //       /* -------------------------------------------------------------------------- */
//   //       const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`;
//   //       setImageUrl(url);
//   //     });
//   //   }
//   // }, [fact]);

// /* -------------------------------------------------------------------------- */

//   //mostrar error messages del estdo factError
//   useEffect(() => {
//     console.log('76 >> factError UseEffect:', factError);
//   }, [factError]);

//   // Actulizar el Fact
//   const handleClick = ()=>{
//   /* -------------------------- Async awiat y .then() ------------------------- */
//     //con async
//     // async ()=>{
//       //   const newFact = await getRandomFact()
//       //   setFact(newFact)

//     getRandomFact().then(newFact => {
//       setFact(newFact);
//     });
//     /* -------------------------------------------------------------------------- */

//     }

//   return (
//     <main style={{ display: "grid", placeItems: "center" }}>
    
//       <h1>Api De gatos &lambda;</h1>

//       <h2>Fact </h2>

//       <button onClick={handleClick}>Actulizar nuevo fact</button>

//       {fact ? <p>{fact}</p> : <p>Error {factError}</p>}
//       {factError ? <p style={{ color: "red" }} >Error {factError}</p> :  <p>{fact}</p> }
//       { console.log('105 << url app.jsx ', imageUrl)}
//       {imageUrl ?

//         <img
//           src={imageUrl}
//           alt={`Image extracted from api catfact of three firstwords of fact`}
//           style={{ width: "500px", height: '500px', border: '1px solid' }}
//         />
//         :
//         <div style={{width : '100px', height: '100px', background: 'red'}}>Erro</div>
//       }
//     </main>
//   );
// }

// export default App;
/* -------------------------------------------------------------------------- */










/* -------------------------------------------------------------------------- */
// #region Custom HOOKS 5.1
/* -------------------------------------------------------------------------- */
/* ------------------- con el cunstum hooks getrandomfact ------------------- */

// import React, { useEffect, useState } from "react";
// import { getRandomFact } from "./services/facts";
// import { useCatImage } from "./hooks/useCatImage";

// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL =
//   "https://cataas.com/cat/says/${firstword}?fontSize=50&fontColor=red&json=true";


// /* ------------- Custom hooks de obetner fact de FontFaceSet.js ------------- */
// const useCatFact = ()=>{
//   const [fact, setFact] = useState()

//   const refreshCatFact = ()=>{
//     getRandomFact().then( newFact => setFact(newFact) )

//   }

//   useEffect(()=>{
//     refreshCatFact()
//   },[])

//   return {fact, refreshCatFact}
// }
// /* -------------------------------------------------------------------------- */


// function App() {
//   const {fact, refreshCatFact} = useCatFact()
//   // const [fact, setFact] = useState()
//   // const [imageUrl, setImageUrl] = useState(); 
//   const { imageUrl } = useCatImage( {fact})
//   const [factError, setFactError] = useState();
  

//   // Efecto par arecuperar la cita al cargar la pagina
//   // useEffect(() => {
//     /* ---------------------------- Con .thne y async --------------------------- */
        
//     // getRandomFact().then( data => {
//     //   setFact(data)
//     // } )
//     /* -------------------------------------------------------------------------- */
//     // const fetchData = async () => {
//     //   const data = await getRandomFact();
//     //   setFact(data)
//     // }
//     // fetchData();
//     /* -------------------------------------------------------------------------- */
//     // getRandomFact().then( value => {

//     //   if( value != null){ //si value de getRandomFact trae el fact, => actualizar el fact estado y resetear el setFactError
//     //     setFact(value)
//     //     setFactError(null)
//     //     return console.log('32 >> ', value);

//     //   }else{ // lo contrario
//     //     setFactError(value)
//     //     setFact(null)
//     //     return console.log('37 <<<', value);

//     //   }
//     // })

//   //  setFact(getRandomFact())
//   // }, []);

//   /* -------------------------------------------------------------------------- */
//   // //Efecto para recuperar cada vez que tenemos una cita nueva
//   // useEffect(() => {
//   //   if (!fact){ setImageUrl(null)
//   //     return console.log('48 [App jsx] fact error?', fact) ;
//   //   }else {
//   //    //si no tenemos un fact un return y si si pues hacer lp de abajo
//   //   const threeFirstWord = fact.split(" ", 3).join("");
//   //   console.log('52 [App.jsx] fact.slplt',threeFirstWord);
//   //   /* -------------------------------------------------------------------------- */
//   //   console.info(
//   //     "link",
//   //     `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
//   //   );

//   //   fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
//   //     .then((res) => res.json())
//   //     .then((response) => {
//   //       console.warn(response);
//   //       /* --------------------- con Url encontrada en response --------------------- */
//   //       // const {url} = response
//   //       // console.log(url);
//   //       // setImageUrl(`http://cataas.com${url}`)
//   //       /* -------------------------------------------------------------------------- */
//   //       const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`;
//   //       setImageUrl(url);
//   //     });
//   //   }
//   // }, [fact]);

// /* --------------------------------- ----------------------------------------- */

//   //mostrar error messages del estdo factError
//   useEffect(() => {
//     console.log('76 >> factError UseEffect:', factError);
//   }, [factError]);

//   // Actulizar el Fact
//   const handleClick = ()=>{
//   /* -------------------------- Async awiat y .then() ------------------------- */
//     //con async
//     // async ()=>{
//       //   const newFact = await getRandomFact()
//       //   setFact(newFact)
//     /* --------------------------- Obtener nuevo fact --------------------------- */
//     // getRandomFact().then(newFact => {
//     //   setFact(newFact);
//   // });
//     /* -------------------------------------------------------------------------- */
//     refreshCatFact() //es una funcion guardada en un custumHooks, donde guarda getrandomFact, lo mismo nomas
//     }

//   return (
//     <main style={{ display: "grid", placeItems: "center" }}>
    
//       <h1>Api De gatos &lambda;</h1>

//       <h2>Fact </h2>

//       <button onClick={handleClick}>Actulizar nuevo fact</button>

//       {fact ? <p>{fact}</p> : <p>Error {factError}</p>}
//       {factError ? <p style={{ color: "red" }} >Error {factError}</p> :  <p>{fact}</p> }
//       { console.log('105 << url app.jsx ', imageUrl)}
//       {imageUrl ?

//         <img
//           src={imageUrl}
//           alt={`Image extracted from api catfact of three firstwords of fact`}
//           style={{ width: "500px", height: '500px', border: '1px solid' }}
//         />
//         :
//         <div style={{width : '100px', height: '100px', background: 'red'}}>Erro</div>
//       }
//     </main>
//   );
// }

// export default App;

/* -------------------------------------------------------------------------- */











