import { useEffect, useState } from 'react';

const useCart = (email) => {
  const [cart, setCart] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/cart?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setLoading(true);
      });
  }, [email]);

  return { cart, loading };
};

export default useCart;

// NOTE:
//* : This custom hook is created for understanding purpose only.

//* It's alternative is CartProvider Component.
