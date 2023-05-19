import React, {FC} from 'react';
import {Outlet, Route, Routes} from "react-router-dom";

import {GenreBadge, MovieInfo, MoviesList} from "../components";
import {useAppSelector} from "../hooks";
import './MoviesPage.css';



interface IProps {
}

const MoviesPage: FC<IProps> = () => {
    const theme = useAppSelector(state => state.themeReducer.value);

    return (
        <div className={`MoviesPage ${theme}`}>

            <Routes>
                <Route path="/" element={
                        <>
                            <MoviesList/>
                            <Outlet />
                        </>
                    }/>
                <Route path="info/:id" element={<MovieInfo />} />
                <Route path="genres" element={<GenreBadge />} />
            </Routes>

        </div>
    );
};

export {
    MoviesPage
}