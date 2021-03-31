import React from "react";
import TaskPage from "./Components/addtask/";
import Dashboard from "./Components/dashboard";
import { BrowserRouter as Routers, Route, Link } from "react-router-dom";
import Navigation from "./Components/Drawer";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
Amplify.configure(awsconfig);

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <>
      <Routers>
        <Navigation
          signout={<AmplifySignOut />}
          currentUser={user.attributes.email}
        >
          <Route path="/taskpage">
            <TaskPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Navigation>
      </Routers>
    </>
  ) : (
    <AmplifyAuthenticator />
  );
}

export default App;
