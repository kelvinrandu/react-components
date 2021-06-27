import React,{useState,createContext} from 'react'

export const MovieContext = createContext();
export const MovieProvider = (props) => {
    const [movies,setMovies]= useState([
        {id: 1, name: "legends of carma", category: "action"},
        {id: 2, name: "leauge of extraordinary", category: "action"},
        {id: 3, name: "queen of the damn", category: "action"},
        {id: 4, name: "iam", category: "action"}
    ])
    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}


