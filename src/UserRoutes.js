import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Routers, Route } from "react-router-dom";
import { db } from "./base";

const UserRoutes = ({ currentUser, TaskPage, Dashboard }) => {
  const [userDataHolder, setUserdataHolder] = React.useState([]);

  useEffect(() => {
    async function getUserFromBase() {
      const response = await db
        .collection("emailDataBase")
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()));
      setUserdataHolder([...response]);
    }
    getUserFromBase();
  }, []);

  return (
    <>
      {userDataHolder.map((val) =>
        val.allData.Email === currentUser &&
        val.allData.Status === "Approved" ? (
          <>
            <Route path="/taskpage">
              <TaskPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </>
        ) : null
      )}
      {userDataHolder.map((val) =>
        val.allData.Email === currentUser &&
        val.allData.Status === "Pending..." ? (
          <>
            <Route path="/taskpage">
              <Typography variant="h2" color="error">
                Pending for verification...
              </Typography>
            </Route>
            <Route path="/dashboard">
              <Typography variant="h2" color="error">
                Pending for verification...
              </Typography>
            </Route>
          </>
        ) : null
      )}
    </>
  );
};
export default UserRoutes;
