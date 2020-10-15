import React from 'react';
import './ChessBoard.css'


function ChessCell(props) {
    return (

        <td style={
            {
                width: "40px",
                height: "40px",
            }

        }
            className={(props.rowindex + props.cellIndex) % 2 === 0 && 'Black'}>

        </td>

    )



}
export default ChessCell;