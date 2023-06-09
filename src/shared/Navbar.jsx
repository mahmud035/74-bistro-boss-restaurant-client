import { useContext } from 'react';
import logo from '../assets/icon/logo-2.png';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../contexts/CartProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // console.log(cart);

  const handleLogout = () => {
    logout().then(() => {
      navigate('/login');
    });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/dashboard/myCart">Dashboard</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl bg-black bg-opacity-20  py-4 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-black bg-opacity-70 p-2 font-bold shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn-ghost btn text-xl normal-case">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-6">
              <Link to="/dashboard/myCart">
                <button className=" relative gap-2">
                  <AiOutlineShoppingCart size={36} />

                  <div className="badge-secondary badge absolute -right-3 -top-1">
                    {cart?.length || 0}
                  </div>
                </button>
              </Link>
              <button onClick={handleLogout} className="btn capitalize">
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="btn capitalize">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
