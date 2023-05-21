import {createSlice} from "@reduxjs/toolkit";


interface IState {
    page: number
    addGenres: number[];
    addNameMovies: string;
}

const initialState: IState = {
    page: 1,
    addGenres: [],
    addNameMovies: null
};


const slice = createSlice(
    {
        name: 'findMoviesSlice',
        initialState,
        reducers: {
            addGenresToList: (state, action) => {
                console.log(action.payload)
                state.addGenres.push(action.payload);
            },
            delGenres: state => {
                state.addGenres = [];
            },
            togglePage: (state, action) => {
                state.page = action.payload;
            },
            addName: (state, action) => {
                state.addNameMovies = action.payload;
            },
            delName: state => {
                state.addNameMovies = null;
            }
        }
    }
)

const {reducer: findMoviesReducer, actions} = slice;

const findActions = {
    ...actions
}

export {
    findMoviesReducer,
    findActions
}