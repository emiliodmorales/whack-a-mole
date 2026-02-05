import { createContext, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const value = {};
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);
  if (!value) {
    throw Error("useGame must be used within a GameProvider");
  }

  return value;
}
