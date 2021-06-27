import React from 'react'
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import MovieList from "../components/MovieList";
import Movie from "../components/Movie";
import {AddMovies} from '../components/AddMovies';
import {MovieProvider,MovieContext} from '../components/MovieContext'


const dashboard2 = () => {
    return (
        <div style={{overflow: 'hidden'}}>
    <MovieProvider>
    <NavBar/>
    <MovieList/>
    <AddMovies/>
    </MovieProvider>

    </div>)
}

export default dashboard2
