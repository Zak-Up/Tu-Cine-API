import { useEffect } from 'react';

function Filter ({ setActiveGenre, activeGenre, setFiltered, popular }) {

    useEffect(() => {
        if(activeGenre === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
        setFiltered(filtered);
    }, [activeGenre]);

    return (
        <div className='filter-container'>
            <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>Todas</button>
            <button  className={activeGenre === 35 ? "active" : ""}  onClick={() => setActiveGenre(35)}>Comedia</button>
            <button  className={activeGenre === 28 ? "active" : ""}  onClick={() => setActiveGenre(28)}>Acción</button>
            <button  className={activeGenre === 12 ? "active" : ""}  onClick={() => setActiveGenre(12)}>Aventura</button>
            <button  className={activeGenre === 16 ? "active" : ""}  onClick={() => setActiveGenre(16)}>Animación</button>
            <button  className={activeGenre === 10751 ? "active" : ""}  onClick={() => setActiveGenre(10751)}>Familiar</button>
            <button  className={activeGenre === 80 ? "active" : ""}  onClick={() => setActiveGenre(80)}>Crimen</button>
            <button  className={activeGenre === 878 ? "active" : ""}  onClick={() => setActiveGenre(878)}>Ficción</button>
            <button  className={activeGenre === 18 ? "active" : ""}  onClick={() => setActiveGenre(18)}>Drama</button>
            <button  className={activeGenre === 14 ? "active" : ""}  onClick={() => setActiveGenre(14)}>Fantasía</button>
        </div>
    )
}

export default Filter
