import React, { useEffect } from "react";
import routes from "../../router";
import PageSkeleton from "./skeleton";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const MainComponent = () => {
  return (
    <React.Suspense fallback={<PageSkeleton />}>
      <Router>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={props => <route.component {...props} />}
              />
            ) : null;
          })}
          <Redirect from="/" to="/" />
        </Switch>
      </Router>
    </React.Suspense>
  );
};
export default MainComponent;
