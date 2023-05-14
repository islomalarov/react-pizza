import Cart from '../pages/Cart';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
