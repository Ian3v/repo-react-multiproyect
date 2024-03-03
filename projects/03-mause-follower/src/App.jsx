import { useState, useEffect } from "react";
import './App.css'


const FollowMouse = ()=>{

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState( {x:0, y:0} )

  const [noCursor, setNoCursor] = useState(false)

  // useEfecto Pointer move
  useEffect( 
    ()=>{
      console.log('effect', {enabled});

      const handleMove = (event)=>{
        const {clientX, clientY} = event
        console.log('handleMove()', {clientX, clientY});
        setPosition( {x:clientX, y:clientY})
      }

      if(enabled){
        window.addEventListener('pointermove', handleMove)
        
      }

      return ()=>{
        console.log('cleanup');
        window.removeEventListener('pointermove', handleMove)
      }
    },  
      [enabled]
    )

  // Change body classname

  useEffect( ()=>{
    document.body.classList.toggle('no-cursor', enabled) 

    return ()=>{
      document.body.classList.remove('cursor-crosshair')
    }
  }, [enabled])

// Cambiar el no Cursor 
  useEffect( ()=>{
    document.body.classList.toggle('no-cursor')
  }, [noCursor] )


  return(
    <main>
    <div style = {{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity:'0.8',
      pointerEvents:'none',
      left:-20,
      top:-20,
      width: 40,
      height: 40,
      // transform: 'translate(30px, 30px)'

      transform: `translate(  ${position.x}px, ${position.y}px )`
    }}>
    </div>

    <button onClick={ ()=>{ setEnabled(!enabled) }}>
      {enabled ?  'Desactivar' : 'Activar'} seguir puntero vi
    </button>
    <br></br>

    <button onClick={ ()=>{setNoCursor(!noCursor) } }> 
      Cambiar a no Cursor
    </button>
  </main>
  )
}


function App(){

  const  [mounted, setMounted] = useState(false)
  // handleMove();
  return(
      <main>
        { mounted ?  ' ' : <FollowMouse/>   }        

        {/* <button onClick={ setMounted(!mounted) }> Toggle mounted FollowMouse component </button> */}
        <button onClick={ () =>{

          const onMounted = mounted 
          
          console.log('mounted=> ', {onMounted})

          setMounted( !onMounted );
          
          }}>Toggle mounted FollowMouse Componet</button>
      </main> 
  )

}

export default App;


















// import { useEffect, useState } from 'react'

// import './App.css'

// function App() {
  
//   const [enabled, setEnabled] = useState(false)
//   const [position, setPosition] = useState({x:0 , y:0})

//   useEffect( 
//     ()=>{
//       const handleMove = (event) => {
//         const {clientX, clientY} = event

//         console.log('handleMove', {clientX, clientY});
//         setPosition({ x:clientX, y:clientY });
//         console.log("fa");
//       }
      
//       if(enabled) {
//         window.addEventListener('pointermove', handleMove)
//       }
//   }, [enabled])

//   return (
//     <>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: '#09f',
//         borderRadius:'50px',
//         opacity: 0.8,
//         pointerEvents: 'none',
//         left: -20,
//         top:  -20,
//         width:40,
//         height:40,
//         transform: `translate( ${position.x}px, ${position.y}px )`

//       }}>

//       </div>


//       <h3>Proyecto 3 mouse follower</h3>
      
//       <button onClick={ ()=>{ setEnabled(!enabled) }}> 
//       {enabled ? 'Desactivar' : 'Activar'} seguir puntero
//       </button>
    
//     </>
//   )
// }

// export default App
