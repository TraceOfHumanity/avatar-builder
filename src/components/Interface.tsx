import React from "react";

import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";

import {setCurrentAction} from "../redux/slices/avatarActions";

export const Interface = () => {
  const {actions} = useAppSelector((state) => state.avatarActions);
  const dispatch = useAppDispatch();

  const handleAction = (action: string) => {
    dispatch(setCurrentAction(action));
  };

  return (
    <div className="fixed left-0 top-0 ">
      <div className="flex flex-col">
        {actions.map((action) => (
          <button key={action} onClick={() => handleAction(action)}>
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};
