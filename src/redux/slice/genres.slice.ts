import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";

import {IError, IGenre} from "../../interfaces";
import {genreService} from "../../services";
import {IMovieInit} from "../../types";
import {AxiosError} from "axios";


interface IState {
    genres: IMovieInit[];
    error: IError;
    addGenres: number[];
}

const initialState: IState = {
    genres: [],
    error: null,
    addGenres: []
};

const getAll = createAsyncThunk<IGenre<IMovieInit>, void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllGenres();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)


const slice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genres = genres;
            })
            .addMatcher(isFulfilled(), state => {
                state.error = null;
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload as IError;
            })
})


const {reducer: genreReducer, actions} = slice;

const genreActions = {
    ...actions,
    getAll
}

export {
    genreReducer,
    genreActions
}