import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const setContent = (process, Component, newItemLoading) => {
   switch (process) {
      case 'waiting':
         return <Spinner />;

      case 'loading':
         return newItemLoading ? <Component /> : <Spinner />;

      case 'confirmed':
         return <Component />;

      case 'error':
         return <ErrorMessage />;

      default:
         throw new Error('❌ Unexpected process state');
   }
};

const ComicsList = () => {
   const [comicsList, setComicsList] = useState([]);
   const [newItemLoading, setNewItemLoading] = useState(false);
   const [offset, setOffset] = useState(0);
   const [comicsEnded, setComicsEnded] = useState(false);

   const { getAllComics, process, setProcess } = useMarvelService();

   useEffect(() => {
      onRequest(offset, true);
      // eslint-disable-next-line
   }, []);

   const onRequest = (offset, initial) => {
      initial ? setNewItemLoading(false) : setNewItemLoading(true);
      getAllComics(offset)
         .then(onComicsListLoaded)
         .then(() => setProcess('confirmed'));
   };

   const onComicsListLoaded = async (newComicsList) => {
      let ended = false;
      if (newComicsList.length < 8) {
         ended = true;
      }

      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      for (let comic of newComicsList) {
         await delay(300);
         setComicsList((comicsList) => [...comicsList, comic]);
      }

      setComicsList((comicsList) => [...comicsList, ...newComicsList]);
      setNewItemLoading(false);
      setOffset((offset) => offset + 8);
      setComicsEnded(ended);
   };

   function renderItems(arr) {
      const items = arr.map((item) => {
         return (
            <CSSTransition key={item.id} timeout={500} classNames="comics__item">
               <li className="comics__item">
                  <Link to={`/comics/${item.id}`}>
                     <img src={item.thumbnail} alt={item.title} className="comics__item-img" />
                     <div className="comics__item-name">{item.title}</div>
                     <div className="comics__item-price">{item.price}</div>
                  </Link>
               </li>
            </CSSTransition>
         );
      });

      return (
         <ul className="comics__grid">
            <TransitionGroup component={null}>{items}</TransitionGroup>
         </ul>
      );
   }

   return (
      <div className="comics__list">
         {setContent(process, () => renderItems(comicsList), newItemLoading)}
         <button
            className="button button__main button__long"
            disabled={newItemLoading}
            style={{ display: comicsEnded ? 'none' : 'block' }}
            onClick={() => onRequest(offset)}
         >
            <div className="inner">load more</div>
         </button>
      </div>
   );
};

export default ComicsList;
