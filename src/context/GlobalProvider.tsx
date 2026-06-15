import { useState, useEffect, type ReactNode } from "react";

import type { Movie } from "../types/movie";
import { GlobalContext } from "./GlobalContext";

interface Props {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const savedFavs = localStorage.getItem("favorites");
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.imdbID === movie.imdbID)
        ? prev.filter((fav) => fav.imdbID !== movie.imdbID)
        : [...prev, movie],
    );
  };

  const isFavorite = (id: string) => favorites.some((fav) => fav.imdbID === id);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        favorites,
        toggleFavorite,
        isFavorite,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
