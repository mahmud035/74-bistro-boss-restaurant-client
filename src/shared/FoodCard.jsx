import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { name, image, recipe, price } = item;
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);

    if (user) {
      fetch(`http://localhost:5000/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${data.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${error.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

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
            <button
              onClick={() => handleAddToCart(item)}
              className="btn-outline btn border-0 border-b-4 text-yellow-500"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
