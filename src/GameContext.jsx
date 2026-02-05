import { createContext, useContext, useState, useEffect, useRef } from "react";

const NUM_HOLES = 9;
const TIME_LIMIT = 15;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [highScores, setHighScores] = useState([]);

  const [time, setTime] = useState(TIME_LIMIT);
  const timer = useRef();

  useEffect(() => {
    if (time <= 0) endGame();
  }, [time]);

  const [gameStarted, setGameStarted] = useState(false);
  const startGame = function () {
    setMoleLocation(randomHole());
    setGameStarted(true);

    timer.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  };
  const endGame = function () {
    setHighScores([...highScores, score]);
    setScore(0);
    setGameStarted(false);

    clearInterval(timer.current);
    setTime(TIME_LIMIT);
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
    time,
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
  return Math.floor(Math.random() * NUM_HOLES + 1);
}
