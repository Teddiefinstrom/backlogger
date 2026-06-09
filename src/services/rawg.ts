
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