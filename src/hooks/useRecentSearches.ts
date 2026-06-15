import { useState, useEffect } from "react";

export const useRecentSearches = () => {
  const [searches, setSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem("recentSearches");
    return saved ? JSON.parse(saved) : [];
  });

  const addSearch = (query: string) => {
    if (!query.trim()) return;
    setSearches((prev) => {
      // Filtramos por si ya existe (case insensitive) para que no se duplique
      const filtered = prev.filter(
        (s) => s.toLowerCase() !== query.toLowerCase(),
      );
      // Lo agregamos al principio y nos quedamos con los últimos 10
      const updated = [query, ...filtered].slice(0, 10);
      return updated;
    });
  };

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(searches));
  }, [searches]);

  return { searches, addSearch };
};
