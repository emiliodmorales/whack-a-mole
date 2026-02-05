import "./game.css";
import Holes from "./Holes";
import Scoreboard from "./Scoreboard";

export default function GameScreen() {
  return (
    <>
      <Scoreboard />
      <Holes />
    </>
  );
}
