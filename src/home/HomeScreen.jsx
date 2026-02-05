import { useGame } from "../GameContext";
import "./home.css";

export default function HomeScreen() {
  const { startGame } = useGame();
  return <button onClick={startGame}>Play</button>;
}
