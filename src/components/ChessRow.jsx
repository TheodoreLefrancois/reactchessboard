import React from 'react';
import './ChessBoard.css';
import ChessCell from './ChessCell';


function ChessRow (props){
    let checkboard = new Array(props.nbCol).fill(" ");
    console.log(checkboard)
    return (
        <tr>
            {checkboard.map((_,index)=>{
                return(<ChessCell rowindex ={props.rowindex} cellIndex= {index}/>)
            })}
        </tr>
    )
}
        




export default ChessRow;

/*function genCheckboardV2 (nbRows, nbColumns) {
    let checkboard = new Array(nbRows);
    for (let k = 0; k < nbRows ; k++){
        checkboard[k] = new Array(nbColumns);
    }
    
    for (let i = 0; i < nbRows; i++){{
        i %2 != 0 ? checkboard[i][0] = " " : checkboard[i][0] = "X";
        } 
        for (let j = 1; j < nbColumns; j++){
            checkboard[i][j-1] === "X" ? checkboard[i][j] = " " : checkboard[i][j] = "X";
        }
    }  
    console.log(checkboard)
    return checkboard;*/
    

    /*function ChessRow (){
    const nbRow = 22;
    const row = new Array (nbRows)
    for (let i=1; i<nbRow; i++ ){
        nbRow[i-1]=="x" ? nbRow[i]=" " : nbRow[i]="x"
    }
    return (
        <ul>
            {row.map((value)=>{
                return <li>{value}</li>
            })}
        </ul>
    )
}*/