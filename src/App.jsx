import { useGame } from "./GameContext";
import HomeScreen from "./home/HomeScreen";
import GameScreen from "./game/GameScreen";

export default function App() {
  const { gameStarted } = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      {gameStarted ? <GameScreen /> : <HomeScreen />}
    </>
  );
}
