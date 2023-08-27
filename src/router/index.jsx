/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/jsx-one-expression-per-line */
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
import UserBookedRooms from '../pages/UserBookedRooms';
import AdminRoomEdit from '../pages/AdminRoomEdit';
import FormRoomEdit from '../pages/FormRoomEdit';
import PrivateRoute from '../higher-order-components/PrivateRoute';

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
        element: <PrivateRoute role="admin" redirectRoute="/login"><MainHotelConfig /></PrivateRoute>,
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
      {
        path: '/user-booked-rooms',
        element: <UserBookedRooms />,
      },
      {
        path: '/admin-room-edit',
        element: <AdminRoomEdit />,
      },
      {
        path: '/form-room-edit',
        element: <FormRoomEdit />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/login-password/:email',
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
