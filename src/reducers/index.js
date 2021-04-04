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

const userPersonalDetails = (userInfo = [], action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      return action.payload;
    case "SEND_USER_INFO":
      action.payload(userInfo);
      return userInfo;
    case "USER_SET_DATA":
      return action.payload;
    default:
      return userInfo;
  }
};
export default combineReducers({
  taskData: fetchDataFromBase,
  userInfo: userPersonalDetails,
});
