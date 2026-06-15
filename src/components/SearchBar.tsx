import { useState, type ChangeEvent, type SubmitEvent } from "react";

interface SearchBarProps {
  onQuery: (query: string) => void;
  initialSearchTerm: string;
}

export const SearchBar = ({ onQuery, initialSearchTerm }: SearchBarProps) => {
  const [query, setQuery] = useState(initialSearchTerm);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ): void => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onQuery(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar películas..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
