import {FC} from 'react';

import {posterService} from "../../services";
import {notPicture} from "../../constants";
import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie;
}

const PosterPreview: FC<IProps> = ({movie}) => {
    const {title, poster_path} = movie;
    const picture = posterService.getImageUrl(300, poster_path);

    return (
        <img src={poster_path? picture: notPicture} alt={title}/>
    );
};

export {
    PosterPreview
}