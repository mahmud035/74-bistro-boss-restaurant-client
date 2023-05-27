import { useEffect, useState } from 'react';

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/menu')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMenu(data.data);
          setLoading(false);
        }
      });
  }, []);

  return { menu, loading };
};

export default useMenu;
