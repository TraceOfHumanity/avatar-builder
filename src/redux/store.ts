import {configureStore} from "@reduxjs/toolkit";

import avatarActions from "./slices/avatarActions";
import themeSlice from "./slices/themeSlice";
import cubeBuilder from "./slices/cubeBuilder";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    avatarActions,
    cubeBuilder,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
