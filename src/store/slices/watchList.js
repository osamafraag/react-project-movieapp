import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchListCount: 0,
  listedMovies: [],
};

const WatchListSlice = createSlice({
  name: "watchList",
  initialState: initialState,
  reducers: {
    handleAction: (state, action) => {
        var found = false
        state.listedMovies?.map((movie,index) => {
          if(action.payload.id === movie.id){
            state.watchListCount = state.watchListCount - 1
            state.listedMovies.splice(index, 1)
            found = true
          }
        })
        if(found !== true){
            state.watchListCount = state.watchListCount + 1
            state.listedMovies.push(action.payload)
        }
    },
  },
});

export const {
    handleAction,
} = WatchListSlice.actions;

export default WatchListSlice.reducer;