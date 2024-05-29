import "./Reset.css";
function Reset({ onClick }) {
  return (
    <div className="resetbutton">
      <button onClick={onClick}>Reset Game</button>
    </div>
  );
}
export default Reset;
