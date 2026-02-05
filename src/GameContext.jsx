import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [moleLocation, setMoleLocation] = useState(randomHole());

  const increaseScore = function () {
    setScore(score + 1);
  };

  const randomizeMole = function () {
    let newLocation = moleLocation;
    while (newLocation === moleLocation) {
      newLocation = randomHole();
    }
    setMoleLocation(newLocation);
  };

  const value = {
    gameStarted,
    setGameStarted,
    score,
    increaseScore,
    moleLocation,
    randomizeMole,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);
  if (!value) {
    throw Error("useGame must be used within a GameProvider");
  }

  return value;
}

function randomHole() {
  return Math.floor(Math.random() * 9 + 1);
}
