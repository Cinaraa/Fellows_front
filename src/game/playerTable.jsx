import './PlayerTable.css';
import PlayerRed from '../assets/imgs/rojo.png'
import PlayerGreen from '../assets/imgs/Verde.png'
import PlayerBlue from '../assets/imgs/Azul.png'
import PlayerYellow from '../assets/imgs/Amarillo.png'

const PlayerTable = () => {
  return (
    <div className="player-table">

      <div className="player-row">
        <img src={PlayerRed} className="character" alt="Player Red" />
        <div className="player-info">
          <h2 className="player-name">RED</h2>
          <h2 className="player-money">100</h2>
        </div>
      </div>

      <div className="player-row">
        <img src={PlayerGreen} className="character" alt="Player Green" />
        <div className="player-info">
          <h2 className="player-name">Green</h2>
          <h2 className="player-money">12</h2>
        </div>
      </div>

      <div className="player-row">
        <img src={PlayerBlue} className="character" alt="Player Blue" />
        <div className="player-info">
          <h2 className="player-name">Blue</h2>
          <h2 className="player-money">50</h2>
        </div>
      </div>

      <div className="player-row">
        <img src={PlayerYellow} className="character" alt="Player Yellow" />
        <div className="player-info">
          <h2 className="player-name">Yellow</h2>
          <h2 className="player-money">0</h2>
        </div>
      </div>
    </div>
  );
};

export default PlayerTable;
