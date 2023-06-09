import { Redirect, Route } from "react-router-dom";

// const PrivateRoute = (props) => {
//   return (
//     <Route exact={props.exact} path={props.path} component={props.component} />
//   );
// };

// const PrivateRoute = (props) => {
//   return <Route {...props} />;
// };

// Simulate Authentication:
let auth;
// auth = true;
auth = null;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/" />}</Route>
  );
};

export default PrivateRoute;
