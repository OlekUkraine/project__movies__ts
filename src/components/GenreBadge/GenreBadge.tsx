import {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions, findActions} from "../../redux";
import {IMovieInit} from "../../types";
import './GenreBadge.css';

const GenreBadge: FC = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const [nameArr, setNameArr] = useState<JSX.Element[]>([])
    const {genres} = useAppSelector(state => state.genreReducer);
    const {addGenres} = useAppSelector(state => state.findMoviesReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLMoviesListClick = () => {
        navigate(`/movies`);
    };

    useEffect(() => {
        dispatch(genreActions.getAll());
        dispatch(findActions.delGenres());
        dispatch(findActions.delName());
        dispatch(findActions.togglePage(1));
        dispatch(findActions.trigger(false));
    }, []);

    const addGenresToList = (genres: IMovieInit) => {
        const {id, name} = genres;
        const alreadyIs = addGenres.find(value => value === id);

        if (id !== alreadyIs) {
            setNameArr(prev => [...prev, (
                <div key={id} className={'Genre_name'}>{name}</div>)
            ])
            dispatch(findActions.addGenresToList(id))
        }
    }

    const renderGenreButtons = () => {
        const buttons = [];
        const countGenres = genres.length;

        for (let i = 0; i < countGenres; i++) {
            const {name} = genres[i];
            buttons.push(<button
                key={i}
                className={'genre-btn'}
                onClick={() => addGenresToList(genres[i])}
            >{name}</button>)
        }
        return buttons;
    };

    const cancelGenreList = () => {
        dispatch(findActions.delGenres())
        setNameArr([])
    };

    return (
        <div className={`GenreBadge ${theme}`}>
            <div className={'GenreBadge__buttons'}>
                {renderGenreButtons()}
            </div>
            <div className={'GenreBadge__add'}>
                {nameArr.length > 0 && nameArr}
            </div>
            <div className={`${addGenres.length ? 'onBtn' : 'offBtn'}`} onClick={() => handleLMoviesListClick()}>
                FIND
            </div>
            <div className={`${addGenres.length ? 'onBtn' : 'offBtn'}`}
                 onClick={() => cancelGenreList()}>cancel
            </div>
        </div>
    );
};

export {
    GenreBadge
}