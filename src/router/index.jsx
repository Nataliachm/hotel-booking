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
        path: '/TravellerInformation',
        element: <TravellerInformation />,
      },
      {
        path: '/Payment',
        element: <Payment />,
      },
    ],
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Login/Password',
    element: <Password />,
  },
  {
    path: '/Login/AccountRecovery',
    element: <AccountRecovery />,
  },
  {
    path: '/Login/RegisterPassword',
    element: <RegisterPassword />,
  },
]);

export default router;
