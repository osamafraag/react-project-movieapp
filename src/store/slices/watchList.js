import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
            state.listedMovies.splice(index, 1)
            found = true
          }
        })
        if(found !== true){
            state.listedMovies.push(action.payload)
        }
    },
  },
});

export const {
    handleAction,
} = WatchListSlice.actions;

export default WatchListSlice.reducer;