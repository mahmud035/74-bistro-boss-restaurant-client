import Banner from './Banner';
import Category from './Category';
import Featured from './Featured';
import PopularMenu from './PopularMenu';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-4 xl:px-0">
        <Category />
        <PopularMenu />
        <Featured />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
