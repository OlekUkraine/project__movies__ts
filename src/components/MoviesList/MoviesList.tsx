import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions, findActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard";
import './MoviesList.css';



const MoviesList: FC = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const {movies, total_results} = useAppSelector(state => state.movieReducer);
    const {addGenres, page: thisPage, addNameMovies: title} = useAppSelector(state => state.findMoviesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(findActions.togglePage(1));
    }, [])



    useEffect(() => {
        const page = thisPage || 1;

        if (addGenres.length > 0) {
            dispatch(movieActions.getByGenres({genreId: addGenres.join(), page}))
        }

        if (addGenres.length <= 0 && title === null) {
            dispatch(movieActions.getMovies(page))
        }

        if (addGenres.length <= 0 && title !== null) {
            dispatch(movieActions.searchMovies({query: title, page}));
        }
    }, [dispatch, thisPage, title, addGenres])


    return (
        <div className={`MoviesList ${theme}`}>
            <div className={'MoviesList__list'}>
                {!!total_results?
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>):
                    <div className={'no-movies'}>
                        <h1>There are no movies</h1>
                        <h1>for your request</h1>
                    </div>
                }
            </div>

        </div>
    );
};

export {
    MoviesList
}