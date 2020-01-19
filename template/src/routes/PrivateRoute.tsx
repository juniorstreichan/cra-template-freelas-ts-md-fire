import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
interface PrivateRouteProps extends RouteProps {
  redirectPath: string;
  condition: boolean;
  onRedirect: Function;
}

const PrivateRoute: React.FC<PrivateRouteProps | any> = ({
  component: Component,
  redirectPath = "/",
  condition = true,
  onRedirect = () => console.log("Redirect..."),
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (condition) {
          return <Component {...props} />;
        }
        console.log("Redirect to " + redirectPath);
        onRedirect();
        return <Redirect to={{ pathname: redirectPath }} />;
      }}
    />
  );
};

export default PrivateRoute;
