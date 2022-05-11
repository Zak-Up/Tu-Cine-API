import './App.css';
import { useEffect, useState } from 'react';
import Movie from "./Movie";
import Filter from './Filter';
import { motion } from 'framer-motion';
import Films from './Films';
import logo from '../src/assets/nesflix.png';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=83d150cc871053eb1429b479131bd3d0&language=en&page=1';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=83d150cc871053eb1429b479131bd3d0&query=';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=83d150cc871053eb1429b479131bd3d0&language=en&page=1');

    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  /*  ===================  FILTERED START===================*/ 
  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect( () => {
    fetch(FEATURED_API)
    .then(res => res.json())
    .then(datos => {
      console.log(datos);
      setFilms(datos.results);
    });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((datos) => {
        setFilms(datos.results);
      })
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /*  ===================  FILTERED  END ===================*/ 

  return (
    <>
    <div className='nav-app'>
    <header className='header'>
        <div className='logo'>
            <a href='./index.html'>
            <img src={logo} alt=''/>
            </a>
        </div>
        <div className='buscar'>
          <form onSubmit={handleOnSubmit}>
            <label>Buscar </label>
            <input 
            className='search' 
            type="search" 
            placeholder="Encuentra tu peli..."
            value={searchTerm}
            onChange={handleOnChange}>
            </input>
          </form>
        </div>
    </header>
  </div>
  
    <div className="App">

      <div className='titulo'>
        <h1>Todo tu Cine favorito aqui:</h1>
      </div>

      <div className='film-app'>
        {films.length > 0 && films.map((film) => (
          <a href='./index.html'><Films key={film.id} {...film}/></a>
        ))}
      </div>

      <div className='movie-app'>
        <div className='titulo-filter'>
          <h1>Filtra tus pelis por género!</h1>
        </div>

        <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>

        <motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout className='popular-movies'>
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie}/>;
          })}
        </motion.div>

      </div>
    </div>
    </>
  );
}

export default App;
