import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover';
import orderBg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from 'react';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { menu } = useMenu();
  const { category } = useParams();

  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const soup = menu.filter((item) => item.category === 'soup');
  const dessert = menu.filter((item) => item.category === 'dessert');
  const drinks = menu.filter((item) => item.category === 'drinks');

  console.log(drinks);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>

      {/* IMP: Order Page Cover Image and Content */}
      <Cover img={orderBg} title="Order Food" />

      {/* TAB  */}
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="px-5 xl:px-0"
      >
        <TabList>
          <div className="mt-10 flex justify-center border-0 border-y-4 font-semibold">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drink</Tab>
          </div>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel></TabPanel>
        <OrderTab items={soup} />
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
