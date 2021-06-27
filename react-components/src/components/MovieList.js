import React,{useState, useContext} from 'react'
import Movie from './Movie';
import { MovieContext } from './MovieContext';


const MovieList = () => {
    const [movies,setMovies] = useContext(MovieContext)

    return (
        <div>
            {/* {movies.map(movie =>(
               <Movie name={movie.name}
                      color ={'white'}
                      fontsize ={'white'}
                      watched
                      />

            ))} */}
            {movies.map((movie)=>(
               <ul> {movie.name}</ul>
            )
            )}
            
        </div>
    )
}

export default MovieList
