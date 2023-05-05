import React, { useEffect, useState } from 'react';
import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import fetchData from './components/api/fetchData';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData(setItems);
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
