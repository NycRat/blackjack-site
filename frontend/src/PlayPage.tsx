import { useEffect, useState } from "react";
import Card from "./Components/Card";
import CardProps, { CardSuits, CardValues } from "./Models/CardModel";

const PlayPage = () => {
  const [gameId, setGameId] = useState("");
  const [deck, setDeck] = useState<CardProps[]>([]);
  const [dealerCards, setDealerCards] = useState<CardProps[]>([]);
  const [playerCards, setPlayerCards] = useState<CardProps[]>([]);
  const [gameState, setGameState] = useState(0);

  const suffleCards = (cards: CardProps[]) => {
    let newCards = [];
    for (let i = 0; i < cards.length; i++) {}
  };

  useEffect(() => {
    const gameId = localStorage.getItem("gameId");
    if (gameId) {
      setGameId(gameId);
    } else {
      // fetch new gameId
    }
    // fetch cards from gameId
    //
    // temp before backend
    let newDeck = [];
    for (let i = 0; i < 52; i++) {
      newDeck.push({
        value: CardValues[i % 13],
        suit: CardSuits[Math.floor(i / 13)],
      });
    }
    setDeck(newDeck);
  }, []);

  useEffect(() => {
    console.log(deck);
  }, [deck]);

  return (
    <div className="page">
      <h1>Play Blackjack</h1>
      <div className="game-area"></div>
    </div>
  );
};

export default PlayPage;
