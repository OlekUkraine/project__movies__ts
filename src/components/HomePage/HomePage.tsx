import {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {MoviesListCard} from "../MoviesListCard";
import {movieActions} from "../../redux";
import './HomePage.css';


const HomePage: FC = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const {movies} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(movieActions.getTopRated())
    }, [])


    return (
        <div className={`HomePage ${theme}`}>
            <h1>TOP 5</h1>
            <div className={'top-rating'}>

                {
                    movies.map((movie, index) => {
                        return <MoviesListCard key={movie.id} movie={movie}/>
                    }).splice(0, 5)
                }
            </div>
        </div>
    );
};

export {
    HomePage
}