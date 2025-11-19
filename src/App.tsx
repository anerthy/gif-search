import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { useGifs } from './gifs/hooks/useGifs';

export const App = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

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
      <GifList gifs={gifs} />
    </>
  );
};
