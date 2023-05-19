import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {useAppLocation, useAppSelector} from "../../hooks";
import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating";
import {IMovie} from "../../interfaces";
import './MovieInfo.css';

interface IProps {
    
}

const MovieInfo: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const {state: movie} = useAppLocation<IMovie>();
    const {title, overview, vote_average, genre_ids} = movie;
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/movies');
    };

    return (
        <div className={`MovieInfo ${theme}`}>
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
                        {genre_ids.map(genre => <div className={'genre'}>genre_{genre}</div>)}
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