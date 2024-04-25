import {useState} from 'react'
import confetti from 'canvas-confetti'
import './3enraia.css'
import ComponentCube from './ComponentCube'
import './TresEnRaiaindex.css'

import Square  from './component/square'

import {TUNRS, combosGanadores} from './Constans'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './component/winnerModal'


function App() {
 
    // const [board, setBoard] = useState( ['X','X','O','X','O','X','O','X','O'] )
   
   /* ------------------ //Guardar En localStorage la Partida ------------------ */
   const [board, setBoard] = useState( 
    () => { 
        
        const boardFromStorage = window.localStorage.getItem('board')
        
        if( boardFromStorage ) {
            console.info('Sereseteo es true ', boardFromStorage);

            return JSON.parse(boardFromStorage)
        } else {
            return Array(9).fill(null)
        }
        
    }
)

const [turn, setTurn] = useState( ()=>{

    const turnStorage = window.localStorage.getItem('turn');

    if( turnStorage){
        console.warn(turnStorage);
        return turnStorage
    }else{
        return TUNRS.X
    }

})



const [winner, setWinner] = useState( null)

/* --------------------------- RESETEANDO EL JUEOG -------------------------- */


const resetGame = () =>{



    setBoard(Array(9).fill(null))
    setTurn(TUNRS.X)
    setWinner(null) 

    window.localStorage.removeItem('board')
    
}


/* ------------------ COrazon de casi todo la funcionalidad ----------------- */
const updateBoard = (index)=>{
    // console.log("updateBoard ",index);

    /* ---------------------------- No sobre escribir --------------------------- */
    // Si ya tiene algo borar [index] returnar 

    // No funciona si en ese lugar del cuadrado  ya hay o👌 si hay un ganador
    if( board[index] || winner) { console.warn('Ya hay un elemnto O hay un ganador'); return }
    
    /* ---------------------------- LLenado de board ---------------------------- */
    const newBoard = [...board]
    
    newBoard[index] = turn
    
    // Actualizando el tablero board con lo ultimo
    setBoard(newBoard)

/* -------------------------------------------------------------------------- */
    // const newTurn =   turn === TUNRS.X ? TUNRS.O : TUNRS.X;
    let newTurn;
    if(turn === TUNRS.X){
        newTurn = TUNRS.O
    }else{
        newTurn = TUNRS.X
    }
    
    setTurn(newTurn)

    
    /* ---------------------- GAURDAR PARTIDA LOCAL STORAGE 👆 --------------------- */
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
    /* -------------------------------------------------------------------------- */


    //Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)

    /* -------------------------------------------------------------------------- */
    // PROBLEMA DE LA ASYNCRONIA
    // if(newWinner){
    //     setWinner(newWinner) //El estado es Asyncrono, esto ocurre simultaneamente, no bloqua ninguna operacion, se ejecuta ya 
    //     alert(`El ganador es ${newWinner}`) //POr ese este alert, se muestra antes de q la X o O, se meustre en el ultimo tablero
    // }

    /* -------------------------------------------------------------------------- */
    // FIXED DE LA ASYNCRONIA
    if(newWinner) {
        setWinner((previeWinner)=>{ //Este seria la manera de acceder al estado anteriror y al nuevo
            
            confetti()
            console.log(`Ganador: ${newWinner}, el anteriror era: ${previeWinner}`);
            // alert(`GANADOR ES ${newWinner}`)
            return newWinner
        })
    }else if(checkEndGame(newBoard)) {
        setWinner(false) // Fales EMpate
    }

    

}


return(

    <div className='main-cont board'>
        <h1>3 en raia</h1>
    <button onClick={resetGame}>Reset JUEGO</button>
        <section className='game'>

            { 
                
                board.map( (_, index)=>{

                    return ( 
                        
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {board[index]}
                            {/* {index} */}
                        </Square>
                    
                    )
                })  
            }

        </section>

        <section className='turn'>

            <Square isSelected= {turn === TUNRS.X}> 
                {TUNRS.X}
            </Square>

            <Square isSelected= {turn === TUNRS.O}>
                {TUNRS.O}

            </Square>

        </section>

       <WinnerModal winner={winner} resetGame={resetGame}/>

    </div>

)

}

