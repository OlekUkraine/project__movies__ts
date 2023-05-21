import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {PosterPreview} from "../PosterPreview";
import {StarsRating} from "../StarsRating";
import {useAppSelector} from "../../hooks";
import {IMovie} from "../../interfaces";
import './MoviesListCard.css';


interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const {id, title, vote_average} = movie;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movies/info/${id.toString()}`, { state: { ...movie } });
    };

    return (
        <div className={`MoviesListCard ${theme}`} onClick={()=>handleCardClick()}>
                <PosterPreview movie={movie}/>
                <div>
                    <StarsRating vote_average={vote_average}/>
                    <h4 className={'MoviesListCard__title'}>{title}</h4>
                </div>
        </div>
    );
};

export {
    MoviesListCard
}