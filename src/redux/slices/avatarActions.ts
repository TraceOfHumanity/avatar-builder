import {PayloadAction, createSlice} from "@reduxjs/toolkit";

type AvatarActionsState = {
  currentAction: string;
  actions: string[];
};

const initialState: AvatarActionsState = {
  currentAction: "",
  actions: [],
};

const avatarActions = createSlice({
  name: "avatarActions",
  initialState,
  reducers: {
    setCurrentAction: (state, action: PayloadAction<string>) => {
      state.currentAction = action.payload;
    },
    setActions: (state, action: PayloadAction<string[]>) => {
      state.actions = action.payload;
    },
  },
});

export const {setCurrentAction, setActions} = avatarActions.actions;
export default avatarActions.reducer;
