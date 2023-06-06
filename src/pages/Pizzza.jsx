import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addItem, selectCartItemById } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const typesName = ['тонкое', 'традиционное'];
const Pizzza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const addedCount = cartItem ? cartItem.count : 0;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id: pizza.id,
      title: pizza.title,
      price: pizza.price,
      imageUrl: pizza.imageUrl,
      type: typesName[activeType],
      size: pizza.sizes[activeSize],
    };
    dispatch(addItem(item));
  };
  useEffect(() => {
    async function getPizza() {
      try {
        const { data } = await axios.get(`https://6454d733a74f994b334a6d83.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert('Нет такой пиццы');
        navigate('/');
      }
    }
    getPizza();
  }, []);

  return !pizza ? (
    <div>loading</div>
  ) : (
    <div className="pizza-block">
      <h4 className="pizza-block__title">{pizza.title}</h4>
      <div className="pizza-block__info">
        <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
        <div className="pizza-block__price">от {pizza.price} ₽</div>
        <div className="pizza-block__selector">
          <ul>
            {pizza.types.map((type, index) => (
              <li
                key={index}
                onClick={() => setActiveType(index)}
                className={activeType === index ? 'active' : ''}>
                {typesName[type]}
              </li>
            ))}
          </ul>
          <ul>
            {pizza.sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? 'active' : ''}>
                {size} см
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pizza-block__info_bottom">
        <div className="cart__bottom-buttons">
          <Link to="/" className="button button--outline button--add go-back-btn">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Вернуться назад</span>
          </Link>
        </div>
        <div className="button button--outline button--add" onClick={onClickAdd}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </div>
      </div>
    </div>
  );
};

export default Pizzza;
