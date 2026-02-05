import { useGame } from "../GameContext";
import "./game.css";
import Holes from "./Holes";

export default function GameScreen() {
  const { endGame, score, time } = useGame();

  return (
    <>
      <p>Score: {score}</p>
      <p>Time: {time}</p>
      <button onClick={endGame}>Restart</button>
      <Holes />
    </>
  );
}
