import React, { useEffect, useRef } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Categories from '../components/Categories';
import Sort, { sortList } from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../components/Pagination';
import { setFilters } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzasSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort, currentPage } = useSelector((state) => state.filterReducer);
  const { searchValue } = useSelector((state) => state.searchReducer);
  const { items, status } = useSelector((state) => state.pizzasReducer);

  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  async function fetchData(category, sort, searchValue, currentPage) {
    const cat = category > 0 ? `&category=${category}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    const API = `https://6454d733a74f994b334a6d83.mockapi.io/items?page=${currentPage}&limit=4${cat}${search}&sortBy=${sort.property}&order=${sort.type}`;

    dispatch(fetchPizzas(API));
    window.scrollTo(0, 0);
  }
  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        currentPage,
        categoryId,
        property: sort.property,
        type: sort.type,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort, currentPage]);

  //Если был первый рендер, то проверяем URL-параметры и сохраняем в редаксе
  useEffect(() => {
    if (window.location.search) {
      const queryParams = qs.parse(window.location.search.replace('?', ''));
      const sort = sortList.find(
        (obj) => obj.property === queryParams.property && obj.type === queryParams.type,
      );
      dispatch(setFilters({ ...queryParams, sort }));
      isSearch.current = true;
    }
  }, []);

  // Если был первый рендер, то запрашиваем пиццы.
  useEffect(() => {
    if (!isSearch.current) {
      fetchData(categoryId, sort, searchValue, currentPage);
    }
    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} />
        <Sort sort={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'failed' ? (
        <div>
          <h1>Uppppsss!</h1>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeleton : pizzas}</div>
      )}
      <Pagination />
    </>
  );
};

export default Home;
