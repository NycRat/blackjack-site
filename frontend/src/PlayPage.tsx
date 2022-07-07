import { useEffect, useState } from "react";
import { apiGetGameInfoFromId, apiGetNewGameId } from "./Api/GameApi";
import Card from "./Components/Card";
import CardProps from "./Models/CardModel";

const PlayPage = () => {
  const [gameId, setGameId] = useState("");
  const [dealerCards, setDealerCards] = useState<CardProps[]>([]);
  const [playerCards, setPlayerCards] = useState<CardProps[]>([]);
  const [gameState, setGameState] = useState(0);

  useEffect(() => {
    const prevGameId = localStorage.getItem("gameId");
    if (prevGameId) {
      setGameId(prevGameId);
    } else {
      // fetch new gameId
      setGameId(apiGetNewGameId());
    }
  }, []);

  useEffect(() => {
    if (!gameId) {
      return;
    }

    localStorage.setItem("gameId", gameId);

    const getGameInfo = async () => {
      const gameInfo = await apiGetGameInfoFromId(gameId);
      if (gameInfo) {
        setPlayerCards(gameInfo.playerCards);
        setDealerCards(gameInfo.dealerCards);
        setGameState(gameInfo.gameState);
      } else {
        setGameId("");
      }
    };

    getGameInfo();
  }, [gameId]);

  return (
    <div className="page">
      <h1>Play Blackjack</h1>
      <div className="game-area">
        <div className="dealer-card-area">
          {dealerCards.map((val, i) => {
            return <Card key={i} {...val} />;
          })}
        </div>
        <div className="player-card-area">
          {playerCards.map((val, i) => {
            return <Card key={i} {...val} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayPage;