export default App


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
// 🟡 Codigo hecho con Puro for
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


// import {useState} from 'react'

// import './3enraia.css'
// import ComponentCube from './ComponentCube'
// import './TresEnRaiaindex.css'

// const TUNRS ={
//     X : 'X',
//     O:'O'
// }


//     const Square = ({children, updateBoard, index, key, isSelected}) =>{

//         const className = `square ${isSelected ? 'is-selected' :''}`
    

//         const handleClick = () =>{
//             // console.log(' handleClick');
//             updateBoard(index)
        
//         }

//         return(
//             // <div className='square'>
//             <div className={className}  onClick={handleClick}> 
//                 {children}
//             </div>
//         )
//     }

//     const combosBoard = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],

//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
    
//         [0,4,8],
//         [2,4,6]
//     ]


// function TresEnRaia(){  
//     // const [board, setBoard] = useState( ['X','X','O','X','O','X','O','X','O'] )
//    const [board, setBoard] = useState( Array(9).fill(null))
//    const [turn, setTurn] = useState(TUNRS.X)


//    const winner = (newBoard) =>{

//         //Hacemos una copia de testNewBoard
//         let testNewBoard = [...newBoard]        
//         console.table(testNewBoard);
    
//         for(let i = 0; i < testNewBoard.length; i++){
//             console.log(i);
       
//             // console.log(combosBoard[i]); 
//             if(combosBoard[i] === undefined){ 
//                 return
//             }else{

//                 let combosInternosBoard = []
//                 combosInternosBoard = combosBoard[i]

//                 for(let j = 0; j < combosInternosBoard.length; j++){
//                     let cero = combosInternosBoard[0]
//                     let uno = combosInternosBoard[1]
//                     let dos = combosInternosBoard[2]
                
//                     // console.table(cero,uno,dos);
                
//                         if( testNewBoard[cero] != null && testNewBoard[cero] === testNewBoard[uno] && testNewBoard[cero] === testNewBoard[dos]){
//                             alert(' HAY GANADOR DE '+ testNewBoard[cero] )

//                             return setBoard( Array(9).fill(null))
//                         }
            

//                 }
//             }

//         }

//         console.log('%c>>>>>>>>','font-size:30px; color:red;');
//    }


//     /* ------------------ COrazon de casi todo la funcionalidad ----------------- */
//    const updateBoard = (index)=>{
//         // console.log("updateBoard ",index);

//         /* ---------------------------- No sobre escribir --------------------------- */
//         // Si ya tiene algo borar [index] returnar 

    
//         if( board[index]) return
    
//         /* ---------------------------- LLenado de board ---------------------------- */
//         const newBoard = [...board]
    
//         newBoard[index] = turn
    
//         // Actualizando el tablero board con lo ultimo
//         setBoard(newBoard)


//         const newTurn =   turn === TUNRS.X ? TUNRS.O : TUNRS.X;
//         setTurn(newTurn)

//         winner(newBoard)

//    }


//     return(

//         <div className='main-cont board'>
//             <h1>3 en raia</h1>

//             <section className='game'>

//                 { 
                
//                     board.map( (_, index)=>{

//                         return ( 
                        
//                             <Square
//                                 key={index}
//                                 index={index}
//                                 updateBoard={updateBoard}
//                             >
//                                 {board[index]}
//                                 {/* {index} */}
//                             </Square>
                    
//                         )
//                     })  
//                 }

//             </section>

//             <section className='turn'>

//                 <Square isSelected= {turn === TUNRS.X}> 
//                     {TUNRS.X}
//                 </Square>

//                 <Square isSelected= {turn === TUNRS.O}>
//                     {TUNRS.O}

//                 </Square>

//             </section>
//         </div>

//     )

// }

// export default TresEnRaia



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
// 👆 con puro MAP
// 🚀 Mi CODIGO QUE FUNCIONA CON MAP Y ALG MAS PARA EL GANAR DE 3 N RAI  ❤️❤️❤️
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


