import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover';
import menuBg from '../../assets/menu/banner3.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../shared/SectionTitle';
import MenuCategory from './MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';

const Menu = () => {
  const { menu } = useMenu();

  const offered = menu.filter((item) => item.category === 'offered');
  const dessert = menu.filter((item) => item.category === 'dessert');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const salad = menu.filter((item) => item.category === 'salad');
  const soup = menu.filter((item) => item.category === 'soup');

  // console.log(dessert);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* IMP: Main Menu Cover Image and Content */}
      <Cover img={menuBg} title="Our Menu" />

      <div className="my-14" />

      {/* NOTE: Offered Menu Items */}
      <SectionTitle heading="Today's Offer" subHeading="Don't miss" />
      <MenuCategory items={offered} />

      {/* NOTE: Dessert Menu Items */}
      <MenuCategory items={dessert} title="dessert" img={dessertImg} />

      {/* NOTE: Pizza Menu Items */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg} />

      {/* NOTE: Salad Menu Items */}
      <MenuCategory items={salad} title="salad" img={saladImg} />

      {/* NOTE: Soup Menu Items */}
      <MenuCategory items={soup} title="soup" img={soupImg} />
    </div>
  );
};

export default Menu;
