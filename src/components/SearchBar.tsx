import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { FaTimes } from "react-icons/fa";

interface SearchBarProps {
  onQuery: (query: string) => void;
  initialSearchTerm: string;
}

export const SearchBar = ({ onQuery, initialSearchTerm }: SearchBarProps) => {
  const [query, setQuery] = useState(initialSearchTerm);

  // Sincroniza el estado local si la query cambia desde afuera (ej: al tocar un badge)
  useEffect(() => {
    setQuery(initialSearchTerm);
  }, [initialSearchTerm]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onQuery(query);
  };

  const handleClear = () => {
    setQuery("");
    onQuery(""); // Ejecuta la búsqueda vacía instantáneamente
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="input-wrapper">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Buscar películas..."
        />
        {query && (
          <button
            type="button"
            className="clear-btn"
            onClick={handleClear}
            title="Borrar búsqueda"
          >
            <FaTimes />
          </button>
        )}
      </div>
      <button type="submit">Buscar</button>
    </form>
  );
};
