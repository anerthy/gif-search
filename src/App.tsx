import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { mockGifs } from './mock/gifs.mock';
import { useState } from 'react';

export const App = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = (query: string = '') => {
    const newQuery = query.trim().toLocaleLowerCase();

    if (newQuery === '' || previousTerms.includes(newQuery)) return;

    setPreviousTerms([newQuery, ...previousTerms].slice(0, 5));
  };

  return (
    <>
      <CustomHeader
        title="Gif Search"
        description="Search for your favorite gifs"
      />
      <SearchBar placeholder="Search a gif" onQuery={handleSearch} />
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />
      <GifList gifs={mockGifs} />
    </>
  );
};
