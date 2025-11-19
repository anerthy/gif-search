import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { mockGifs } from './mock/gifs.mock';
import { useState } from 'react';

export const App = () => {
  const [previousTerms, setPreviousTerms] = useState(['Absolute cinema']);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = (query: string) => {
    setPreviousTerms((prevTerms) => [...prevTerms, query]);
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
