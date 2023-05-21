import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import logo from '../../images/logo/logo.jpg';
import {ToggleTheme} from "../ToggleTheme";
import {findActions} from "../../redux";
import {IFormData} from "../../types";
import {UserInfo} from "../UserInfo";
import './Header.css';


const Header: FC = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const {trigger} = useAppSelector(state => state.findMoviesReducer);
    const {register, handleSubmit, reset, formState: {isValid}} = useForm<IFormData>({mode: 'all'});
    const dispatch = useAppDispatch()

    const findMovies: SubmitHandler<IFormData> = ({title}) => {
        if (title === '') {
            dispatch(findActions.delName());
        }
        dispatch(findActions.togglePage(1));
        dispatch(findActions.delGenres());
        dispatch(findActions.addName(title));
        reset()
    };

    const resetPageAndGenre = () => {
        dispatch(findActions.togglePage(1));
        dispatch(findActions.delGenres());
        dispatch(findActions.delName());
        reset();
    };

    return (
        <div className={`Header ${theme}`}>

            <div className={'Header__left-bar'}>
                <div className={'Header__info'}>
                    <div className={'Header__logo'}>
                        <NavLink to={'home'}>
                            <img className={'logo'} src={logo} alt="logo"/>
                        </NavLink>
                    </div>
                    <div className={'Header__title'}>follow me</div>
                </div>

                <div className={'Header__nav'}>
                    <NavLink to={'/movies/genres'}>Genres</NavLink>
                    <NavLink onClick={() => resetPageAndGenre()} to={'movies'}>Movies</NavLink>
                </div>
            </div>

            <form onSubmit={handleSubmit(findMovies)}>
                <input disabled={!trigger} type="text" placeholder={'name'} {...register('title', {required: true})}/>
                <button hidden={!isValid}>search</button>
            </form>

            <div>
                {<ToggleTheme value={'light'}/>}
            </div>

            <div className={'Header__user'}>
                <UserInfo/>
            </div>

        </div>
    );
};

export {
    Header
}

