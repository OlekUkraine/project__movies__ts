import React, {FC} from 'react';
import {Outlet, Route, Routes} from "react-router-dom";

import {GenreBadge, MovieInfo, MoviesList, Pagination} from "../components";
import {useAppSelector} from "../hooks";
import './MoviesPage.css';


const MoviesPage: FC = () => {
    const theme = useAppSelector(state => state.themeReducer.value);

    return (
        <div className={`MoviesPage ${theme}`}>

            <Routes>
                <Route path="/" element={
                        <>
                            <Pagination/>
                            <MoviesList/>
                            <Outlet />
                            <Pagination/>
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