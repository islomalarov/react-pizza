import React, { useContext, useEffect, useState } from 'react';
import fetchData from '../api/fetchData';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../components/Pagination';
import SearchContext from '../context/SearchContext';

const Home = () => {
  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
  const [sortType, setSortType] = useState({
    name: 'популярности(по убыв.)',
    sort: 'rating',
    type: 'desc',
  });

  useEffect(() => {
    setIsLoading(true);
    fetchData(setItems, setIsLoading, categoryId, sortType, searchValue, currentPage);
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
