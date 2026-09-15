import { useEffect, useState } from "react";
import type { Genre } from "../types/game";
import { getGenres } from "../services/rawg";

const GenreListPreview = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();

      setGenres(data.results);
    };

    fetchGenres();
  }, []);

  console.log(genres);

  return (
    <>
      <div className="genres-list-preview">
        {genres.map((genre) => (
          <div key={genre.id} className="genre-card">
            <img
              src={genre.image_background || undefined}
              alt={genre.name}
            />

            <h3>{genre.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreListPreview;
