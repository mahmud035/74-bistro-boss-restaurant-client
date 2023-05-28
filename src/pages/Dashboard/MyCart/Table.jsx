import TableRow from './TableRow';

const Table = ({ cart }) => {
  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <TableRow item={item} key={item._id} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
