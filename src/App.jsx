import "./App.css";
import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import GameState from "./components/GameState";
import FinalScore from "./components/FinalScore";
import Reset from "./components/Reset";

const PLAYER_1 = "X";
const PLAYER_2 = "O";

const winnerCalculation = (squarebox) => {
  const combo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let logic of combo) {
    const [a, b, c] = logic;
    if (
      squarebox[a] &&
      squarebox[a] === squarebox[b] &&
      squarebox[a] === squarebox[c]
    ) {
      return squarebox[a];
    }
  }
  return null;
};
const initialScore = JSON.parse(localStorage.getItem("score")) || {
  player_X: 0,
  player_O: 0,
};
function App() {
  const [squarebox, setSquarebox] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GameState.InProgress);
  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const handleClick = (index) => {
    if (winnerCalculation(squarebox)) return;

    if (squarebox[index] !== null) return;
    const newbox = [...squarebox];
    newbox[index] = playerTurn;
    setSquarebox(newbox);
    if (playerTurn === PLAYER_1) {
      setPlayerTurn(PLAYER_2);
    } else {
      setPlayerTurn(PLAYER_1);
    }
  };

  function checkWinner(squarebox, setGameState) {
    const winner = winnerCalculation(squarebox);
    if (winner) {
      if (winner === PLAYER_1) {
        setGameState(GameState.PlayerXWon);
        setScore({ ...score, player_X: score.player_X + 1 });
        setTimeout(() => resetGame(), 2000);
      } else {
        setGameState(GameState.PlayerOWon);
        setScore({ ...score, player_O: score.player_O + 1 });
        setTimeout(() => resetGame(), 2000);
      }
    } else if (!squarebox.includes(null)) {
      setGameState(GameState.Draw);

      setTimeout(() => resetGame(), 2000);
    }
  }

  useEffect(() => {
    checkWinner(squarebox, setGameState);
  }, [squarebox]);

  const resetGame = () => {
    setSquarebox(Array(9).fill(null));
    setPlayerTurn(PLAYER_1);
    setGameState(GameState.InProgress);
  };

  const handleReset= () =>{
    setScore({ ...score, player_X: 0, player_O: 0 });
    setSquarebox(Array(9).fill(null));
    setPlayerTurn(PLAYER_1);
  }
  return (
    <>
      <div className="mainContainer">
        <h1 className="text-center">Tic Tac Toe</h1>
      </div>
      <FinalScore score={score} />
      <Board
        playerTurn={playerTurn}
        squarebox={squarebox}
        onBoxClick={handleClick}
      />
      <GameOver gameState={gameState} />
      <Reset onClick={handleReset}/>
    </>
  );
}

export default App;
