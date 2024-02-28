import { useEffect, useState } from 'react'

import './App.css'

function App() {
  
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0 , y:0})

  useEffect( 
    ()=>{
      const handleMove = (event) => {
        const {clientX, clientY} = event

        console.log('handleMove', {clientX, clientY});
        setPosition({ x:clientX, y:clientY });
      }
      
      if(enabled) {
        window.addEventListener('pointermove', handleMove)
      }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius:'50px',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top:  -20,
        width:40,
        height:40,
        transform: `translate( ${position.x}px, ${position.y}px )`

      }}>

      </div>


      <h3>Proyecto 3 mouse follower</h3>
      
      <button onClick={ ()=>{ setEnabled(!enabled) }}> 
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    
    </>
  )
}

export default App
