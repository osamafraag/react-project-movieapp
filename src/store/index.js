import { configureStore } from "@reduxjs/toolkit";
import WatchListSlice from './slices/watchList';

export default configureStore({
    reducer: {
        watchList: WatchListSlice,
    }
})