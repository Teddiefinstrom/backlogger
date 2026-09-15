
export type GameStatus =
  | "wishlist"
  | "playing"
  | "completed"
  | "dropped";


  // Mock
export interface Game {
    id: number;
    title: string;
    cover: string;
    released: string;
    genres: string[];
    platforms: string[];
    status: GameStatus;

}

// Get Genre 
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string | null;

}

// Get List of genres
export interface GenreList {

  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface GamePlatform {
  platform: Platform;
}

// Get info about single game
export interface GameRawg {

  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  description: string;
  description_raw: string;
  rating: number;
  metacritic: number;
  added: number;
  genres: Genre[];
  platforms: GamePlatform[];

};

// Get list of games (tredning? data.added + data.released)
export interface GameListRawg {
  count: number;
  next: string | null;
  previous: string | null;
  results: GameRawg[];
}