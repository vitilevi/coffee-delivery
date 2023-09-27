import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { ThankYou } from './pages/Thank-you';
import { NotFound } from './pages/Not-found';
import { DefaultLayout } from './layouts/default';

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
          path: '/checkout',
          element: <Checkout />
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
