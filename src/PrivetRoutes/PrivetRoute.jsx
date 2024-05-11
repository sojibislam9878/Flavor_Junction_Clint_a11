import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <h1>hello</h1>;
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};
PrivetRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PrivetRoute;
