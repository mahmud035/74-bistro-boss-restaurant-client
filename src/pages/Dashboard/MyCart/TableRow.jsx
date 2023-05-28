import { useContext } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { CartContext } from '../../../contexts/CartProvider';

const TableRow = ({ item, index }) => {
  const { refetch } = useContext(CartContext);
  const { name, image, price, _id } = item;

  const handleDeleteItem = (id) => {
    // console.log(id);

    //* Confirm before DELETE
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              refetch();

              Swal.fire('Deleted!', `${data.message}`, 'success');
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{name}</div>
        </div>
      </td>

      <td>${price}</td>
      <td>
        <button
          onClick={() => handleDeleteItem(_id)}
          className=" btn border-0 bg-red-500"
        >
          <AiOutlineDelete size={28} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
