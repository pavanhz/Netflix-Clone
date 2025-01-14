import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'

const Row = ({ title, fetchURL, isLargeRow }) => {

    const [movies, setMovies] = useState([])
    const base_URL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchURL])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        < img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`} alt={movie.name} />
                    )
                ))}
            </div>
        </div>
    )
}

export default Row