// import {useState} from 'react'

// import './3enraia.css'
// import ComponentCube from './ComponentCube'
// import './TresEnRaiaindex.css'

// const TUNRS ={
//     X : 'X',
//     O:'O'
// }


//     const Square = ({children, updateBoard, index, key, isSelected}) =>{

//         const className = `square ${isSelected ? 'is-selected' :''}`
    

//         const handleClick = () =>{
//             // console.log(' handleClick');
//             updateBoard(index)
        
//         }

//         return(
//             // <div className='square'>
//             <div className={className}  onClick={handleClick}> 
//                 {children}
//             </div>
//         )
//     }

//     const combosBoard = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],

//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
    
//         [0,4,8],
//         [2,4,6]
//     ]


// function TresEnRaia(){



//     // const [board, setBoard] = useState( ['X','X','O','X','O','X','O','X','O'] )
//    const [board, setBoard] = useState( Array(9).fill(null))

//    const [turn, setTurn] = useState(TUNRS.X)


//    const winner = (newBoard) =>{


//         console.log(combosBoard);
//         console.log(newBoard);

//         let testNewBoard = [...newBoard]
//         let siHuboComo = 0

//             combosBoard.some( (ArrayInterno,indice,todoElArray,d,e) => {

//                 // console.log('%cB - indice de todo','font-size:20px; color:blue',indice);
//                 // console.log('A - Array interno',ArrayInterno);
//                 // console.log('C - todo el array',todoElArray);

//                 let combitos = []

//                 for (var u = 0; u < ArrayInterno.length ; u++) {
//                     console.info(ArrayInterno[u]);
//                     let index = ArrayInterno[u]
//                     console.warn(testNewBoard[index]);

//                     combitos.push(testNewBoard[index]); 
                
//                 }

//                 // console.log('%cCombitos','font-size:40px',combitos);

//                 // console.warn(combitos[0]);
//                 // console.warn(combitos[1]);
//                 // console.warn(combitos[2]);
            
//                 if(combitos[0] === combitos[1] && combitos[0] === combitos[2]){
//                     if(combitos[0] === null){
//                         return;
//                     }

//                     console.log('%csi hay combo de','font-size:90px:; color:green', combitos[2]);
//                     alert('combo de ',combitos[2])

//                     siHuboComo = siHuboComo + 1;
//                     testNewBoard =  Array(9).fill(null)
//                     setBoard(testNewBoard)
//                     return true;
//                 }


//             })
            
//    }


//     /* ------------------ COrazon de casi todo la funcionalidad ----------------- */
//    const updateBoard = (index)=>{
//         // console.log("updateBoard ",index);

//         /* ---------------------------- No sobre escribir --------------------------- */
//         // Si ya tiene algo borar [index] returnar 

    
//         if( board[index]) return
    
//         /* ---------------------------- LLenado de board ---------------------------- */
//         const newBoard = [...board]
    
//         newBoard[index] = turn
    
//         // Actualizando el tablero board con lo ultimo
//         setBoard(newBoard)


//         const newTurn =   turn === TUNRS.X ? TUNRS.O : TUNRS.X;
//         setTurn(newTurn)

//         winner(newBoard)

//    }


//     return(

//         <div className='main-cont board'>
//             <h1>3 en raia</h1>

//             <section className='game'>

//                 { 
                
//                     board.map( (_, index)=>{

//                         return ( 
                        
//                             <Square
//                                 key={index}
//                                 index={index}
//                                 updateBoard={updateBoard}
//                             >
//                                 {board[index]}
//                                 {/* {index} */}
//                             </Square>
                    
//                         )
//                     })  
//                 }

//             </section>

//             <section className='turn'>

//                 <Square isSelected= {turn === TUNRS.X}> 
//                     {TUNRS.X}
//                 </Square>

//                 <Square isSelected= {turn === TUNRS.O}>
//                     {TUNRS.O}

//                 </Square>

//             </section>
//         </div>

//     )

// }

// export default TresEnRaia



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

