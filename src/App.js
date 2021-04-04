import React, { useEffect, useState } from "react";
import TaskPage from "./Components/addtask/";
import Dashboard from "./Components/dashboard";
import { BrowserRouter as Routers, Route } from "react-router-dom";
import Navigation from "./Components/Drawer";
import Userprofileform from "./Components/Profile/Userprofileform";
import UserProfileInfo from "./Components/Profile/UserProfileShow";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
import AllUsers from "./Components/AllUsers/fetchAllUsers";
import AllTasks from "./Components/AllUsers/fetchAllUsersTask";
import UserRouters from "./UserRoutes";
Amplify.configure(awsconfig);

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <>
      {sessionStorage.setItem("userName", user.attributes.email)}

      <Routers>
        <Navigation
          signout={<AmplifySignOut />}
          currentUser={user.attributes.email}
        >
          {user.attributes.email === "vvinayppokra@gmail.com" ? (
            <>
              <Route exact path="/">
                <Userprofileform />
              </Route>
              <Route exact path="/profile">
                <UserProfileInfo />
              </Route>
              <Route exact path="/taskpage">
                <TaskPage />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/allusers">
                <AllUsers />
              </Route>
              <Route exact path="/alltasks">
                <AllTasks />
              </Route>
            </>
          ) : (
            <>
              <UserRouters
                currentUser={user.attributes.email}
                Userprofileform={Userprofileform}
                TaskPage={TaskPage}
                Dashboard={Dashboard}
                UserProfileInfo={UserProfileInfo}
              />
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
