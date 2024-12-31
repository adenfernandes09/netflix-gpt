import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        movieTrailerPlaying: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addMovieTrailer : (state, action) => {
            state.movieTrailerPlaying = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addMovieTrailer} = movieSlice.actions;

export default movieSlice.reducer;