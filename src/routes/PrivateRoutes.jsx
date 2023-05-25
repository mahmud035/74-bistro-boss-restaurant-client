import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import Spinner from '../shared/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = (children) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoutes;
