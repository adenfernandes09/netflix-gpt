import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptStateValue: false,
        moviesSuggested: null, 
        moviesName: null,
    },
    reducers: {
        toggleGptState: (state) => {
            state.showGptStateValue = !state.showGptStateValue
        }, 

        addGptMovieSuggestions : (state, action) => {
            const {moviesName, moviesSuggested} = action.payload;
            state.moviesSuggested = moviesSuggested;
            state.moviesName = moviesName;
        }
    }
})

export const {toggleGptState, addGptMovieSuggestions} = gptSlice.actions;

export default gptSlice.reducer;