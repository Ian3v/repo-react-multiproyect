// 7:54
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
export const getRandomFact = async () => {

  // try {

  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  if (!response.ok) {
    throw new Error("HTTP status " + response.status);
  } // Error
  const data = await response.json();
  // const { fact } = data;
  const factData = data.fact;
  //   setFact(factData);
  console.log("factData facts.js>", factData);
  
  return factData;

 
  /* -------------------------------------------------------------------------- */
  // .catch((err) =>{
  //   //tanto si hay error co nla respuesta
  //   //tanto si hay error con la peticion  => corte internet
  //   console.log('erro del catch', err);
  //   setFactError('La ptm ERROR FACTORIA')

  // })  
  /* -------------------------------------------------------------------------- */

  // }catch(e) {

    // return null


  // }
  
};

/* -------------------------------------------------------------------------- */
//esto mal esto

// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// export const getRandomFact = (setFact) =>{
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
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/* --------------------------- FontFaceSet.js 4.1 --------------------------- */
/* -------------------------------------------------------------------------- */
// 7:54
// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// export const getRandomFact = async () => {

//   try {

//   const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
//   if (!response.ok) {
//     throw new Error("HTTP status " + response.status);
//   } // Error
//   const data = await response.json();
//   // const { fact } = data;
//   const factData = data.fact;
//   //   setFact(factData);
//   console.log("factData facts.js>", factData);
  
//   return factData;
 
//   // .catch((err) =>{
//   //   //tanto si hay error co nla respuesta
//   //   //tanto si hay error con la peticion  => corte internet
//   //   console.log('erro del catch', err);
//   //   setFactError('La ptm ERROR FACTORIA')

//   // })  

//   }catch(e) {

//     return null
//     // return 'last chritsmats'

//   }
  
// };

/* -------------------------------------------------------------------------- */



//  #region 5.1 
/* -------------------------------------------------------------------------- */
/* ----------------- 5.1 Funciona muy bien con el try catch ----------------- */
/* -------------------------------------------------------------------------- */

//
// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// export const getRandomFact = async () => {

//   try {

//   const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
//   if (!response.ok) {
//     throw new Error("HTTP status " + response.status);
//   } // Error
//   const data = await response.json();
//   // const { fact } = data;
//   const factData = data.fact;
//   //   setFact(factData);
//   console.log("factData facts.js>", factData);
  
//   return factData;
 
//   // .catch((err) =>{
//   //   //tanto si hay error co nla respuesta
//   //   //tanto si hay error con la peticion  => corte internet
//   //   console.log('erro del catch', err);
//   //   setFactError('La ptm ERROR FACTORIA')

//   // })  

//   }catch(e) {

//     return null
//     // return 'last chritsmats'

//   }
  
// };

/* -------------------------------------------------------------------------- */








// #region 5.2 con Custum Hooks
/* -------------------------------------------------------------------------- */
// 7:54
// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// export const getRandomFact = async () => {

//   try {

//   const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
//   if (!response.ok) {
//     throw new Error("HTTP status " + response.status);
//   } // Error
//   const data = await response.json();
//   // const { fact } = data;
//   const factData = data.fact;
//   //   setFact(factData);
//   console.log("factData facts.js>", factData);
  
//   return factData;
//   // return 'Cateto :(';
 
//   // .catch((err) =>{
//   //   //tanto si hay error co nla respuesta
//   //   //tanto si hay error con la peticion  => corte internet
//   //   console.log('erro del catch', err);
//   //   setFactError('La ptm ERROR FACTORIA')

//   // })  

//   }catch(e) {

//     return null
//     // return 'last chritsmats'

//   }
  
// };
/* -------------------------------------------------------------------------- */