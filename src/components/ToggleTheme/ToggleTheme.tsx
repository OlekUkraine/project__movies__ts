import {FC, useEffect, useState} from 'react';

import {useAppDispatch} from "../../hooks";
import {themeActions} from "../../redux";
import './ToggleTheme.css';


interface IProps {
    value: 'light' | 'dark';
}

const ToggleTheme: FC<IProps> = () => {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
    const dispatch = useAppDispatch();
    // const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const defaultTheme = isDarkMode? 'dark': 'light';
    // console.log(defaultTheme);


    useEffect(() => {
            dispatch(themeActions.toggleTheme(theme));
            localStorage.setItem('theme', theme);
    }, [dispatch, theme]);

    const handleToggleTheme = () => {
        setTheme(prev => prev === 'light'? 'dark': 'light')
    };

    return (
        <div className={`ToggleTheme ${theme}`}>
            <div className={'ToggleTheme-btn'} onClick={()=>handleToggleTheme()}>{theme}</div>
        </div>
    );
};

export {
    ToggleTheme
}