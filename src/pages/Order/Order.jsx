import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover';
import orderBg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { menu } = useMenu();

  const offered = menu.filter((item) => item.category === 'offered');
  const dessert = menu.filter((item) => item.category === 'dessert');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const salad = menu.filter((item) => item.category === 'salaz');
  const soup = menu.filter((item) => item.category === 'soup');

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>

      {/* IMP: Order Page Cover Image and Content */}
      <Cover img={orderBg} title="Order Food" />

      {/* TAB  */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
