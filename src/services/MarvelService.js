import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
   const { request, clearError, process, setProcess } = useHttp();

   const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   const _apiKey = 'apikey=df8911a2f5c25ff7bce1363a6b88bb90';
   const _baseOffset = 210;

   const getAllCharacters = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
      return res.data.results.map(_transformCharacter);
   };

   const getCharacterByName = async (name) => {
      const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
      return res.data.results.map(_transformCharacter);
   };

   const getCharacter = async (id) => {
      const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
      return _transformCharacter(res.data.results[0]);
   };

   const getAllComics = async (offset = 0) => {
      const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
      return res.data.results.map(_transformComics);
   };

   const getComic = async (id) => {
      const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
      return _transformComics(res.data.results[0]);
   };

   const _transformCharacter = (char) => {
      return {
         id: char.id,
         name: char.name.length > 22 ? `${char.name.slice(0, 22)}...` : char.name,
         description: char.description
            ? `${char.description.slice(0, 180)}...`
            : 'Nothing is known about that character.',
         thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url,
         comics: char.comics.items.slice(0, 10),
      };
   };

   const _transformComics = (comics) => {
      return {
         id: comics.id,
         title: comics.title,
         description: comics.description || 'There is no description.',
         pageCount: comics.pageCount ? `${comics.pageCount} pages` : 'No information about the number of pages',
         thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
         language: comics.textObjects[0]?.language || 'en-us',
         price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
      };
   };

   return {
      clearError,
      process,
      setProcess,
      getAllCharacters,
      getCharacterByName,
      getCharacter,
      getAllComics,
      getComic,
   };
};

export default useMarvelService;
