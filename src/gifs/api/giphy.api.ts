import axios from 'axios';

export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
    lang: 'es',
  },
});

// const response = await axios.get<GiphyResponse>(
//     'https://api.giphy.com/v1/gifs/search',
//     {
//       params: {
//         api_key: import.meta.env.VITE_GIPHY_API_KEY,
//         q: query,
//         limit: 10,
//         lang: 'es',
//       },
//     }
//   );
