import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import MainHome from '../pages/MainHome';
import MainHotel from '../pages/MainHotel';
import SuccessPayment from '../pages/SuccessPayment';
import FailPayment from '../pages/FailPayment';
import NotFound from '../pages/NotFound';
import ViewRooms from '../pages/ViewRooms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <MainHome />,
      },
      {
        path: '/hotel',
        element: <MainHotel />,
      },
      {
        path: '/success',
        element: <SuccessPayment />,
      },
      {
        path: '/failPayment',
        element: <FailPayment />,
      },
      {
        path: '/view-rooms',
        element: <ViewRooms />,
      },
    ],
  },
]);

export default router;
