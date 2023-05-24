import { Link } from 'react-router-dom';
import Cover from '../../shared/Cover';
import MenuItem from '../../shared/MenuItem';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {/* Cover Image */}
      {title && <Cover img={img} title={title} />}

      {/* Menu Items */}
      <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-2">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      {/* Order Button */}
      <div className="mb-20 mt-10 flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="btn-outline btn mt-6 w-[250px]  border-0 border-b-4">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
