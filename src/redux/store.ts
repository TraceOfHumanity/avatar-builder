import {configureStore} from "@reduxjs/toolkit";

import avatarActions from "./slices/avatarActions";
import cubeBuilder from "./slices/cubeBuilder";
import menuSlice from "./slices/menu";
import themeSlice from "./slices/theme";

const store = configureStore({
  reducer: {
    themeSlice,
    avatarActions,
    cubeBuilder,
    menuSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
