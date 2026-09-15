import type { GameRawg, GenreList } from "../types/game";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export async function searchGames(query: string) {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
}

export async function getGenres(): Promise<GenreList> {
const response = await fetch(
  `https://api.rawg.io/api/genres?key=${API_KEY}`
);

if(!response.ok) {
  throw new Error("Failed to fetch genres");
}

return response.json();
}

export async function getGame(id: number): Promise<GameRawg> {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
  )


if(!response.ok) {
  throw new Error("Failed to fetch game");
}

return response.json();
}

const data = await getGame(22511);
console.log(data);