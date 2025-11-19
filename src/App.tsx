import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { useState } from 'react';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import { Gif } from './gifs/interfaces/gif.interface';

export const App = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async (term: string) => {
    setPreviousTerms((prevTerms) =>
      [term, ...prevTerms.filter((t) => t !== term)].slice(0, 5)
    );

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = '') => {
    const newQuery = query.trim().toLocaleLowerCase();

    if (newQuery === '' || previousTerms.includes(newQuery)) return;

    setPreviousTerms([newQuery, ...previousTerms].slice(0, 5));

    const gifs = await getGifsByQuery(newQuery);
    setGifs(gifs);
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
      <GifList gifs={gifs} />
    </>
  );
};
