import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {MoviesListCard} from "../MoviesListCard";
import {Pagination} from "../Pagination";
import {movieActions} from "../../redux";
import './MoviesList.css';


interface IProps {

}

const MoviesList: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const {movies, movie_result} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])

    console.log(movie_result);

    useEffect(() => {
        const page = +query.get('page') || 1;
        const title = query.get('query');

        if (title) {
            dispatch(movieActions.searchMovies({query: title, page}));
        } else {
            dispatch(movieActions.getMovies(page))
        }
    }, [dispatch, query])


    return (
        <div className={`MoviesList ${theme}`}>
            {/*<div className={'MoviesList__genre'}>*/}
            {/*    */}
            {/*</div>*/}

            <div className={'MoviesList__list'}>
                <Pagination/>
                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
                <Pagination/>
            </div>

        </div>
    );
};

export {
    MoviesList
}