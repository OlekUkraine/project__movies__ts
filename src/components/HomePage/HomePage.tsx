import {FC} from 'react';

import {useAppSelector} from "../../hooks";
import './HomePage.css';

interface IProps {
    
}

const HomePage: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    return (
        <div className={`HomePage ${theme}`}>
            <h1>HOME__PAGE</h1>
        </div>
    );
};

export {
    HomePage
}