import {
    Navigate,
    Outlet,
  } from 'react-router-dom';
  import Cookies from 'universal-cookie';
  const ProtectedRoute = ({
    redirectPath = '/',
    children,
  }) => {
      const cookies = new Cookies();
      const user = cookies.get('Register Company')
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };
  export default ProtectedRoute