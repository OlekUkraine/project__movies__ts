import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";
import {IGetById} from "../../interfaces";
import {IError} from "../../interfaces";
import {ISearch} from "../../types";


interface IState {
    movies: IMovie[];
    page: number;
    total_page: number;
    total_results: number
    movie_result: IMovie[];
    error: IError;
    trigger: boolean;
    sort_by: string;
}

const initialState: IState = {
    movies: [],
    page: null,
    total_page: null,
    total_results: null,
    movie_result: [],
    error: null,
    trigger: false,
    sort_by: null
};

const getMovies = createAsyncThunk<IPagination<IMovie>, number>(
    'movieSlice/getMovies',
    async (page = 1, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const searchMovies = createAsyncThunk<IPagination<IMovie>, ISearch>(
    'movieSlice/searchMovies',
    async ({query, page=1}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(query, page);
            console.log(data)
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getByGenres = createAsyncThunk<IPagination<IMovie>, ISearch>(
    'movieSlice/getByGenres',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenres(genreId, page)
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getByIdMovie = createAsyncThunk<IGetById<IMovie>, number>(
    'movieSlice/getByIdMovie',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id.toString());
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const getTopRated = createAsyncThunk<IPagination<IMovie>, void>(
    'movieSlice/getTopRated',
    async (_,{rejectWithValue}) => {
        try{
            const {data} = await movieService.getTopRatedMovies();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getByIdMovie.fulfilled, (state, action)=>{
                const {movie_results} = action.payload;
                state.movie_result = movie_results;
            })
            .addMatcher(isFulfilled(getMovies, searchMovies, getByGenres,getTopRated), (state, action)=>{
                const {page, total_pages, results, total_results} = action.payload;
                state.movies = results;
                state.page = page;
                state.total_page = total_pages;
                state.total_results = total_results;
            })
            .addMatcher(isFulfilled(), state => {
                state.error = null;
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload as IError;
            })
});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getMovies,
    searchMovies,
    getByIdMovie,
    getByGenres,
    getTopRated
}

export {
    movieReducer,
    movieActions
}