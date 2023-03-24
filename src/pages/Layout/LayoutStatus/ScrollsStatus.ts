import React from "react";

export interface reduceState {
  user: {
    messageCont: number;
  };
}
export interface reduceType {
  type: string;
  value?: any;
}

export const reduceConfig: React.Reducer<reduceState, reduceType> = (
  state,
  action
) => {
  const temp: reduceState = { ...state };
  switch (action.type) {
    case "changeUser":
      temp.user = action.value;
      break;
  }
  return temp;
};
