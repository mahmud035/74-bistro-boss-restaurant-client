const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex items-center justify-between gap-8">
      <img
        src={image}
        className="h-20 w-20"
        alt=""
        // NOTE: Style Using custom css
        style={{ borderRadius: '0 200px 200px 200px' }}
      />
      <div>
        <h3 className="text-xl">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
