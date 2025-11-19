import { useRef, useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

const LIMIT_PREVIOUS_TERMS = 5;
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    setPreviousTerms((prevTerms) =>
      [term, ...prevTerms.filter((t) => t !== term)].slice(
        0,
        LIMIT_PREVIOUS_TERMS
      )
    );

    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = '') => {
    const newQuery = query.trim().toLocaleLowerCase();

    if (newQuery === '' || previousTerms.includes(newQuery)) return;

    setPreviousTerms(
      [newQuery, ...previousTerms].slice(0, LIMIT_PREVIOUS_TERMS)
    );

    const gifs = await getGifsByQuery(newQuery);
    setGifs(gifs);

    gifsCache.current[newQuery] = gifs;
  };

  return {
    gifs,
    previousTerms,
    handleSearch,
    handleTermClicked,
  };
};
