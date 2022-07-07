import CardProps from "./CardModel";

export interface GameInfo {
  gameState: number; // temp
  dealerCards: CardProps[];
  playerCards: CardProps[];
}
