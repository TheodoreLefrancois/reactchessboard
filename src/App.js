import React from 'react';
import ChessBoard from './components/ChessBoard';
import ChessRow from './components/ChessRow';
import './components/ChessBoard.css';

function App() {
  return (
    <div className="App">
        <ChessBoard nbRow={5} nbCol={5}/>
        
    </div>
  );
}

export default App;



