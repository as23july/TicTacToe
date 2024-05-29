import SquareBox from "./SquareBox";
import "./Board.css";
const Board = ({ squarebox, onBoxClick, playerTurn }) => {
  return (
    <>
      <div className="board">
        {squarebox.map((value, index) => (
          <SquareBox
            key={index}
            playerTurn={playerTurn}
            onClick={() => onBoxClick(index)}
            value={value}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
