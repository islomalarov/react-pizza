import React, { useEffect, useState } from 'react';
import fetchData from '../api/fetchData';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../components/Pagination';

import { useSelector } from 'react-redux';

const Home = () => {
  const { searchValue } = useSelector((state) => state.searchReducer);
  const { categoryId, sort } = useSelector((state) => state.filterReducer);
  const { currentPage } = useSelector((state) => state.paginationReducer);
  console.log(searchValue);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  useEffect(() => {
    setIsLoading(true);
    fetchData(setItems, setIsLoading, categoryId, sort, searchValue, currentPage);
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} />
        <Sort sort={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination />
    </>
  );
};

export default Home;
