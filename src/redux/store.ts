import {configureStore} from "@reduxjs/toolkit";

import avatarActions from "./slices/avatarActions";
import themeSlice from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    avatarActions,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
