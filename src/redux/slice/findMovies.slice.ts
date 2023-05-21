import {createSlice} from "@reduxjs/toolkit";


interface IState {
    page: number
    addGenres: number[];
    addNameMovies: string;
    trigger: boolean;
}

const initialState: IState = {
    page: 1,
    addGenres: [],
    addNameMovies: null,
    trigger: false
};


const slice = createSlice(
    {
        name: 'findMoviesSlice',
        initialState,
        reducers: {
            addGenresToList: (state, action) => {
                state.addGenres.push(action.payload);
            },
            delGenres: state => {
                state.addGenres = [];
            },
            togglePage: (state, action) => {
                state.page = action.payload;
            },
            trigger: (state, action) => {
                state.trigger = action.payload;
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