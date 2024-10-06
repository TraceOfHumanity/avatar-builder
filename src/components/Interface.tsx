import React from "react";

import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";

import {setCurrentAction} from "../redux/slices/avatarActions";
import { setSideCube } from "../redux/slices/cubeBuilder";

export const Interface = () => {
  const {actions} = useAppSelector((state) => state.avatarActions);
  const dispatch = useAppDispatch();
  const {sideCube} = useAppSelector((state) => state.cubeBuilder);
  const handleAction = (action: string) => {
    dispatch(setCurrentAction(action));
  };

  return (
    <div className="fixed left-2 top-2 ">
      {/* <div className="flex flex-col gap-2">
        {actions.map((action) => (
          <button className="border border-white text-white text-start p-1 rounded-md" key={action} onClick={() => handleAction(action)}>
            {action}
          </button>
        ))}
      </div> */}

      <button onClick={() => dispatch(setSideCube(!sideCube))}>
        {sideCube ? "Hide" : "Show"}
      </button>
    </div>
  );
};
