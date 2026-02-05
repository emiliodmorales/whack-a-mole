import { useGame } from "../GameContext";

export default function HighScores() {
  const { highScores } = useGame();
  return (
    <section className="high-scores">
      <h2>High Scores</h2>
      {highScores.length > 0 ? (
        highScores
          .sort((a, b) => b - a)
          .map((score, i) => <p key={i}>{score}</p>)
      ) : (
        <p>None yet... Play the game!</p>
      )}
    </section>
  );
}
