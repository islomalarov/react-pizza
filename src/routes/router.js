import Cart from '../pages/Cart';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Pizzza from '../pages/Pizzza';

export const routes = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
  {
    path: 'pizza/:id',
    element: <Pizzza />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
