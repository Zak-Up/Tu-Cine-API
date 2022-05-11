import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Films = ( { title, poster_path, overview, vote_average } ) => {
    return (
        <div className='film'>
            <img src={IMG_API + poster_path} alt={title}/>
            <div className='film-info'>
                <h2>{title}</h2>
                <span>{vote_average}</span>
            </div>
            <div className='stars'>
                <h6>⭐⭐⭐⭐⭐</h6>
            </div>

            <div className='film-over'>
                <h2>Synopsis:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Films
