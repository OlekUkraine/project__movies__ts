import {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {findActions, genreActions} from "../../redux";
import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating";
import {IMovie} from "../../interfaces";
import {IMovieInit} from "../../types";
import './MovieInfo.css';


const MovieInfo: FC = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const {genres} = useAppSelector(state => state.genreReducer);
    const [newArr, setNewArr] = useState<IMovieInit[]>([])
    const {state: movie} = useAppLocation<IMovie>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {title, overview, vote_average, genre_ids} = movie;


    useEffect(()=>{
        dispatch(findActions.trigger(false));
    },[])

    const handleLMoviesListClick = (genre: IMovieInit) => {
        dispatch(findActions.addGenresToList(genre.id));
        navigate(`/movies`);
    };

    useEffect(()=>{

        if (genre_ids.length > 0) {
            dispatch(genreActions.getAll());

            for (let i = 0; i < genre_ids.length; i++) {
                for (let j = 0; j < genres.length; j++) {
                    if (genre_ids[i] === genres[j].id) {
                        setNewArr(prev => [...prev, genres[j]])
                    }
                }
            }
        }

    }, [])

    const renderGenreButtons = () => {
        const buttons = [];
        const countGenres = newArr.length;

        for (let i = 0; i < countGenres; i++) {
            const {name} = newArr[i];
            buttons.push(<button
                key={i}
                className={'info-genre-btn'}
                onClick={() => handleLMoviesListClick(newArr[i])}
            >{name}</button>)
        }
        return buttons;
    };

    const handleBackClick = () => {
        dispatch(findActions.delGenres);
        dispatch(findActions.togglePage(1))
        navigate('../');
    };

    return (
        <div key={title} className={`MovieInfo ${theme}`}>
            <div className={'MovieInfo__all-info'}>

                <div className={'all-info__left-block'}>
                    <div className={'all-info__poster'}>
                        <PosterPreview movie={movie}/>
                    </div>
                </div>

                <div className={'all-info__right-block'}>
                    <div className={'all-info__title'}>
                        {title}
                    </div>

                    <div className={'all-info__rating'}>
                        <StarsRating vote_average={vote_average}/>
                    </div>

                    <div className={'all-info__genres'}>
                        {renderGenreButtons()}
                    </div>

                    <div className={'all-info__description'}>
                        <div className={'all-info__text-title'}>Description</div>
                        <div className={'all-info__text'}>{overview}</div>
                    </div>
                </div>

            </div>
            <div className={'MovieInfo__back'}>
                <div className={'back'} onClick={handleBackClick}>back</div>
            </div>
        </div>
    );
};

export {
    MovieInfo
}