import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [highScores, setHighScores] = useState([]);

  const [gameStarted, setGameStarted] = useState(false);
  const startGame = function () {
    setMoleLocation(randomHole());
    setGameStarted(true);
  };
  const endGame = function () {
    setHighScores([...highScores, score]);
    setScore(0);
    setGameStarted(false);
  };

  const [score, setScore] = useState(0);
  const [moleLocation, setMoleLocation] = useState(randomHole());
  const whackMole = function () {
    setScore(score + 1);
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
    moleLocation,
    whackMole,
    highScores,
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
