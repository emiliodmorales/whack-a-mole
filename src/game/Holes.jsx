import { useGame } from "../GameContext";

export default function Holes() {
  const { moleLocation, whackMole } = useGame();
  return (
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
  );
}
