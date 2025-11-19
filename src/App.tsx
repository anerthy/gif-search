import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { mockGifs } from './mock/gifs.mock';

export const App = () => {
  return (
    <>
      <CustomHeader
        title="Gif Search"
        description="Search for your favorite gifs"
      />
      <SearchBar placeholder="Search a gif" />
      <PreviousSearches
        searches={['Absolute cinema', 'This is fine', 'Snoopy']}
      />
      <GifList gifs={mockGifs} />
    </>
  );
};
