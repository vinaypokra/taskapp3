import React from "react";
import TaskPage from "./Components/addtask/";
import Dashboard from "./Components/dashboard";
import { BrowserRouter as Routers, Route, Link } from "react-router-dom";
import Navigation from "./Components/Drawer";

function App() {
  return (
    <>
      <Routers>
        <Navigation>
          <Route path="/taskpage">
            <TaskPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Navigation>
      </Routers>
    </>
  );
}

export default App;
