import { Button } from "react-bootstrap";
import { mockGames } from "../data/mockGames";
import GameCard from "./GameCard";

const GameCarousel = () => {
  return (
    <div className="game-carousel">
      <h2>Trending Games</h2>

      <div className="game-carousel__text">
      <p>Most popular games right now</p>
      <Button variant="light">See all</Button>
      </div>

<div className="game-carousel__list">
      {mockGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      </div>
    </div>
  );
};

export default GameCarousel;
