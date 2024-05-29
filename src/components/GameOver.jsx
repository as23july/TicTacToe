import GameState from "./GameState";
import './GameOver.css';

function GameOver({ gameState }) {
    if (gameState === GameState.PlayerXWon) {
        return <h2 className="gameOver">X Won!</h2>;
    } else if (gameState === GameState.PlayerOWon) {
        return <h2 className="gameOver">O Won!</h2>;
    } else if (gameState === GameState.Draw){
        return <h2 className="gameOver">It's a Draw!</h2>;
    }
}

export default GameOver;
