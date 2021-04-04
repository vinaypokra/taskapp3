import { db } from "../base";

/* TASK FOR USER */
export const fetchData = (userEmail) => async (dispatch) => {
  const response = await getData(userEmail);
  dispatch({
    type: "FETCH_DATA",
    payload: response,
  });
};
async function getData(userEmail) {
  const res = await db
    .collection("taskdata")
    .doc(`${userEmail}`)
    .get()
    .then((snapshot) => snapshot.data().allData);

  return res !== undefined ? res : [];
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

/* USER INFORMATION */

export const fetchUserData = (userEmail) => async (dispatch) => {
  const response = await getUserData(userEmail);
  dispatch({
    type: "FETCH_USER_DATA",
    payload: response,
  });
};
async function getUserData(userEmail) {
  const response = await db
    .collection("emailDataBase")
    .doc(`${userEmail}`)
    .get()
    .then((snapshot) => snapshot.data().allData);

  return response !== undefined ? response : [];
}

export const userProfileInfo = (userEmail) => {
  return {
    type: "SEND_USER_INFO",
    payload: (allData) =>
      db.collection("emailDataBase").doc(userEmail).set({ allData }),
  };
};
export const setUserProfileInfo = (userInfo) => {
  return {
    type: "USER_SET_DATA",
    payload: userInfo,
  };
};
