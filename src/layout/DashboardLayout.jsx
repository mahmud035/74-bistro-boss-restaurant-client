import { NavLink, Outlet } from 'react-router-dom';
import {
  AiOutlineShoppingCart,
  AiFillWallet,
  AiFillCalendar,
  AiFillHome,
  AiOutlineMenu,
  AiFillContacts,
} from 'react-icons/ai';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartProvider';

const DashboardLayout = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="drawer-mobile drawer ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center justify-center">
          <Outlet />

          <label
            htmlFor="my-drawer-2"
            className="btn-primary drawer-button btn lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="flex-cols menu mb-3 mt-4 flex w-80 gap-1  text-base-content">
            <li>
              <NavLink to="/dashboard/home">
                <AiFillHome size={28} /> User Home
              </NavLink>
            </li>
            <li className="relative">
              <NavLink to="/dashboard/myCart">
                <AiOutlineShoppingCart size={28} /> My Cart
                <span className="absolute right-44 top-0 rounded-full bg-purple-500 px-2.5  font-bold">
                  {cart.length}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentHistory">
                <AiFillWallet size={28} /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservations">
                <AiFillCalendar size={28} /> Reservations
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <AiFillHome size={28} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <AiOutlineMenu size={28} /> Menu
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/contact">
                <AiFillContacts size={28} /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
