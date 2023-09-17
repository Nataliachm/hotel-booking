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
import PrivateRoute from '../HOC/PrivateRoute';

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
        path: '/success-payment/:bookedRoomId',
        element: <SuccessPayment />,
      },
      {
        path: '/fail-payment',
        element: (
          <PrivateRoute redirectRoute="/login">
            <FailPayment />
          </PrivateRoute>
        ),
      },
      {
        path: '/traveller-information/:roomId',
        element: (
          <PrivateRoute redirectRoute="/login">
            <TravellerInformation />
          </PrivateRoute>
        ),
      },
      {
        path: '/payment/:roomId',
        element: (
          <PrivateRoute redirectRoute="/login">
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: '/hotel/:hotelId',
        element: <ViewRooms />,
      },
      {
        path: '/hotel-config',
        element: (
          // <PrivateRoute role="admin" redirectRoute="/login">
          <MainHotelConfig />
          // </PrivateRoute>
        ),
      },
      {
        path: '/profile-config',
        element: (
          <PrivateRoute role="admin" redirectRoute="/login">
            <ProfileConfig />
          </PrivateRoute>
        ),
      },
      {
        path: '/form-hotel-registration',
        element: (
          // <PrivateRoute role="admin" redirectRoute="/login">
          <FormHotelRegistration />
          // </PrivateRoute>
        ),
      },
      {
        path: '/profile-config-user',
        element: (
          <PrivateRoute redirectRoute="/login">
            <ProfileConfigUser />
          </PrivateRoute>
        ),
      },
      {
        path: '/user-booked-rooms',
        element: (
          <PrivateRoute redirectRoute="/login">
            <UserBookedRooms />
          </PrivateRoute>
        ),
      },
      {
        path: '/admin-room-edit',
        element: (
        // <PrivateRoute role="admin" redirectRoute="/login">
          <AdminRoomEdit />
        // </PrivateRoute>
        ),
      },
      {
        path: '/form-room-edit',
        element: (
        // <PrivateRoute role="admin" redirectRoute="/login">
          <FormRoomEdit />
        // </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        // path: '/login-password/:email',
        path: '/login-password',
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
    ],
  },
]);

export default router;
