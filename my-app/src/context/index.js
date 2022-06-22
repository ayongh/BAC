import { createContext, useEffect } from "react";
import { actionTypes, asyncActionHandlers } from "./actions";
import useImmerReducerAsync from "./useImmerReducerAsync";

const NACContext = createContext();

const initailValue = {
  pageLoading: false,
  teams: [],
  group: [],
};

const reducer = (draft, action) => {
  switch (action.type) {
    case actionTypes.SET_TEAMS: {
      draft.teams = action.payload.data;
      return;
    }
    case actionTypes.SET_GROUP: {
      draft.group = action.payload.data;
      return;
    }
    default: {
      throw new Error("invalid action");
    }
  }
};

const NACContextProvier = (props) => {
  const [state, dispatch] = useImmerReducerAsync(
    reducer,
    initailValue,
    asyncActionHandlers
  );

  useEffect(() => {
    dispatch({ type: actionTypes.ASYNC_GET_TEAMS });
    dispatch({ type: actionTypes.ASYNC_GET_GROUPS });
  }, []);

  return (
    <NACContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NACContext.Provider>
  );
};

export { NACContext, NACContextProvier, actionTypes, asyncActionHandlers };
