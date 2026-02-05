import { useGame } from "../GameContext";

export default function Scoreboard() {
  const { endGame, score, time } = useGame();
  return (
    <section className="scoreboard">
      <p>Score: {score}</p>
      <p>Time: {time}</p>
      <button onClick={endGame}>Restart</button>
    </section>
  );
}
