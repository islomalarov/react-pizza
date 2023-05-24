import React from 'react';

const Categories = ({ categoryId, setCategoryId }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((catName, index) => (
          <li
            key={index}
            onClick={() => setCategoryId(index)}
            className={categoryId === index ? 'active' : ''}>
            {catName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
