import { toast } from "react-toastify";

const React = require("react");
const { Route, Redirect } = require("react-router");

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? (
        <Component {...props} auth={auth} />
      ) : (
        <Redirect to="/">{toast.error("Você precisa estar logado")}</Redirect>
      )
    }
  />
);

export default GuardedRoute;
