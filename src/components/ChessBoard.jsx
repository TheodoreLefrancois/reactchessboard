import React from 'react';
import ChessRow from './ChessRow';



/*const nbRows = 8
const nbColumns =8*/

function ChessBoard(props){
    let checkboard = new Array(props.nbRow).fill(" ");
    return (
        <table>
            {
                checkboard.map((_, index)=>{
                    
                    return <ChessRow rowindex={index} nbCol={props.nbCol}/> 
                })
            }
        </table>
    )

}

export default ChessBoard;