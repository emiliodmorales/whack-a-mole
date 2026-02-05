import { useGame } from "../GameContext";
import "./game.css";

export default function GameScreen() {
  const { endGame, moleLocation, whackMole, score, time } = useGame();

  return (
    <>
      <p>Score: {score}</p>
      <p>Time: {time}</p>
      <button onClick={endGame}>Restart</button>
      <section className="holes">
        {Array.from({ length: 9 })
          .map((_, i) => i + 1)
          .map((hole) => (
            <button
              key={hole}
              className={hole === moleLocation ? "mole" : "hole"}
              onClick={hole === moleLocation ? whackMole : null}
            />
          ))}
      </section>
    </>
  );
}
