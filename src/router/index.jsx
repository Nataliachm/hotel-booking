import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import MainHome from '../pages/MainHome';
import MainHotel from '../pages/MainHotel';
import SuccessPayment from '../pages/SuccessPayment';
import FailPayment from '../pages/FailPayment';
import NotFound from '../pages/NotFound';
import TravellerInformation from '../pages/TravellerInformation';
import Login from '../pages/Login';
import Password from '../pages/Password';
import AccountRecovery from '../pages/AccountRecovery';
import RegisterPassword from '../pages/RegisterPassword';
import Payment from '../pages/Payment';
import ViewRooms from '../pages/ViewRooms';
import MainHotelConfig from '../pages/MainHotelConfig';
import ProfileConfig from '../pages/ProfileConfig';
import FormHotelRegistration from '../pages/FormHotelRegistration';
import ProfileConfigUser from '../pages/ProfileConfigUser';

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
        path: '/fail-payment',
        element: <FailPayment />,
      },
      {
        path: '/traveller-information',
        element: <TravellerInformation />,
      },
      {
        path: '/payment',
        element: <Payment />,
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
      {
        path: '/profile-config-user',
        element: <ProfileConfigUser />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/login-Password/:email',
    element: <Password />,
  },
  {
    path: '/login-accountRecovery',
    element: <AccountRecovery />,
  },
  {
    path: '/login-register-password',
    element: <RegisterPassword />,
  },
]);

export default router;
