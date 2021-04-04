import React, { useEffect, useState } from "react";
import TaskPage from "./Components/addtask/";
import Dashboard from "./Components/dashboard";
import { BrowserRouter as Routers, Route } from "react-router-dom";
import Navigation from "./Components/Drawer";
import Userprofileform from "./Components/Profile/Userprofileform";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
import AllUsers from "./Components/AllUsers/fetchAllUsers";
import { db } from "./base";
Amplify.configure(awsconfig);

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [userDataHolder, setUserdataHolder] = useState([]);
  const [userShow, setUserShow] = userState(false);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

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

  userDataHolder.map((val) => {
    if (
      val.allData.Email === user.attributes.email &&
      val.allData.status === "Approved"
    ) {
      setUserShow(true);
    }
  });
  return authState === AuthState.SignedIn && user ? (
    <>
      {sessionStorage.setItem("userName", user.attributes.email)}
      <Routers>
        <Navigation
          signout={<AmplifySignOut />}
          currentUser={user.attributes.email}
        >
          <Route exact path="/">
            <Userprofileform />
          </Route>
          {user.attributes.email === "vvinayppokra@gmail.com" ? (
            <>
              <Route path="/taskpage">
                <TaskPage />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/alluser">
                <AllUsers />
              </Route>
            </>
          ) : (
            <>
              {userShow ? (
                <>
                  <Route path="/taskpage">
                    <TaskPage />
                  </Route>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
                </>
              ) : (
                <>
                  <Route path="/taskpage">
                    <h1 style={{ color: "black" }}>
                      Pending for verification...
                    </h1>
                  </Route>
                  <Route path="/dashboard">
                    <h1 style={{ color: "black" }}>
                      Pending for verification...
                    </h1>
                  </Route>
                </>
              )}
            </>
          )}
        </Navigation>
      </Routers>
    </>
  ) : (
    <AmplifyAuthenticator />
  );
}

export default App;
