import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-4 xl:px-0">
        <Category />
        <PopularMenu />
      </div>
    </div>
  );
};

export default Home;
