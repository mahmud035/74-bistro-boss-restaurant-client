import { AiOutlineDelete } from 'react-icons/ai';

const TableRow = ({ item, index }) => {
  const { name, image, price } = item;

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
        <button className=" btn border-0 bg-red-500">
          <AiOutlineDelete size={28} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
