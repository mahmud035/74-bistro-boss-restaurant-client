import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover';
import menuBg from '../../assets/menu/banner3.jpg';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Cover img={menuBg} title="Our Menu" />
    </div>
  );
};

export default Menu;
