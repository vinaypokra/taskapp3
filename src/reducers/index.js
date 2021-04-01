import { combineReducers } from "redux";
const fetchDataFromBase = (taskData = [], action) => {
  if (action.type === "FETCH_DATA") {
    return action.payload;
  }
  return taskData;
};
export default combineReducers({
  taskData: fetchDataFromBase,
});
