import { motion } from "framer-motion";

function Movie({ movie }) {
    return(
        <motion.div layout>
            <div className="movie">
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt=""/>
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <span>{movie.vote_average}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Movie;