import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { mockGifs } from './mock/gifs.mock';
import { useState } from 'react';

const previousSearches = ['Absolute cinema', 'This is fine', 'Snoopy'];

export const App = () => {
  const [previousTerms, setPreviousTerms] = useState(previousSearches);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  return (
    <>
      <CustomHeader
        title="Gif Search"
        description="Search for your favorite gifs"
      />
      <SearchBar placeholder="Search a gif" />
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />
      <GifList gifs={mockGifs} />
    </>
  );
};
