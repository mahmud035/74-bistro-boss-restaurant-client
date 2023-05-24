import FoodCard from '../../shared/FoodCard';

const OrderTab = ({ items }) => {
  console.log(items);
  return (
    <div className="my-10 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
