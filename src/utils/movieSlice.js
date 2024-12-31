import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        movieTrailerPlaying: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer : (state, action) => {
            state.movieTrailerPlaying = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addMovieTrailer} = movieSlice.actions;

export default movieSlice.reducer;