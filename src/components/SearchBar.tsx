import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { FaTimes } from "react-icons/fa";

interface SearchBarProps {
  onQuery: (query: string) => void;
  initialSearchTerm: string;
}

export const SearchBar = ({ onQuery, initialSearchTerm }: SearchBarProps) => {
  const [query, setQuery] = useState(initialSearchTerm);
  const [prevSearchTerm, setPrevSearchTerm] = useState(initialSearchTerm);

  if (initialSearchTerm !== prevSearchTerm) {
    setPrevSearchTerm(initialSearchTerm);
    setQuery(initialSearchTerm);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onQuery(query);
  };

  const handleClear = () => {
    setQuery("");
    onQuery("");
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
