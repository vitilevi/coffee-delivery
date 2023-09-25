import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { ThankYou } from './pages/Thank-you';
import { NotFound } from './pages/Not-found';
import { DefaultLayout } from './Layouts/default';

export const router = createBrowserRouter(
  [
    {
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
          errorElement: <NotFound />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/thank-you',
          element: <ThankYou />
        }
      ]
    }
  ],
  {
    basename: import.meta.env.DEV ? '/' : '/coffee-delivery'
  }
);
