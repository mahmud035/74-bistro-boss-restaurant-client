import { Link, Outlet } from 'react-router-dom';
import {
  AiOutlineShoppingCart,
  AiFillWallet,
  AiFillCalendar,
  AiFillHome,
  AiOutlineMenu,
  AiFillContacts,
} from 'react-icons/ai';

const DashboardLayout = () => {
  return (
    <>
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />

          <label
            htmlFor="my-drawer-2"
            className="btn-primary drawer-button btn lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-80 bg-base-100 p-4 text-base-content">
            <li>
              <Link>
                <AiFillHome size={28} /> User Home
              </Link>
            </li>
            <li>
              <Link>
                <AiOutlineShoppingCart size={28} /> My Cart
              </Link>
            </li>
            <li>
              <Link>
                <AiFillWallet size={28} /> Payment History
              </Link>
            </li>
            <li>
              <Link>
                <AiFillCalendar size={28} /> Calender
              </Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/">
                <AiFillHome size={28} /> Home
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <AiOutlineMenu size={28} /> Menu
              </Link>
            </li>

            <li>
              <Link>
                <AiFillContacts size={28} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
