import { db } from "../base";
export const fetchData = (userEmail) => async (dispatch) => {
  const response = await getData(userEmail);
  dispatch({
    type: "FETCH_DATA",
    payload: response,
  });
};
async function getData(userEmail) {
  return await db
    .collection("taskdata")
    .doc(`${userEmail}`)
    .get()
    .then((snapshot) => snapshot.data().allData);
}

export const setData = (taskInformation) => {
  return {
    type: "SET_DATA",
    payload: taskInformation,
  };
};

export const sendDataToBase = (userEmail) => {
  return {
    type: "SEND_DATA",
    payload: (allData) =>
      db.collection("taskdata").doc(userEmail).set({ allData }),
  };
};
