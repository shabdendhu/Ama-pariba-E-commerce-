import React from "react";
import routes from "../../router";
import PageSkeleton from "./skeleton";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";

const get_basket_by_idQuery = gql`
  query ($id: Int!) {
    get_basket_by_id(id: $id) {
      id
      product_id
      user_id
      product {
        id
        name
        image
      }
      quantityOption {
        id
        quantity
        product_id
        base_price
        discount
        unit {
          short_name
        }
      }
    }
  }
`;
const MainComponent = () => {
  const user_info = useSelector((state) => state.authorization.user_info);
  const [{ basket }, dispacher] = useStateValue();
  const { networkStatus, called, loading, data } = useQuery(
    get_basket_by_idQuery,
    { variables: { id: user_info && user_info.id } }
  );
  useEffect(() => {
    if (networkStatus === 7) {
      const basketItems = data.get_basket_by_id;
      console.log("basketItems", basketItems);
      basketItems.forEach((element) => {
        console.log("element", element);
        dispacher({
          type: "ADD_TO_BASKET",
          item: {
            id: element.product_id,
            image: element.product.image,
            name: element.product.name,
            amount: `${element.quantityOption.quantity}/${element.quantityOption.unit.short_name}`,
            price: Math.round(
              element.quantityOption.base_price -
                (element.quantityOption.base_price *
                  element.quantityOption.discount) /
                  100
            ),
            item_id: element.id,
            quantityId: element.quantityOption.id,
          },
        });
      });
    }
  }, [networkStatus]);
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
                render={(props) => <route.component {...props} />}
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
