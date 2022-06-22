import { useEffect, useMemo, useRef } from "react";
import { useReducerAsync } from "use-reducer-async";
import produce, { setAutoFreeze } from "immer";

const isDev = "development";

const stateUpdatelogStyle =
  "color:black;font-family:sans-serif;font-weight:800;";
const actionDispatchStyle =
  "color:blue;font-family:sans-serif;font-weight:800;";

/**s
 * Logs every action before it is dispatched.
 * @param dispatch useReducer dispatch function
 */
function withLogger(dispatch) {
  return function (action) {
    if (isDev) {
      console.groupCollapsed("%c[DISPATCHING ACTION]", actionDispatchStyle);
      console.log("%caction: ", actionDispatchStyle, action);
      console.groupEnd("%c[DISPATCHING ACTION]", actionDispatchStyle);
    }
    return dispatch(action);
  };
}

/**
 * useReducer with Immer, async actions, and logging.
 */
export default function useImmerReducerAsync(
  reducerFunction,
  initialState,
  asyncActionHandlers,
  ...args
) {
  // Immer setup
  setAutoFreeze(false);
  const cachedReducer = useMemo(
    () => produce(reducerFunction),
    [reducerFunction]
  );

  // store previous state for logging
  let prevState = useRef(initialState);

  const [state, dispatch] = useReducerAsync(
    cachedReducer,
    initialState,
    asyncActionHandlers
  );

  const dispatchWithLogger = useMemo(() => {
    return withLogger(dispatch);
  }, [dispatch]);

  // log all state changes
  useEffect(() => {
    if (state !== initialState) {
      if (isDev) {
        console.groupCollapsed("%c[STATE UPDATED]", stateUpdatelogStyle);
        console.log(
          "%cPrevious State:",
          stateUpdatelogStyle,
          prevState.current
        );
        console.log("%c Next State:", stateUpdatelogStyle, state);
        console.groupEnd("%c[STATE UPDATED]", stateUpdatelogStyle);
      }
    }
    prevState.current = state;
  }, [state]);

  return [state, dispatchWithLogger];
}
