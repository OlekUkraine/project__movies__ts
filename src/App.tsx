import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {GenreBadge, HomePage, MovieInfo} from "./components";
import {MainLayout} from './layouts';
import {MoviesPage} from './pages';
import './App.css';


function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<Navigate to='home'/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}>
                        <Route path={'genres'} element={<GenreBadge/>}/>
                        <Route path={'info/:id'} element={<MovieInfo/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
