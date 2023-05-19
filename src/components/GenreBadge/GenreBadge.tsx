import {FC} from 'react';

import {useAppSelector} from "../../hooks";
import './GenreBadge.css';

interface IProps {
    
}

const GenreBadge: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    return (
        <div className={`GenreBadge ${theme}`}>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>
            <p>GenreBadge</p>

        </div>
    );
};

export {
    GenreBadge
}