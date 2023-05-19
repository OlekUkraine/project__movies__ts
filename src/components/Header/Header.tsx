import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {NavLink, useSearchParams} from "react-router-dom";

import {ToggleTheme} from "../ToggleTheme";
import {useAppSelector} from "../../hooks";
import {IFormData} from "../../types";
import './Header.css';


interface IProps {

}

const Header: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);
    const {register, handleSubmit, formState:{isValid}, } = useForm<IFormData>({mode:'all'});
    const [, setQuery] = useSearchParams();

    const findMovies:SubmitHandler<IFormData> = ({title}) => {
        setQuery(prev2 => ({...prev2, query: title}))
    };


    return (
        <div className={`Header ${theme}`}>

            <div>
                <div className={'Header__info'}>
                    <div className={'Header__logo'}>
                        <NavLink to={'home'}>Logo</NavLink>
                    </div>
                    <div className={'Header__title'}>Header title</div>
                </div>

                <div className={'Header__nav'}>
                    <NavLink to={'/movies/genres'}>Discover</NavLink>
                    <NavLink to={'/movies'}>Movies</NavLink>
                </div>
            </div>

            <form onSubmit={handleSubmit(findMovies)}>
                <input type="text" placeholder={'name'} {...register('title', {required: true})}/>
                <button hidden={!isValid}>search</button>
            </form>

            <div>
                {<ToggleTheme value={'light'}/>}
            </div>

            <div className={'Header__user'}>
                <div className={'Header__user-avatar'}>Avatar</div>
                <div className={'Header__user-name'}>User name</div>
            </div>

        </div>
    );
};

export {
    Header
}

