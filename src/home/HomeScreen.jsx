import { useGame } from "../GameContext";
import "./home.css";

export default function HomeScreen() {
  const { startGame, highScores } = useGame();
  return (
    <>
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={startGame}>Play</button>
      <section className="high-scores">
        <h2>High Scores</h2>
        {highScores
          .sort((a, b) => b - a)
          .map((score, i) => (
            <p key={i}>{score}</p>
          ))}
      </section>
    </>
  );
}
