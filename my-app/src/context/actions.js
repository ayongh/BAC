import API from "../API/API";
import { makeHCMApiCall } from "../API/utils";

export const actionTypes = {
  TOGGLE_LOADING: "TOGGLE_LOADING",

  //Get Teams
  ASYNC_GET_TEAMS: "ASYNC_GET_TEAMS",
  ASYNC_GET_GROUPS: "ASYNC_GET_GROUPS",

  //Data
  SET_TEAMS: "SET_TEAMS",
  SET_GROUP: "SET_GROUP",
};

export const asyncActionHandlers = {
  [actionTypes.ASYNC_GET_TEAMS]:
    ({ dispatch }) =>
    async (action) => {
      try {
        const data = await makeHCMApiCall(API.getTeams());

        dispatch({ type: actionTypes.SET_TEAMS, payload: { ...data } });
      } catch (e) {}
    },
  [actionTypes.ASYNC_GET_GROUPS]:
    ({ dispatch }) =>
    async (action) => {
      try {
        const data = await makeHCMApiCall(API.getGroupStage());

        dispatch({ type: actionTypes.SET_GROUP, payload: { ...data } });
      } catch (e) {}
    },
};
