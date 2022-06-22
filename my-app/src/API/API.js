import { backend } from "./backendHost";
import axios from "axios";

export default {
  getTeams: function () {
    return axios.get(` ${backend}/teams`);
  },
  getGroupStage: function () {
    return axios.get(` ${backend}/Groupstage`);
  },
};
