import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { CartContext } from '../../../contexts/CartProvider';
import Table from './Table';

const MyCart = () => {
  const { cart, refetech } = useContext(CartContext);
  console.log(cart);

  const totalPrice = cart?.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  console.log(totalPrice);
  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="flex items-center justify-between pb-10 font-semibold">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${totalPrice.toFixed(2)}</h3>
        <button className="btn-warning btn-sm btn  capitalize">Pay</button>
      </div>

      <Table cart={cart} />
    </div>
  );
};

export default MyCart;
