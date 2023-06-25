import './Game.css';
import {useState } from "react";
import Board from './Board';
import Logo from '../assets/imgs/Logo.png';
import PlayerTable from './PlayerTable';

function Pagina() {
  return (
    <div className="pagina">
      
      <p>Game</p>
    </div>
  );
}

function Game() {
  const [diceResult, setDiceResult] = useState("");

  const rollDice = () => {
    // Lógica para generar un número aleatorio entre 1 y 6 (resultado del dado)
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);
  };
  return (
    <div className="game">
      <div className="logo-game-page">
        <img src={Logo} alt="Logo" />
        </div>
      <div className="pagina">
      <Pagina />
        </div>
      <div className="Board">
        <Board />
        </div>
      <div className="table">
        <PlayerTable />
        </div>
      
      <button className="dice">Dice!</button>
      <div>
      <button onClick={rollDice}>Lanzar Dado</button>
      {diceResult && <p>Resultado: {diceResult}</p>}
    </div>
      

      </div>
  );
}

export default Game;
