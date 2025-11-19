import { KeyboardEvent, useState } from 'react';
interface Props {
  placeholder: string;
  onQuery: (term: string) => void;
}

export const SearchBar = ({ placeholder = 'Search', onQuery }: Props) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onQuery(query);
    setQuery('');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
