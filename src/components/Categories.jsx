import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

const Categories = ({ categoryId }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((catName, index) => (
          <li
            key={index}
            onClick={() => dispatch(setCategoryId(index))}
            className={categoryId === index ? 'active' : ''}>
            {catName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
