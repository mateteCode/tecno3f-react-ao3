import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useContext,
} from "react";
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

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined,
);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
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

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext debe usarse dentro de un GlobalProvider");
  return context;
};
