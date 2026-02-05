import { useGame } from "../GameContext";
import "./home.css";

export default function HomeScreen() {
  const { startGame, highScores } = useGame();
  return (
    <>
      <button onClick={startGame}>Play</button>
      <section className="high-scores">
        {highScores
          .sort((a, b) => b - a)
          .map((score, i) => (
            <p key={i}>{score}</p>
          ))}
      </section>
    </>
  );
}
