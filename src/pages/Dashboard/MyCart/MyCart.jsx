import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { CartContext } from '../../../contexts/CartProvider';

const MyCart = () => {
  const { cart, refetech } = useContext(CartContext);
  console.log(cart);

  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  console.log(totalPrice);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="flex justify-between">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${totalPrice.toFixed(2)}</h3>
        <button className="btn-warning btn-sm btn capitalize">Pay</button>
      </div>
    </div>
  );
};

export default MyCart;
