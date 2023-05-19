import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";
import './StarsRating.css';

interface IProps {
    vote_average: number;
}

const StarsRating: FC<IProps> = ({vote_average}) => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const widthRatingActive = (vote_average/10)*100;
    const stars = [];

    for (let i = 1; i <= 10; i++) {
        stars.push(<input key={i} type="radio" className={'StarRating__item'} value={i} name={'rating'}/>)
    }


    return (
        <form>
            <div className={`StarRating ${theme}`}>
                <div className={'StarRating__body'}>
                    <div style={{width: `${widthRatingActive}%`}} className={'StarRating__active'}></div>
                    <div className={'StarRating__items'}>
                        {stars}
                    </div>
                </div>
                <div className={'StarRating__value'}>{vote_average}</div>
            </div>
        </form>
    )
};

export {
    StarsRating
};