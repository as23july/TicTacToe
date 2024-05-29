import "./SquareBox.css";
import React from "react";

const SquareBox = ({onClick, playerTurn, value }) => {
    let hoverClass = null;
if(playerTurn != null && value == null){
    hoverClass = `${playerTurn}-squarebox` // Add hover class to the square box
}
const style={
    color: value === 'X' ? 'red' : 'blue'

}

  return (
    <div style={style} className={`squarebox ${hoverClass}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default SquareBox;
