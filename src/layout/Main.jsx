import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Main = () => {
  const location = useLocation();
  // console.log(location.pathname);

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const shouldShowNavbarAndFooter = !isLoginPage && !isRegisterPage;

  return (
    <div>
      {shouldShowNavbarAndFooter && <Navbar />}
      <Outlet />
      {shouldShowNavbarAndFooter && <Footer />}
    </div>
  );
};

export default Main;
