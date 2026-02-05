import { useGame } from "../GameContext";
import "./home.css";
import HighScores from "./HighScores";

export default function HomeScreen() {
  const { startGame } = useGame();
  return (
    <>
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={startGame}>Play</button>
      <HighScores />
    </>
  );
}
