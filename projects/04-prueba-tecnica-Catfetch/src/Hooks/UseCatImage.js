
import { useState, useEffect }  from "react";
// #region Custom Hooks  
export function useCatImage ( {fact} ){
    const [imageUrl, setImageUrl] = useState();
  
     //Efecto para recuperar cada vez que tenemos una cita nueva
     useEffect(() => {
      if (!fact){ setImageUrl(null)
        return console.log('10 [useCatImage.js] fact error?', fact) ;
      }else {
       //si no tenemos un fact un return y si si pues hacer lp de abajo
      const threeFirstWord = fact.split(" ", 3).join("");
      console.log('19 [App.jsx] fact.slplt',threeFirstWord);
      /* -------------------------------------------------------------------------- */
      console.info(
        "link",
        `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
      );
  
      fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
        .then((res) => res.json())
        .then((response) => {
          console.warn(response);
          /* --------------------- con Url encontrada en response --------------------- */
          // const {url} = response
          // console.log(url);
          // setImageUrl(`http://cataas.com${url}`)
          /* -------------------------------------------------------------------------- */
          const url = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`;
          setImageUrl(url);
        });
      }
    }, [fact]);
  
    return {imageUrl}  
    
  }  // HACK { return ImageUrl  https:// }