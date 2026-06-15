import { createContext } from "react";
import type { Movie } from "../types/movie";

interface GlobalContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (id: string) => boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType,
);
