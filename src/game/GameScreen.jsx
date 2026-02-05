import { useEffect, useRef, useState } from "react";
import { useGame } from "../GameContext";
import "./game.css";

export default function GameScreen() {
  const { endGame, moleLocation, whackMole, score } = useGame();
  // Timer
  const [time, setTime] = useState(useRef(15));
  setInterval(() => {
    setTime({ current: time.current - 1 });
  }, 1000);
  useEffect(() => {
    if (time.current <= 0) endGame();
  });

  return (
    <>
      <p>Score: {score}</p>
      <p>Time: {time.current}</p>
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
