import GameCard from "../components/GameCard";
import { mockGames } from "../data/mockGames";

const AllGamesPage = () => {

    return (
        <>
        <div className="all-games-page">
        <section className="games-grid">
            {mockGames.map((game) => (
            <GameCard key={game.id} game={game} />
            ))}
        </section>
       </div>
        </>
    );
};

export default AllGamesPage;