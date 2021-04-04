import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { Route } from "react-router-dom";
import { db } from "./base";

const UserRoutes = ({
  currentUser,
  TaskPage,
  Dashboard,
  UserProfileInfo,
  Userprofileform,
}) => {
  const [userDataHolder, setUserdataHolder] = useState([]);

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
  const emailDataCheck = userDataHolder.find(
    (val) => val.allData.Email === currentUser
  );

  if (emailDataCheck === undefined) {
    return (
      <>
        <Route exact path="/">
          <Userprofileform />
        </Route>
        <Route exact path="/profile">
          <Typography variant="h2" color="error">
            Submit Details...
          </Typography>
        </Route>
        <Route exact path="/taskpage">
          <Typography variant="h2" color="error">
            Submit Details...
          </Typography>
        </Route>
        <Route exact path="/dashboard">
          <Typography variant="h2" color="error">
            Submit Details...
          </Typography>
        </Route>
      </>
    );
  } else {
    return (
      <>
        {userDataHolder.map((val) =>
          val.allData.Email === currentUser &&
          val.allData.Status === "Approved" ? (
            <>
              <Route exact path="/">
                <h1>Welcome</h1>
              </Route>
              <Route exact path="/profile">
                <UserProfileInfo />
              </Route>
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
              <Route path="/">
                <Userprofileform />
              </Route>
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
  }
};
export default UserRoutes;
