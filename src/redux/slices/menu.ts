import {PayloadAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const {setIsMenuOpen} = menuSlice.actions;
export default menuSlice.reducer;
