import "./FinalScore.css";
const FinalScore = ({ score }) => {
    return (
        <div className="final-score">
            <h3>Scores</h3>
            <h4>Player X : {score.player_X}</h4>
            <h4>Player O : {score.player_O}</h4>
        </div>
    );
}

export default FinalScore;