const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  console.log(item);

  return (
    <div>
      <div className="card h-full w-full bg-base-100 shadow-xl">
        <figure className="relative">
          <img src={image} className="w-full" alt="menu" />
          <p className="absolute right-5 top-5 rounded bg-yellow-500 px-2 py-1 text-lg font-medium text-white">
            ${price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>{recipe.slice(0, 80)}</p>
          <div className="card-actions mt-5 justify-center">
            <button className="btn-outline btn border-0 border-b-4 text-yellow-500">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
