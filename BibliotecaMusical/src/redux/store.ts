
import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../redux/slices/librarySilce";
import searchReducers from "./slices/searchSlice";

const store = configureStore({
    reducer:{
        library: libraryReducer,
        search: searchReducers
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

