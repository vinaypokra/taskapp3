import { combineReducers } from "redux";
const fetchDataFromBase = (taskData = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    case "SET_DATA":
      return [...taskData, action.payload];
    case "SEND_DATA":
      action.payload(taskData);
      return taskData;
    default:
      return taskData;
  }
};
export default combineReducers({
  taskData: fetchDataFromBase,
});
