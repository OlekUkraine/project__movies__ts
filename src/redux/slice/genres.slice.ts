import {createSlice} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";

interface IState {
    genres: IGenre[] | null
}

const initialState: IState = {
    genres: []
};
const slice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: {}
})

const {reducer: genreReducer, actions} = slice;

const genreActions = {
    ...actions
}

export {
    genreReducer,
    genreActions
}