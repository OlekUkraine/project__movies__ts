import {createSlice} from "@reduxjs/toolkit";


interface ITheme {
    value: 'light' | 'dark';
}

const initialState: ITheme = {
    value: 'light'
}

const slice = createSlice({
    name:'themeSlice',
    initialState,
    reducers: {
        toggleTheme: state => {
            state.value = state.value === 'light'? 'dark': 'light';
        }
    }
})

const {reducer: themeReducer, actions} = slice;

const themeActions = {
    ...actions
}

export {
    themeReducer,
    themeActions
}