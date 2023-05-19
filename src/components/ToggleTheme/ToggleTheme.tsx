import {FC} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux";
import './ToggleTheme.css';


interface IProps {
    value: 'light' | 'dark';
}

const ToggleTheme: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const dispatch = useAppDispatch();

    const handleToggleTheme = () => {
        dispatch(themeActions.toggleTheme());
    };

    return (
        <div className={`ToggleTheme ${theme}`}>
            <div className={'ToggleTheme-btn'} onClick={handleToggleTheme}>{theme}</div>
        </div>
    );
};

export {
    ToggleTheme
}