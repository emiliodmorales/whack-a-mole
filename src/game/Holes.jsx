import { useGame } from "../GameContext";

export default function Holes() {
  const { moleLocation, whackMole } = useGame();
  return (
    <ul className="holes">
      {Array.from({ length: 9 })
        .map((_, i) => i + 1)
        .map((hole) => (
          <li
            key={hole}
            className={hole === moleLocation ? "mole" : "hole"}
            onClick={hole === moleLocation ? whackMole : null}
          />
        ))}
    </ul>
  );
}
