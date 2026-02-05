import { useGame } from "../GameContext";
import "./game.css";

export default function GameScreen() {
  const { endGame } = useGame();
  return <button onClick={endGame}>Quit</button>;
}
