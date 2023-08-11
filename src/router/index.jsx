import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import MainHome from '../pages/MainHome';
import MainHotel from '../pages/MainHotel';
import SuccessPayment from '../pages/SuccessPayment';
import FailPayment from '../pages/FailPayment';
import NotFound from '../pages/NotFound';
import ViewRooms from '../pages/ViewRooms';
import MainHotelConfig from '../pages/MainHotelConfig';
import ProfileConfig from '../pages/ProfileConfig';
import FormHotelRegistration from '../pages/FormHotelRegistration';

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
      {
        path: '/hotel-config',
        element: <MainHotelConfig />,
      },
      {
        path: '/profile-config',
        element: <ProfileConfig />,
      },
      {
        path: '/form-hotel-registration',
        element: <FormHotelRegistration />,
      },
    ],
  },
]);

export default router;
