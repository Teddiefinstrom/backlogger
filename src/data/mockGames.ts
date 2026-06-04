import type { Game } from "../types/game";

export const mockGames: Game[] = [
  {
    id: 1,
    title: "The Legend of Zelda: Wind Waker",
    cover:
      "zelda.jpg",
    released: "2002",
    genres: ["Adventure"],
    platforms: ["GameCube"],
    status: "wishlist",
  },
  {
    id: 2,
    title: "The Sims 2",
    cover:
      "sims2.jpg",
    released: "2004",
    genres: ["Simulation"],
    platforms: ["PC"],
    status: "completed",
  },
  {
    id: 3,
    title: "Persona 5 Royal",
    cover:
      "persona5.jpg",
    released: "2020",
    genres: ["RPG"],
    platforms: ["PS4", "PS5"],
    status: "playing",
  },
  {
    id: 4,
    title: "Animal Crossing: New Horizons",
    cover:
      "animalcrossing.jpg",
    released: "2020",
    genres: ["Simulation"],
    platforms: ["Nintendo Switch"],
    status: "wishlist",
  },
  {
    id: 5,
    title: "Baldur's Gate 3",
    cover:
      "baldur.jpg",
    released: "2023",
    genres: ["RPG"],
    platforms: ["PC", "PS5"],
    status: "playing",
  },
  {
    id: 6,
    title: "Pokémon Emerald",
    cover:
      "pokemon.jpg",
    released: "2004",
    genres: ["RPG"],
    platforms: ["Game Boy Advance"],
    status: "completed",
  },
];