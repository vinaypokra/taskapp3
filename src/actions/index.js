import db from "../base";
export const fetchData = () => async (dispatch) => {
  const response = await db
    .collection("taskdata")
    .doc("taskData")
    .get()
    .then((snapshot) => {
      return snapshot.data().taskData;
    });
  dispatch({
    type: "FETCH_DATA",
    payload: response,
  });
};
