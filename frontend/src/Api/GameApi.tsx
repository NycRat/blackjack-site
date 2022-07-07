import { GameInfo } from "../Models/GameModel";

export const apiGetNewGameId = (): string => {
  return "123123"; // temp
};

export const apiGetGameInfoFromId = async (
  id: string
): Promise<GameInfo | null> => {
  return {
    gameState: 0,
    dealerCards: [],
    playerCards: [],
  };
};
