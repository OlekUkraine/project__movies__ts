import {FC} from 'react';

import {posterService} from "../../services";
import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({movie}) => {
    const {title, poster_path} = movie;
    const picture = posterService.getImageUrl(300, poster_path);
    const notPic = 'https://gdr.one/simg/300/400';

    return (
        <img src={poster_path? picture: notPic} alt={title}/>
    );
};

export {
    PosterPreview
}