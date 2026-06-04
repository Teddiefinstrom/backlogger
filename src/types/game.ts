
export type GameStatus =
  | "wishlist"
  | "playing"
  | "completed"
  | "dropped";

export interface Game {
    id: number;
    title: string;
    cover: string;
    released: string;
    genres: string[];
    platforms: string[];
    status: GameStatus;

}

