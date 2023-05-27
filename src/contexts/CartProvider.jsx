import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from './UserContext';
import Loader from '../shared/Loader';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/cart?email=${user?.email}`;

  const {
    isLoading,
    isError,
    data: cart = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log(cart);

  const cartInfo = { cart, refetch };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
