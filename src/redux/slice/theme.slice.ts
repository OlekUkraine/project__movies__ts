import {createSlice} from "@reduxjs/toolkit";


interface ITheme {
    value: 'light' | 'dark';
}

const initialState: ITheme = {
    value: null
}

const slice = createSlice({
    name:'themeSlice',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            // state.value = state.value === 'light'? 'dark': 'light';
            state.value = action.payload;
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