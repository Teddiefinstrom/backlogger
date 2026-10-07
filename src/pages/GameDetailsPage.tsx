import { useEffect, useState } from "react";
import type { GameRawg } from "../types/game";
import { getGame } from "../services/rawg";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState<GameRawg>();
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        if (!id) {
          throw new Error("Could not find game with that id");
        }

        const gameId = Number(id);
        const data = await getGame(gameId);
        setGame(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) return <div>Error: {error}</div>;

  if (!game) {
    return <p>Game not found</p>;
  }

  return (
    <main className="game-details-page">
      <section className="game-hero">
        <img
          style={{ width: "18rem" }}
          src={game.background_image}
          alt={game.name}
        />

        <div className="game-hero-content">
          <h1>{game.name}</h1>
          <p>{game.released}</p>
        </div>
      </section>

      <section className="game-info">
        <div className="game-main-info">
          <h2>Description</h2>
          <p>{game.description_raw}</p>
        </div>

        <aside className="game-meta">
          <div>
            <h3>Rating</h3>
            <p>{game.rating}</p>
          </div>

          <div>
            <h3>Metacritic</h3>
            <p>{game.metacritic ?? "N/A"}</p>
          </div>

          <div>
            <h3>Genres</h3>
            <div>{game.genres.map((genre) => genre.name).join(", ")}</div>
          </div>

          <div>
            <h3>Platforms</h3>
            <div>
              {game.platforms.map((plat) => plat.platform.name).join(", ")}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default GameDetailsPage;
