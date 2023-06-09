import { ScaleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
      className="
      flex
      h-[70vh] 
      flex-col 
      items-center 
      justify-center 
    "
    >
      <ScaleLoader size={100} color="yellow" />
    </div>
  );
};

export default Loader;
