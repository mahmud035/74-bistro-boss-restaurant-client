import { useEffect, useState } from 'react';
import SectionTitle from '../../shared/SectionTitle';
import MenuItem from '../../shared/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === 'popular');

        setMenu(popularMenu);
      });
  }, []);

  return (
    <section className="pt-20">
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="btn-outline btn mt-6 w-[160px]  border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
