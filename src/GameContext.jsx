import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameStarted, setGameStarted] = useState(false);
  const startGame = function () {
    setGameStarted(true);
  };
  const endGame = function () {
    setGameStarted(false);
  };

  const [score, setScore] = useState(0);
  const increaseScore = function () {
    setScore(score + 1);
  };

  const [moleLocation, setMoleLocation] = useState(randomHole());
  const randomizeMole = function () {
    let newLocation = moleLocation;
    while (newLocation === moleLocation) {
      newLocation = randomHole();
    }
    setMoleLocation(newLocation);
  };

  const value = {
    gameStarted,
    startGame,
    endGame,
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
