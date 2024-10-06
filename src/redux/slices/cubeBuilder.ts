import {PayloadAction, createSlice} from "@reduxjs/toolkit";

type CubeBuilderState = {
  sideCube: boolean;
};

const initialState: CubeBuilderState = {
  sideCube: false,
};

const cubeBuilder = createSlice({
  name: "cubeBuilder",
  initialState,
  reducers: {
    setSideCube: (state, action: PayloadAction<boolean>) => {
      state.sideCube = action.payload;
    },
  },
});

export const {setSideCube} = cubeBuilder.actions;
export default cubeBuilder.reducer;
