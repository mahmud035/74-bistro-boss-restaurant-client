import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/login',
        element: <Login />,  
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/order/:category',
        element: <Order />,
      },
    ],
  },
]);

export default router;
