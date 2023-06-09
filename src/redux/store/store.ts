import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "../slice";
import {themeReducer} from "../slice";
import {findMoviesReducer} from "../slice";


const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    themeReducer,
    findMoviesReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}