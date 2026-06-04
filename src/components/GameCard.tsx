import type { Game } from "../types/game";


type GameCardProps = {
    game: Game;
};

const GameCard = ( { game }: GameCardProps ) => {

    return (
     <article>
      <img style={{ width: '18rem', height: '27rem'}} src={game.cover} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.released}</p>
      <p>{game.status}</p>
    </article>
  
    );
};

export default GameCard;