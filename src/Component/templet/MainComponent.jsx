import React from "react";
import routes from "../../router";
import PageSkeleton from "./skeleton";
// import { Provider } from 'react-redux'

// import store from "../../store/index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// //
// import axios from "axios";
// import { useEffect } from "react";
// // import { get_basket_items } from "./constants/api";
// // import { useStateValue } from "./Component/templet/StateProvider";
// import { useSelector } from "react-redux";
// import { get_basket_items } from "../../constants/api";
// import { useStateValue } from "./StateProvider";
// //
const MainComponent = () => {
 
  
  return (
    // <Provider store={store}>
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
    // </Provider>

  );
};
export default MainComponent;
