import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptStateValue: false,
    },
    reducers: {
        toggleGptState: (state) => {
            state.showGptStateValue = !state.showGptStateValue
        }
    }
})

export const {toggleGptState} = gptSlice.actions;

export default gptSlice.reducer;