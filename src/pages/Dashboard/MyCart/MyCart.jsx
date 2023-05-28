/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { CartContext } from '../../../contexts/CartProvider';
import Table from './Table';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const { cart } = useContext(CartContext);
  // console.log(cart);

  const totalPrice =
    cart.length > 0 &&
    cart?.reduce((accumulator, item) => accumulator + item.price, 0);

  console.log(totalPrice);
  return (
    <>
      {cart && cart.length > 0 ? (
        <>
          <div className="w-full px-10">
            <Helmet>
              <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="flex items-center justify-between pb-10 font-semibold">
              <h3 className="text-3xl">Total Items: {cart.length}</h3>
              <h3 className="text-3xl">
                Total Price: ${totalPrice.toFixed(2)}
              </h3>
              <button className="btn-warning btn-sm btn  capitalize">
                Pay
              </button>
            </div>

            <Table cart={cart} />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <h3 className="flex flex-col items-center gap-4 text-3xl font-bold">
            <p>You haven't added any items to cart.</p>
            <Link to="/order/:category">
              <button className="btn-warn btn capitalize">
                Add Item to Cart
              </button>
            </Link>
          </h3>
        </div>
      )}
    </>
  );
};

export default MyCart;
